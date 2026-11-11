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

function readImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('No se pudo leer la imagen seleccionada.'));
        reader.readAsDataURL(file);
    });
}

function Profile() {
    const { user, listingRatings, logout, updateProfile, updateSubscriptionPlan, rateProfile, rateListing, addProfileComment } = useAuth();
    const navigate = useNavigate();
    const imageInput = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(null);
    const [newProfilePicture, setNewProfilePicture] = useState(null);
    const [error, setError] = useState('');
    const [notice, setNotice] = useState('');
    const [ratingError, setRatingError] = useState('');
    const [listingRatingError, setListingRatingError] = useState('');
    const [commentText, setCommentText] = useState('');
    const [commentError, setCommentError] = useState('');
    const [commentNotice, setCommentNotice] = useState('');
    const [isChangingPlan, setIsChangingPlan] = useState(false);
    const [planError, setPlanError] = useState('');
    const [planNotice, setPlanNotice] = useState('');

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    const ratings = Array.isArray(user.ratings)
        ? user.ratings.filter(
            (vote) => vote
                && typeof vote.voterEmail === 'string'
                && Number.isInteger(vote.rating)
                && vote.rating >= 1
                && vote.rating <= 5,
        )
        : [];
    const averageRating = ratings.length
        ? ratings.reduce((total, vote) => total + vote.rating, 0) / ratings.length
        : 5;
    const userRating = ratings.find((vote) => vote.voterEmail === user.email)?.rating;
    const comments = Array.isArray(user.comments)
        ? user.comments.filter(
            (comment) => comment
                && typeof comment.id === 'string'
                && typeof comment.authorName === 'string'
                && typeof comment.text === 'string',
        )
        : [];
    const profilePicture = newProfilePicture ?? user.profilePicture ?? defaultAvatar;
    const phone = user.phoneNumbers?.[0]?.replace(/\D/g, '');
    const contactUrl = phone
        ? `https://wa.me/${phone}?text=${encodeURIComponent(`Hola ${user.fullName}, vi tu perfil en VCP.`)}`
        : `mailto:${user.email}?subject=${encodeURIComponent('Consulta desde tu perfil VCP')}`;
    const listings = alquileres.slice(0, 3).map((listing) => {
        const id = listing.id ?? `${listing.clase}:${listing.titulo}:${listing.direccion}`;
        const votes = Array.isArray(listingRatings?.[id])
            ? listingRatings[id].filter(
                (vote) => vote
                    && typeof vote.voterEmail === 'string'
                    && Number.isInteger(vote.rating)
                    && vote.rating >= 1
                    && vote.rating <= 5,
            )
            : [];
        return {
            ...listing,
            id,
            averageRating: votes.length
                ? votes.reduce((total, vote) => total + vote.rating, 0) / votes.length
                : 5,
            ratingCount: votes.length,
            userRating: votes.find((vote) => vote.voterEmail === user.email)?.rating,
        };
    });

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

    const handlePlanChange = (plan) => {
        setPlanError('');
        setPlanNotice('');

        try {
            updateSubscriptionPlan(plan);
            setPlanNotice('El nivel de suscripción se actualizó correctamente.');
            setIsChangingPlan(false);
        } catch (planChangeError) {
            setPlanError(planChangeError instanceof Error ? planChangeError.message : 'No se pudo actualizar el nivel de suscripción.');
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

    const handleListingRating = (listingId, rating) => {
        setListingRatingError('');
        try {
            rateListing(listingId, rating);
        } catch (ratingSaveError) {
            setListingRatingError(ratingSaveError instanceof Error ? ratingSaveError.message : 'No se pudo guardar la calificación.');
        }
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        setCommentError('');
        setCommentNotice('');

        try {
            addProfileComment(commentText);
            setCommentText('');
            setCommentNotice('Tu comentario se publicó correctamente.');
        } catch (commentSaveError) {
            setCommentError(commentSaveError instanceof Error ? commentSaveError.message : 'No se pudo publicar el comentario.');
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
                            <div className="profile-section-actions">
                                <button
                                    className="profile-edit-link"
                                    type="button"
                                    onClick={() => {
                                        setIsChangingPlan(false);
                                        if (isEditing) {
                                            handleCancel();
                                        } else {
                                            handleEdit();
                                        }
                                    }}
                                >
                                    {isEditing ? 'Cancelar edición' : 'Editar perfil'}
                                </button>
                                <button
                                    className="profile-edit-link"
                                    type="button"
                                    aria-expanded={isChangingPlan}
                                    aria-controls="profile-plan-options"
                                    onClick={() => {
                                        if (isEditing) handleCancel();
                                        setIsChangingPlan((current) => !current);
                                        setPlanError('');
                                        setPlanNotice('');
                                    }}
                                >
                                    {isChangingPlan ? 'Cerrar niveles' : 'Cambiar suscripción'}
                                </button>
                            </div>
                        </div>

                        {isChangingPlan && (
                            <div className="profile-plan-picker" id="profile-plan-options">
                                <div>
                                    <h3>Cambiar nivel de suscripción</h3>
                                    <p>Elegí el nivel de suscripción que querés usar.</p>
                                </div>
                                <div className="profile-plan-picker__options" role="group" aria-label="Niveles de suscripción">
                                    {Object.entries(planLabels).map(([plan, label]) => (
                                        <button
                                            className={user.selectedPlan === plan ? 'profile-plan-option profile-plan-option--selected' : 'profile-plan-option'}
                                            type="button"
                                            key={plan}
                                            aria-pressed={user.selectedPlan === plan}
                                            disabled={user.selectedPlan === plan}
                                            onClick={() => handlePlanChange(plan)}
                                        >
                                            {label}{user.selectedPlan === plan ? ' · Actual' : ''}
                                        </button>
                                    ))}
                                </div>
                                {planError && <p className="profile-message profile-message--error" role="alert">{planError}</p>}
                                {planNotice && <p className="profile-message" role="status">{planNotice}</p>}
                            </div>
                        )}



                        <div className="profile-verifications">
                            <span>✓ &nbsp;Perfil de {user.username}</span>
                            <div><span>文 &nbsp;Idiomas</span><strong>Español, Inglés</strong></div>
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
                                                <span className="profile-star">★</span> {listing.averageRating.toFixed(2)} · {listing.ratingCount} votos
                                            </div>
                                            <h3>{listing.titulo}</h3>
                                            <p className="profile-listing__price">{listing.precio}</p>
                                            <p className="profile-listing__description">{listing.descripcion}</p>
                                            <span className="profile-listing__details">⌂ &nbsp;2 huéspedes &nbsp; · &nbsp; 1 dormitorio</span>
                                        </div>
                                    </Link>
                                    <div className="profile-listing__rating">
                                        <span>Calificá este alojamiento</span>
                                        <div className="profile-rating__stars" role="group" aria-label={`Calificar ${listing.titulo} del 1 al 5`}>
                                            {[1, 2, 3, 4, 5].map((rating) => (
                                                <button
                                                    className={rating <= (listing.userRating ?? 0) ? 'profile-rating__star profile-rating__star--selected' : 'profile-rating__star'}
                                                    type="button"
                                                    key={rating}
                                                    aria-label={`${rating} ${rating === 1 ? 'estrella' : 'estrellas'}`}
                                                    aria-pressed={listing.userRating === rating}
                                                    onClick={() => handleListingRating(listing.id, rating)}
                                                >
                                                    ★
                                                </button>
                                            ))}
                                        </div>
                                        <span className="profile-rating__hint">
                                            {listing.userRating ? `Tu voto: ${listing.userRating}` : 'Todavía no votaste'}
                                        </span>
                                    </div>
                                    <a className="profile-listing__contact" href={contactUrl} target="_blank" rel="noreferrer">Consultar alojamiento</a>
                                </article>
                            ))}
                        </div>
                        {listingRatingError && <p className="profile-message profile-message--error" role="alert">{listingRatingError}</p>}
                    </section>

                    <section className="profile-comment-form" aria-labelledby="profile-comment-title">
                        <h2 id="profile-comment-title">Dejá tu comentario</h2>
                        <form onSubmit={handleCommentSubmit}>
                            <label htmlFor="profile-comment">Tu comentario</label>
                            <textarea
                                id="profile-comment"
                                value={commentText}
                                onChange={(event) => setCommentText(event.target.value)}
                                rows="4"
                                maxLength="500"
                                placeholder="Escribí tu comentario..."
                                required
                            />
                            <div className="profile-comment-form__footer">
                                <span>{commentText.length}/500</span>
                                <button className="profile-button profile-button--primary" type="submit">Publicar comentario</button>
                            </div>
                            {commentError && <p className="profile-message profile-message--error" role="alert">{commentError}</p>}
                            {commentNotice && <p className="profile-message" role="status">{commentNotice}</p>}
                        </form>
                    </section>

                    <section className="profile-reviews" aria-labelledby="profile-reviews-title">
                        <h2 id="profile-reviews-title">Comentarios</h2>
                        {comments.length > 0 ? (
                            <div className="profile-reviews__grid">
                                {comments.map((comment) => (
                                    <article className="profile-review" key={comment.id}>
                                        <header>
                                            <span className="profile-review__avatar">{comment.authorName.charAt(0).toUpperCase()}</span>
                                            <div>
                                                <h3>{comment.authorName}</h3>
                                                <p>{comment.authorLocation || 'Villa Carlos Paz, Córdoba'}</p>
                                            </div>
                                        </header>
                                        <p className="profile-review__text">“{comment.text}”</p>
                                        {comment.createdAt && (
                                            <p className="profile-review__stay">
                                                {new Date(comment.createdAt).toLocaleDateString('es-AR')}
                                            </p>
                                        )}
                                    </article>
                                ))}
                            </div>
                        ) : <p className="profile-reviews__empty">Todavía no hay comentarios.</p>}
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
