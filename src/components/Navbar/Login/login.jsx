import { useState } from 'react';
import './login.css';

function Login() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function closeRegister() {
        setIsRegisterOpen(false);
        setError('');
        setSuccess('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        if (formData.get('password') !== formData.get('repeatPassword')) {
            setSuccess('');
            setError('Las contraseñas no coinciden.');
            return;
        }

        setError('');
        setSuccess('Registro completado correctamente.');
        event.currentTarget.reset();
    }

    return (
        <>
            <div className="login">
                <button className="login-button" type="button">Iniciar sesión</button>
                <button className="register-button" type="button" onClick={() => setIsRegisterOpen(true)}>
                    Registrarse
                </button>
            </div>

            {isRegisterOpen && (
                <div className="register-overlay" role="presentation" onMouseDown={closeRegister}>
                    <section className="register-modal" role="dialog" aria-modal="true" aria-labelledby="register-title" onMouseDown={(event) => event.stopPropagation()}>
                        <button className="close-register" type="button" onClick={closeRegister} aria-label="Cerrar registro">×</button>
                        <h2 id="register-title">Crear una cuenta</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="register-grid">
                                <label>Nombre<input name="firstName" type="text" required /></label>
                                <label>Apellido<input name="lastName" type="text" required /></label>
                                <label className="full-field">Email<input name="email" type="email" required /></label>
                                <label>Contraseña<input name="password" type="password" minLength="6" required /></label>
                                <label>Repetir contraseña<input name="repeatPassword" type="password" minLength="6" required /></label>
                                <label>Fecha de nacimiento<input name="birthDate" type="date" required /></label>
                                <label>Género<select name="gender" defaultValue="" required>
                                    <option value="" disabled>Seleccioná una opción</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="terian">Terian</option>
                                    <option value="indefinido">Indefinido</option>
                                    <option value="otros">Otros</option>
                                </select></label>
                            </div>
                            {error && <p className="form-message error" role="alert">{error}</p>}
                            {success && <p className="form-message success">{success}</p>}
                            <button className="submit-register" type="submit">Registrarme</button>
                        </form>
                    </section>
                </div>
            )}
        </>
    );
}

export default Login;
