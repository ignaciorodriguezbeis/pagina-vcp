import { useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';
import { alquileres } from '../Alojamientos/alquileres';
import costa from '../../assets/img/costa.png';
import defaultAvatar from '../../assets/img/usuario.png';
import './Profile.css';

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const planLabels = {
    visitor: 'Visitante',
    basic: 'Anfitrión',
    'advertiser-premium': 'Anfitrión destacado',
    premium: 'Anfitrión premium',
};

const guestReviews = [
    {
        name: 'Martina G.',
        location: 'Córdoba, Argentina',
        initial: 'M',
        text: 'Lucía pensó en todo: un mapa con sus lugares favoritos y recomendaciones para disfrutar la ciudad. ¡Volveremos!',
        stay: 'Septiembre 2026 · Casa en las Sierras',
    },
    {
        name: 'Thomas R.',
        location: 'Hamburgo, Alemania',
        initial: 'T',
        text: 'La vista desde la habitación es increíble. La comunicación fue rápida y sus recomendaciones hicieron el viaje.',
        stay: 'Agosto 2026 · Departamento céntrico',
    },
    {
        name: 'Camila y Joaquín',
        location: 'Santiago, Chile',
        initial: 'C',
        text: 'Silencio, naturaleza y el lago a pocos minutos. La cabaña estaba impecable y la anfitriona fue muy cálida.',
        stay: 'Julio 2026 · Cabaña en las Sierras',
    },
    {
        name: 'Rafael S.',
        location: 'São Paulo, Brasil',
        initial: 'R',
        text: 'Perfecto para la familia. Casa amplia, cocina completa y una anfitriona muy atenta. ¡Lo recomiendo!',
        stay: 'Junio 2026 · Casa en las Sierras',
    },
];

function readImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('No se pudo leer la imagen seleccionada.'));
        reader.readAsDataURL(file);
    });
}

