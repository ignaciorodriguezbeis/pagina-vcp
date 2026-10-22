import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';
import './Profile.css';

function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    const planLabels = {
        visitor: 'Visitante',
        basic: 'Básico',
        'advertiser-premium': 'Anunciante Premium',
        premium: 'Premium',
    };

    const handleLogout = () => {
        logout();
        navigate('/inicio');
    };

    return (
        <main className="profile-page">
            <section className="profile-card">
                <div className="profile-card__header">
                    <div className="profile-card__avatar" aria-hidden="true">
                        {user.fullName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <p className="profile-card__eyebrow">Mi cuenta</p>
                        <h1>{user.fullName}</h1>
                        <p className="profile-card__username">@{user.username}</p>
                    </div>
                </div>

                <h2>Datos del perfil</h2>
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

                <button className="profile-card__logout" type="button" onClick={handleLogout}>
                    Cerrar sesión
                </button>
            </section>
        </main>
    );
}

export default Profile;
