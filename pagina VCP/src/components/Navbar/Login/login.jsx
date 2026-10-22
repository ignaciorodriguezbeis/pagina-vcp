import { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const passwordIsValid = Array.from(password).length >= 5
        && /\p{L}/u.test(password)
        && /\d/.test(password);
    const showPasswordRequirements = passwordTouched || password !== '';
    const passwordIsInvalid = showPasswordRequirements && !passwordIsValid;
    const passwordsDoNotMatch = confirmPassword !== '' && password !== confirmPassword;
    const passwordIsAccepted = passwordIsValid && confirmPassword !== '' && password === confirmPassword;

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (!selectedPlan) {
            setSelectedPlan('visitor');
        }

        const requiredFields = Array.from(e.currentTarget.querySelectorAll('[required]'));
        requiredFields.forEach((field) => {
            field.setCustomValidity(field.value.trim() ? '' : 'Completá este campo.');
        });

        const hasInvalidFields = !e.currentTarget.checkValidity();
        if (hasInvalidFields || !passwordIsValid || password !== confirmPassword) {
            return;
        }
        // Handle login logic here
    };

    const handleRequiredFieldInput = (e) => {
        e.currentTarget.setCustomValidity(e.currentTarget.value.trim() ? '' : 'Completá este campo.');
    };

    const handlePhoneChange = (index, value) => {
        setPhoneNumbers((currentPhones) => currentPhones.map(
            (phone, phoneIndex) => phoneIndex === index ? value : phone,
        ));
    };

    const addPhoneNumber = () => {
        setPhoneNumbers((currentPhones) => (
            currentPhones.length < 4 ? [...currentPhones, ''] : currentPhones
        ));
    };

    const removeLastPhoneNumber = () => {
        setPhoneNumbers((currentPhones) => (
            currentPhones.length > 1 ? currentPhones.slice(0, -1) : currentPhones
        ));
    };

    return (
        <div className="login-page">
            <section className="login-hero">
                <div className="login-hero__content">
                    <p className="login-breadcrumb"><a href="/">Inicio</a> &gt; Anunciar</p>
                    <h1>Llegá a miles de turistas que planifican su viaje a Carlos Paz</h1>
                    <p>Sumá tu hotel, cabaña, excursión o restaurante a la guía de turismo de referencia de la ciudad. Elegí cómo querés destacarte.</p>
                </div>
            </section>

            <section className="login-plans">

                <article className={`plan-card${selectedPlan === 'visitor' ? ' plan-card--selected' : ''}`}>
                    <h2>Gratis</h2>
                    <p className="plan-label">plan visitante</p>
                    <p className="plan-description">Tu negocio aparece en la categoría correspondiente y en los resultados de búsqueda.</p>
                    <ul>
                        <li>Crear una ficha con descripción, fotos, datos de contacto.</li>
                        <li>mostrar lista de guardados</li>
                        <li>calificar y comentar</li>
                    </ul>
                    <button
                        type="button"
                        aria-pressed={selectedPlan === 'visitor'}
                        onClick={() => setSelectedPlan('visitor')}
                    >
                        {selectedPlan === 'visitor' ? 'seleccionado' : 'Quiero este plan'}
                    </button>
                </article>

                <article className={`plan-card${selectedPlan === 'basic' ? ' plan-card--selected' : ''}`}>
                    <p className="plan-label">plan basico</p>
                    <h2>$25.000 <span>/ mes</span></h2>
                    <p className="plan-description">Tu negocio aparece con distintivo Destacado al inicio de su categoría.</p>
                    <ul>
                        <li> Publicar 1 alojamiento o negocio.</li>
                        <li>Crear una ficha con descripción, fotos, ubicación y datos de contacto.</li>
                        <li>Mostrar precios, horarios y servicios.</li>
                        <li>Recibir consultas de potenciales clientes.</li>
                        <li>Editar y administrar su publicación desde un panel personal.</li>
                    </ul>
                    <button
                        type="button"
                        aria-pressed={selectedPlan === 'basic'}
                        onClick={() => setSelectedPlan('basic')}
                    >
                        {selectedPlan === 'basic' ? 'seleccionado' : 'Quiero este plan'}
                    </button>
                </article>

                <article className={`plan-card${selectedPlan === 'advertiser-premium' ? ' plan-card--selected' : ''}`}>
                    <p className="plan-label">Anunciante Premium</p>
                    <h2>$60.000 <span>/ mes</span></h2>
                    <p className="plan-description">Listado destacado más un espacio publicitario fijo en las páginas más vistas.</p>
                    <ul>
                        <li>Publicar hasta 5 alojamientos o negocios.</li>
                        <li>Todas las funciones del plan Inicial.</li>
                        <li>Mayor visibilidad en los resultados de búsqueda.</li>
                        <li>Estadísticas de visitas y consultas.</li>
                        <li>Promociones y descuentos configurables.</li>
                        <il>Panel de administración con gestión centralizada.</il>
                    </ul>
                    <button
                        type="button"
                        aria-pressed={selectedPlan === 'advertiser-premium'}
                        onClick={() => setSelectedPlan('advertiser-premium')}
                    >
                        {selectedPlan === 'advertiser-premium' ? 'seleccionado' : 'Quiero este plan'}
                    </button>
                </article>

                <article className={`plan-card${selectedPlan === 'premium' ? ' plan-card--selected' : ''}`}>
                    <p className="plan-label">plan premium</p>
                    <h2>$100.000 <span>/ mes</span></h2>
                    <p className="plan-description">Para agencias, complejos y eventos con necesidades específicas de difusión.</p>
                    <ul>
                        <li>Publicaciones ampliadas o ilimitadas, según la política que definas.</li>
                        <li>Todas las funciones del plan Profesional.</li>
                        <li>Máxima prioridad de visibilidad, identificada claramente como promoción.</li>
                        <li>Herramientas para administrar múltiples propiedades.</li>
                        <il>Soporte prioritario y acceso anticipado a nuevas funciones.</il>
                    </ul>
                    <button
                        type="button"
                        aria-pressed={selectedPlan === 'premium'}
                        onClick={() => setSelectedPlan('premium')}
                    >
                        {selectedPlan === 'premium' ? 'seleccionado' : 'Quiero este plan'}
                    </button>
                </article>
            </section>

            <section className="login-contact">
                <div className="login-contact__box">
                    <h2>Contactanos</h2>
                    <p>Dejanos tus datos y un asesor te contacta para armar tu campaña.</p>
                    <form
                        onSubmit={handleSubmit}
                        className={`login-form${hasSubmitted ? ' login-form--submitted' : ''}`}
                        noValidate
                    >
                        <div className="login-form__row">
                            <label>
                                Nombre completo
                                <input
                                    type="text"
                                    placeholder="Tu nombre y apellido"
                                    onInput={handleRequiredFieldInput}
                                    required
                                />
                            </label>
                            <label>
                                Nombre de usuario
                                <input
                                    type="text"
                                    placeholder="Elegí un nombre de usuario"
                                    onInput={handleRequiredFieldInput}
                                    required
                                />
                            </label>
                        </div>
                        <div className="login-form__row">
                            <label>
                                Edad
                                <input
                                    type="number"
                                    min="1"
                                    placeholder="Tu edad"
                                    onInput={handleRequiredFieldInput}
                                    required
                                />
                            </label>
                            <label>
                                Género
                                <select
                                    defaultValue=""
                                    onChange={handleRequiredFieldInput}
                                    required
                                >
                                    <option value="" disabled>Seleccioná tu género</option>
                                    <option value="mujer">Mujer</option>
                                    <option value="hombre">Hombre</option>
                                    <option value="no-binario">No binario</option>
                                    <option value="otro">Otro</option>
                                    <option value="no-especificar">Prefiero no decirlo</option>
                                </select>
                            </label>
                        </div>
                        <div className="login-form__row">
                            <label>
                                Email
                                <input
                                    type="email"
                                    placeholder="tucorreo@ejemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onInput={handleRequiredFieldInput}
                                    required
                                />
                            </label>
                            <div className="login-form__phones">
                                <span className="login-form__field-label">Número de teléfono</span>
                                <div className="login-form__phone-list">
                                    {phoneNumbers.map((phone, index) => (
                                        <div className="login-form__phone-entry" key={index}>
                                            <input
                                                type="tel"
                                                value={phone}
                                                placeholder="+54 3541 ..."
                                                aria-label={index === 0 ? 'Número de teléfono' : `Número de teléfono adicional ${index}`}
                                                onChange={(e) => handlePhoneChange(index, e.target.value)}
                                                onInput={handleRequiredFieldInput}
                                                required
                                            />
                                            {index === 0 ? (
                                                <button
                                                    className="login-form__phone-button"
                                                    type="button"
                                                    onClick={addPhoneNumber}
                                                    disabled={phoneNumbers.length >= 4}
                                                    aria-label="Agregar número de teléfono"
                                                    title={phoneNumbers.length >= 4 ? 'Límite de teléfonos alcanzado' : 'Agregar teléfono'}
                                                >
                                                    +
                                                </button>
                                            ) : index === phoneNumbers.length - 1 && (
                                                <button
                                                    className="login-form__phone-button login-form__phone-button--remove"
                                                    type="button"
                                                    onClick={removeLastPhoneNumber}
                                                    aria-label="Quitar último número adicional"
                                                    title="Quitar último número"
                                                >
                                                    −
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="login-form__row">
                            <label>
                                Crear contraseña
                                <span className="login-form__password-input">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Creá una contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onBlur={() => setPasswordTouched(true)}
                                        autoComplete="new-password"
                                        aria-invalid={passwordIsInvalid}
                                        aria-describedby={passwordIsInvalid ? 'password-requirements' : undefined}
                                        onInput={handleRequiredFieldInput}
                                        required
                                    />
                                    <button
                                        className="login-form__password-toggle"
                                        type="button"
                                        onClick={() => setShowPassword((isVisible) => !isVisible)}
                                        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                        aria-pressed={showPassword}
                                    >
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                                            <circle cx="12" cy="12" r="3" />
                                            {showPassword && <path d="m4 4 16 16" />}
                                        </svg>
                                    </button>
                                </span>
                                {passwordIsInvalid && (
                                    <small id="password-requirements" className="login-form__error" role="alert">
                                        Para aceptar la contraseña, debe tener al menos 5 caracteres, una letra mayúscula o minúscula y al menos un número.
                                    </small>
                                )}
                            </label>
                            <label>
                                Confirmar contraseña
                                <span className="login-form__password-input">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Repetí la contraseña"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        autoComplete="new-password"
                                        aria-invalid={passwordsDoNotMatch}
                                        aria-describedby={passwordsDoNotMatch ? 'password-mismatch' : undefined}
                                        onInput={handleRequiredFieldInput}
                                        required
                                    />
                                    <button
                                        className="login-form__password-toggle"
                                        type="button"
                                        onClick={() => setShowConfirmPassword((isVisible) => !isVisible)}
                                        aria-label={showConfirmPassword ? 'Ocultar confirmación de contraseña' : 'Mostrar confirmación de contraseña'}
                                        aria-pressed={showConfirmPassword}
                                    >
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                                            <circle cx="12" cy="12" r="3" />
                                            {showConfirmPassword && <path d="m4 4 16 16" />}
                                        </svg>
                                    </button>
                                </span>
                                {passwordsDoNotMatch && (
                                    <small id="password-mismatch" className="login-form__error" role="alert">
                                        Las contraseñas no coinciden.
                                    </small>
                                )}
                            </label>
                        </div>
                        {passwordIsAccepted && (
                            <small className="login-form__success" role="status">
                                Contraseña aceptada.
                            </small>
                        )}
                        <button className="login-contact__submit" type="submit">Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Login;