function Profile() {
    const { user, logout, updateProfile, rateProfile } = useAuth();
    const navigate = useNavigate();
    const imageInput = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(null);
    const [newProfilePicture, setNewProfilePicture] = useState(null);
    const [error, setError] = useState('');
    const [notice, setNotice] = useState('');
    const [ratingError, setRatingError] = useState('');

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    const ratings = Array.isArray(user.ratings)
        ? user.ratings.filter(
            (vote) => vote && Number.isInteger(vote.rating) && vote.rating >= 1 && vote.rating <= 5,
        )
        : [];
    const averageRating = ratings.length
        ? ratings.reduce((total, vote) => total + vote.rating, 0) / ratings.length
        : 5;
    const userRating = ratings.find((vote) => vote.voterEmail === user.email)?.rating;
    const profilePicture = newProfilePicture ?? user.profilePicture ?? defaultAvatar;
    const phone = user.phoneNumbers?.[0]?.replace(/\D/g, '');
    const contactUrl = phone
        ? `https://wa.me/${phone}?text=${encodeURIComponent(`Hola ${user.fullName}, vi tu perfil en VCP.`)}`
        : `mailto:${user.email}?subject=${encodeURIComponent('Consulta desde tu perfil VCP')}`;
    const listings = alquileres.slice(0, 3);

    const handleLogout = () => {
        logout();
        navigate('/inicio');
    };

    const handleEdit = () => {
        setFormData({
            fullName: user.fullName,
            username: user.username,
            age: user.age,
            gender: user.gender,
            email: user.email,
            phoneNumbers: user.phoneNumbers.join(', '),
            location: user.location ?? 'Villa Carlos Paz, Córdoba',
            bio: user.bio ?? 'Me encanta compartir los rincones y experiencias que hacen especial a Villa Carlos Paz.',
        });
        setNewProfilePicture(null);
        setError('');
        setNotice('');
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData(null);
        setNewProfilePicture(null);
        setError('');
        if (imageInput.current) {
            imageInput.current.value = '';
        }
    };

    const handleChange = (event) => {
        setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
    };

    const handleImageChange = async (event) => {
        const [file] = event.target.files ?? [];
        if (!file) return;
        if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
            setError('Elegí una imagen JPG, PNG o WebP.');
            event.target.value = '';
            return;
        }
        if (file.size > MAX_IMAGE_SIZE) {
            setError('La imagen debe pesar 2 MB o menos.');
            event.target.value = '';
            return;
        }

        try {
            setNewProfilePicture(await readImage(file));
            setError('');
            setNotice('');
        } catch (imageError) {
            setError(imageError instanceof Error ? imageError.message : 'No se pudo cargar la imagen.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setNotice('');

        const phoneNumbers = formData.phoneNumbers
            .split(',')
            .map((value) => value.trim())
            .filter(Boolean);
        if (!formData.fullName.trim() || !formData.username.trim() || !formData.email.trim() || phoneNumbers.length === 0) {
            setError('Completá los datos requeridos y agregá al menos un teléfono.');
            return;
        }

        try {
            updateProfile({
                ...formData,
                fullName: formData.fullName.trim(),
                username: formData.username.trim(),
                email: formData.email.trim(),
                phoneNumbers,
                ...(newProfilePicture ? { profilePicture: newProfilePicture } : {}),
            });
            setIsEditing(false);
            setFormData(null);
            setNewProfilePicture(null);
            setNotice('Los datos del perfil se guardaron correctamente.');
            if (imageInput.current) imageInput.current.value = '';
        } catch (saveError) {
            setError(saveError instanceof Error ? saveError.message : 'No se pudieron guardar los cambios.');
        }
    };

    const handleRating = (rating) => {
        setRatingError('');
        setNotice('');
        try {
            rateProfile(rating);
            setNotice('Tu calificación se guardó correctamente.');
        } catch (ratingSaveError) {
            setRatingError(ratingSaveError instanceof Error ? ratingSaveError.message : 'No se pudo guardar la calificación.');
        }
    };

    const handleShare = async () => {
        setNotice('');
        try {
            if (navigator.share) {
                await navigator.share({
                    title: `Perfil de ${user.fullName} · VCP`,
                    text: `Conocé el perfil de ${user.fullName} en Villa Carlos Paz.`,
                    url: window.location.href,
                });
            } else if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(window.location.href);
                setNotice('Enlace del perfil copiado.');
            } else {
                throw new Error('Tu navegador no permite compartir el enlace desde esta página.');
            }
        } catch (shareError) {
            if (shareError instanceof Error && shareError.name !== 'AbortError') {
                setNotice(shareError.message || 'No se pudo compartir el perfil.');
            }
        }
    };

    return (
        <main className="profile-page">
            <div className="profile-shell">
                <section className="profile-hero" aria-label="Perfil de anfitrión">
                    <img className="profile-hero__cover" src={costa} alt="Paisaje del lago y las sierras de Villa Carlos Paz" />
                    <div className="profile-hero__identity">
                        <img className="profile-hero__avatar" src={profilePicture} alt={`Foto de ${user.fullName}`} />
                        <div className="profile-hero__summary">
                            <span className="profile-badge">✦ {planLabels[user.selectedPlan] ?? 'Perfil VCP'}</span>
                            <h1>{user.fullName}</h1>
                            <div className="profile-hero__meta">
                                <span>⌖ {user.location || 'Villa Carlos Paz, Córdoba'}</span>
                                <span><span className="profile-star">★</span> {averageRating.toFixed(2)} · {ratings.length} votos</span>
                                <span>9 años como anfitrión/a</span>
                            </div>
                            <div className="profile-rating">
                                <span>Calificá este perfil</span>
                                <div className="profile-rating__stars" role="group" aria-label="Calificar perfil del 1 al 5">
                                    {[1, 2, 3, 4, 5].map((rating) => (
                                        <button
                                            className={rating <= (userRating ?? 0) ? 'profile-rating__star profile-rating__star--selected' : 'profile-rating__star'}
                                            type="button"
                                            key={rating}
                                            aria-label={`${rating} ${rating === 1 ? 'estrella' : 'estrellas'}`}
                                            aria-pressed={userRating === rating}
                                            onClick={() => handleRating(rating)}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                                {userRating
                                    ? <span className="profile-rating__hint">Tu voto: {userRating}. Podés cambiarlo.</span>
                                    : <span className="profile-rating__hint">Todavía no votaste.</span>}
                                {ratingError && <p className="profile-message profile-message--error" role="alert">{ratingError}</p>}
                            </div>
                        </div>
                        <div className="profile-hero__actions">
                            <button className="profile-button profile-button--outline" type="button" onClick={handleShare}>
                                <span aria-hidden="true">↗</span> Compartir
                            </button>
                            <a className="profile-button profile-button--primary" href={contactUrl} target="_blank" rel="noreferrer">
                                Contactar
                            </a>
                        </div>
                    </div>
                </section>

                <div className="profile-content">
                    <section className="profile-about">
                        <div className="profile-section-heading">
                            <div>
                                <h2>Sobre {user.fullName.split(' ')[0]}</h2>
                                <p className="profile-about__text">
                                    {user.bio || 'Me encanta compartir los rincones y experiencias que hacen especial a Villa Carlos Paz.'}
                                </p>
                            </div>
                            <button className="profile-edit-link" type="button" onClick={isEditing ? handleCancel : handleEdit}>
                                {isEditing ? 'Cancelar edición' : 'Editar perfil'}
                            </button>
                        </div>

                        <div className="profile-facts">
                            <div><span>◷ &nbsp;Tasa de respuesta</span><strong>100%</strong></div>
                            <div><span>◷ &nbsp;Responde en</span><strong>menos de 1 hora</strong></div>
                            <div><span>文 &nbsp;Idiomas</span><strong>Español, Inglés</strong></div>
                        </div>

                        <div className="profile-verifications">
                            <span>✓ &nbsp;Perfil de {user.username}</span>
                            <span className="profile-chip">Miembro {planLabels[user.selectedPlan] ?? 'VCP'}</span>
                            <span className="profile-chip">{user.email}</span>
                        </div>

                        {notice && <p className="profile-message" role="status">{notice}</p>}

                        {isEditing && (
                            <form className="profile-edit-form" onSubmit={handleSubmit}>
                                <div className="profile-edit-form__photo">
                                    <img src={profilePicture} alt="" />
                                    <div>
                                        <strong>Foto de perfil</strong>
                                        <input
                                            ref={imageInput}
                                            id="profile-picture"
                                            type="file"
                                            accept="image/jpeg,image/png,image/webp"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                                <label>Nombre completo<input name="fullName" value={formData.fullName} onChange={handleChange} required /></label>
                                <label>Nombre de usuario<input name="username" value={formData.username} onChange={handleChange} required /></label>
                                <label>Email<input name="email" type="email" value={formData.email} onChange={handleChange} required /></label>
                                <label>Teléfonos (separados por coma)<input name="phoneNumbers" value={formData.phoneNumbers} onChange={handleChange} required /></label>
                                <label>Ubicación<input name="location" value={formData.location} onChange={handleChange} /></label>
                                <label className="profile-edit-form__wide">Sobre mí<textarea name="bio" rows="3" maxLength="400" value={formData.bio} onChange={handleChange} /></label>
                                {error && <p className="profile-message profile-message--error" role="alert">{error}</p>}
                                <div className="profile-edit-form__actions">
                                    <button className="profile-button profile-button--primary" type="submit">Guardar perfil</button>
                                    <button className="profile-button profile-button--outline" type="button" onClick={handleCancel}>Cancelar</button>
                                </div>
                            </form>
                        )}
                    </section>

                    <section className="profile-listings" aria-labelledby="profile-listings-title">
                        <div className="profile-section-heading">
                            <h2 id="profile-listings-title">Alojamientos de {user.fullName.split(' ')[0]}</h2>
                            <Link to="/alquileres">Ver todos los alojamientos <span aria-hidden="true">→</span></Link>
                        </div>
                        <div className="profile-listings__grid">
                            {listings.map((listing, index) => (
                                <article className="profile-listing" key={`${listing.titulo}-${index}`}>
                                    <Link className="profile-listing__link" to="/alquileres" aria-label={`Ver ${listing.titulo} en alojamientos`}>
                                        <div className="profile-listing__image-wrap">
                                            <img src={listing.imagen} alt={listing.titulo} />
                                            {index === 1 && <span className="profile-listing__tag">Nuevo</span>}
                                        </div>
                                        <div className="profile-listing__body">
                                            <div className="profile-listing__type">
                                                <span>{listing.clase ?? 'ALOJAMIENTO'}</span>
                                                <span className="profile-star">★</span> {index === 0 ? '4.95' : '4.93'}
                                            </div>
                                            <h3>{listing.titulo}</h3>
                                            <p className="profile-listing__price">{listing.precio}</p>
                                            <p className="profile-listing__description">{listing.descripcion}</p>
                                            <span className="profile-listing__details">⌂ &nbsp;2 huéspedes &nbsp; · &nbsp; 1 dormitorio</span>
                                        </div>
                                    </Link>
                                    <a className="profile-listing__contact" href={contactUrl} target="_blank" rel="noreferrer">Consultar alojamiento</a>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="profile-reviews" aria-labelledby="profile-reviews-title">
                        <h2 id="profile-reviews-title"><span className="profile-star">★</span> {averageRating.toFixed(2)} · {ratings.length} votos</h2>
                        <div className="profile-reviews__grid">
                            {guestReviews.map((review) => (
                                <article className="profile-review" key={review.name}>
                                    <header>
                                        <span className="profile-review__avatar">{review.initial}</span>
                                        <div><h3>{review.name}</h3><p>{review.location}</p></div>
                                    </header>
                                    <p className="profile-review__text">“{review.text}”</p>
                                    <p className="profile-review__stay">{review.stay}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <div className="profile-account-actions">
                        <Link to="/alojamientos">Explorar alojamientos</Link>
                        <button type="button" onClick={handleLogout}>Cerrar sesión</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;
