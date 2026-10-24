import { useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';
import './Profile.css';

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

function readImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('No se pudo leer la imagen seleccionada.'));
        reader.readAsDataURL(file);
    });
}

function Profile() {
    const { user, logout, updateProfile } = useAuth();
    const navigate = useNavigate();
    const imageInput = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(null);
    const [newProfilePicture, setNewProfilePicture] = useState(null);
    const [error, setError] = useState('');
    const [notice, setNotice] = useState('');

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    const planLabels = {
        visitor: 'Visitante',
        basic: 'Básico',
        'advertiser-premium': 'Anunciante Premium',
        premium: 'Premium',
    };

    const profilePicture = newProfilePicture ?? user.profilePicture;
    const initial = user.fullName?.charAt(0).toUpperCase() ?? '?';

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
        if (!file) {
            return;
        }
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
            .map((phone) => phone.trim())
            .filter(Boolean);
        if (
            !formData.fullName.trim()
            || !formData.username.trim()
            || !formData.email.trim()
            || phoneNumbers.length === 0
        ) {
            setError('Completá todos los datos requeridos y agregá al menos un teléfono.');
            return;
        }

        try {
            updateProfile({
                ...formData,
                fullName: formData.fullName.trim(),
                username: formData.username.trim(),
                age: formData.age,
                gender: formData.gender,
                email: formData.email.trim(),
                phoneNumbers,
                ...(newProfilePicture ? { profilePicture: newProfilePicture } : {}),
            });
            setIsEditing(false);
            setFormData(null);
            setNewProfilePicture(null);
            setNotice('Los datos del perfil se guardaron correctamente.');
            if (imageInput.current) {
                imageInput.current.value = '';
            }
        } catch (saveError) {
            setError(saveError instanceof Error ? saveError.message : 'No se pudieron guardar los cambios.');
        }
    };

    return (
        <main className="profile-page">
            <section className="profile-card">
                <div className="profile-card__header">
                    <div className="profile-card__avatar-wrap">
                        {profilePicture ? (
                            <img className="profile-card__avatar" src={profilePicture} alt={`Foto de perfil de ${user.fullName}`} />
                        ) : (
                            <div className="profile-card__avatar" aria-hidden="true">{initial}</div>
                        )}
                        {isEditing && (
                            <>
                                <input
                                    ref={imageInput}
                                    className="profile-card__image-input"
                                    id="profile-picture"
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    onChange={handleImageChange}
                                />
                                <label className="profile-card__image-button" htmlFor="profile-picture">
                                    Cambiar foto
                                </label>
                            </>
                        )}
                    </div>
                    <div>
                        <p className="profile-card__eyebrow">Mi cuenta</p>
                        <h1>{user.fullName}</h1>
                        <p className="profile-card__username">@{user.username}</p>
                    </div>
                </div>

                <h2>Datos del perfil</h2>
                {isEditing ? (
                    <form className="profile-card__form" onSubmit={handleSubmit}>
                        <label>
                            Nombre completo
                            <input name="fullName" value={formData.fullName} onChange={handleChange} required />
                        </label>
                        <label>
                            Nombre de usuario
                            <input name="username" value={formData.username} onChange={handleChange} required />
                        </label>
                        <label>
                            Email
                            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
                        </label>
                        <label>
                            Edad
                            <input name="age" type="number" min="1" value={formData.age} onChange={handleChange} required />
                        </label>
                        <label>
                            Género
                            <select name="gender" value={formData.gender} onChange={handleChange} required>
                                <option value="mujer">Mujer</option>
                                <option value="hombre">Hombre</option>
                                <option value="no-binario">No binario</option>
                                <option value="otro">Otro</option>
                                <option value="no-especificar">Prefiero no decirlo</option>
                            </select>
                        </label>
                        <label>
                            Teléfonos (separados por coma)
                            <input
                                name="phoneNumbers"
                                value={formData.phoneNumbers}
                                onChange={handleChange}
                                placeholder="Ej.: +54 11 1234-5678"
                                required
                            />
                        </label>

                        {error && <p className="profile-card__message profile-card__message--error" role="alert">{error}</p>}
                        <div className="profile-card__actions">
                            <button className="profile-card__save" type="submit">Guardar cambios</button>
                            <button className="profile-card__cancel" type="button" onClick={handleCancel}>Cancelar</button>
                        </div>
                    </form>
                ) : (
                    <>
                        <dl className="profile-card__details">
                            <div>
                                <dt>Email</dt>
                                <dd>{user.email}</dd>
                            </div>
                            <div>
                                <dt>Edad</dt>
                                <dd>{user.age}</dd>
                            </div>
                            <div>
                                <dt>Género</dt>
                                <dd>{user.gender}</dd>
                            </div>
                            <div>
                                <dt>Teléfonos</dt>
                                <dd>{user.phoneNumbers.join(', ')}</dd>
                            </div>
                            <div>
                                <dt>Plan elegido</dt>
                                <dd>{planLabels[user.selectedPlan] ?? user.selectedPlan}</dd>
                            </div>
                        </dl>
                        {notice && <p className="profile-card__message" role="status">{notice}</p>}
                        <button className="profile-card__save" type="button" onClick={handleEdit}>
                            Editar perfil
                        </button>
                    </>
                )}

                <button className="profile-card__logout" type="button" onClick={handleLogout}>
                    Cerrar sesión
                </button>
            </section>
        </main>
    );
}

export default Profile;
