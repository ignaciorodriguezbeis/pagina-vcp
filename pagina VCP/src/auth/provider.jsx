import { useEffect, useState } from 'react';
import { AuthContext } from './context';

const AUTH_STORAGE_KEY = 'pagina-vcp:auth';

function readDatabase() {
    const storedValue = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!storedValue) {
        return { accounts: [], listingRatings: {}, sessionEmail: null };
    }

    const database = JSON.parse(storedValue);
    if (!Array.isArray(database.accounts)) {
        throw new Error('Los datos de las cuentas guardadas no tienen un formato válido.');
    }

    return database;
}

function getListingRatings(database) {
    return database.listingRatings && typeof database.listingRatings === 'object'
        ? database.listingRatings
        : {};
}

function getCurrentUser(database) {
    if (!database.sessionEmail) {
        return null;
    }

    return database.accounts.find(
        (account) => account.profile.email === database.sessionEmail,
    )?.profile ?? null;
}

function toHex(bytes) {
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function fromHex(hex) {
    return Uint8Array.from(hex.match(/.{2}/g) ?? [], (byte) => Number.parseInt(byte, 16));
}

async function hashPassword(password, salt) {
    if (!globalThis.crypto?.subtle) {
        throw new Error('Este navegador no permite guardar la cuenta de forma segura. Usá una conexión HTTPS o localhost.');
    }

    const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(password),
        'PBKDF2',
        false,
        ['deriveBits'],
    );
    const hash = await crypto.subtle.deriveBits(
        { name: 'PBKDF2', salt, iterations: 120000, hash: 'SHA-256' },
        key,
        256,
    );

    return new Uint8Array(hash);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => getCurrentUser(readDatabase()));
    const [listingRatings, setListingRatings] = useState(() => getListingRatings(readDatabase()));

    useEffect(() => {
        const syncDatabase = () => {
            const database = readDatabase();
            setUser(getCurrentUser(database));
            setListingRatings(getListingRatings(database));
        };
        window.addEventListener('storage', syncDatabase);
        return () => window.removeEventListener('storage', syncDatabase);
    }, []);

    const register = async (profile, password) => {
        const database = readDatabase();
        const email = profile.email.trim().toLowerCase();
        if (database.accounts.some((account) => account.profile.email === email)) {
            throw new Error('Ya existe una cuenta registrada con ese email.');
        }

        const salt = crypto.getRandomValues(new Uint8Array(16));
        const passwordHash = await hashPassword(password, salt);
        const savedProfile = { ...profile, email };
        const updatedDatabase = {
            ...database,
            accounts: [
                ...database.accounts,
                {
                    profile: savedProfile,
                    passwordSalt: toHex(salt),
                    passwordHash: toHex(passwordHash),
                },
            ],
            sessionEmail: email,
        };

        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updatedDatabase));
        setUser(savedProfile);
        setListingRatings(getListingRatings(updatedDatabase));
    };

    const login = async (email, password) => {
        const database = readDatabase();
        const normalizedEmail = email.trim().toLowerCase();
        const account = database.accounts.find(
            (storedAccount) => storedAccount.profile.email === normalizedEmail,
        );

        if (!account) {
            return false;
        }

        const passwordHash = await hashPassword(password, fromHex(account.passwordSalt));
        if (toHex(passwordHash) !== account.passwordHash) {
            return false;
        }

        localStorage.setItem(
            AUTH_STORAGE_KEY,
            JSON.stringify({ ...database, sessionEmail: normalizedEmail }),
        );
        setUser(account.profile);
        setListingRatings(getListingRatings(database));
        return true;
    };

    const updateProfile = (profile) => {
        const database = readDatabase();
        const currentEmail = database.sessionEmail;
        const normalizedEmail = profile.email.trim().toLowerCase();
        const accountIndex = database.accounts.findIndex(
            (account) => account.profile.email === currentEmail,
        );

        if (accountIndex === -1) {
            throw new Error('No se encontró la cuenta que inició sesión.');
        }

        if (database.accounts.some(
            (account, index) => index !== accountIndex && account.profile.email === normalizedEmail,
        )) {
            throw new Error('Ya existe una cuenta registrada con ese email.');
        }

        const savedProfile = { ...database.accounts[accountIndex].profile, ...profile, email: normalizedEmail };
        const accounts = database.accounts.map((account, index) => (
            index === accountIndex ? { ...account, profile: savedProfile } : account
        ));
        const updatedDatabase = { ...database, accounts, sessionEmail: normalizedEmail };

        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updatedDatabase));
        setUser(savedProfile);
    };

    const rateListing = (listingId, rating) => {
        if (typeof listingId !== 'string' || !listingId.trim()) {
            throw new Error('No se pudo identificar el alojamiento.');
        }
        if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
            throw new Error('La calificación debe ser un número entero entre 1 y 5.');
        }

        const database = readDatabase();
        const currentEmail = database.sessionEmail;
        if (!database.accounts.some((account) => account.profile.email === currentEmail)) {
            throw new Error('No se encontró la cuenta que inició sesión.');
        }

        const allListingRatings = getListingRatings(database);
        const ratings = Array.isArray(allListingRatings[listingId])
            ? allListingRatings[listingId].filter(
                (vote) => vote
                    && typeof vote.voterEmail === 'string'
                    && Number.isInteger(vote.rating)
                    && vote.rating >= 1
                    && vote.rating <= 5,
            )
            : [];
        const previousVoteIndex = ratings.findIndex((vote) => vote.voterEmail === currentEmail);
        const vote = { voterEmail: currentEmail, rating };

        if (previousVoteIndex === -1) {
            ratings.push(vote);
        } else {
            ratings[previousVoteIndex] = vote;
        }

        const updatedListingRatings = { ...allListingRatings, [listingId]: ratings };
        localStorage.setItem(
            AUTH_STORAGE_KEY,
            JSON.stringify({ ...database, listingRatings: updatedListingRatings }),
        );
        setListingRatings(updatedListingRatings);
    };

    const rateProfile = (rating) => {
        if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
            throw new Error('La calificación debe ser un número entero entre 1 y 5.');
        }

        const database = readDatabase();
        const currentEmail = database.sessionEmail;
        const accountIndex = database.accounts.findIndex(
            (account) => account.profile.email === currentEmail,
        );

        if (accountIndex === -1) {
            throw new Error('No se encontró la cuenta que inició sesión.');
        }

        const account = database.accounts[accountIndex];
        const ratings = Array.isArray(account.profile.ratings)
            ? account.profile.ratings.filter(
                (vote) => vote
                    && typeof vote.voterEmail === 'string'
                    && Number.isInteger(vote.rating)
                    && vote.rating >= 1
                    && vote.rating <= 5,
            )
            : [];
        const previousVoteIndex = ratings.findIndex((vote) => vote.voterEmail === currentEmail);
        const vote = { voterEmail: currentEmail, rating };

        if (previousVoteIndex === -1) {
            ratings.push(vote);
        } else {
            ratings[previousVoteIndex] = vote;
        }

        const savedProfile = { ...account.profile, ratings };
        const accounts = database.accounts.map((storedAccount, index) => (
            index === accountIndex ? { ...storedAccount, profile: savedProfile } : storedAccount
        ));
        const updatedDatabase = { ...database, accounts };

        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updatedDatabase));
        setUser(savedProfile);
    };

    const logout = () => {
        const database = readDatabase();
        localStorage.setItem(
            AUTH_STORAGE_KEY,
            JSON.stringify({ ...database, sessionEmail: null }),
        );
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, listingRatings, register, login, logout, updateProfile, rateProfile, rateListing }}>
            {children}
        </AuthContext.Provider>
    );
}
