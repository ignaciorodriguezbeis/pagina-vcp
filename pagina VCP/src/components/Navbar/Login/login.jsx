import { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="login-page">
            <section className="login-hero">
                <div className="login-hero__content">
                    <p className="login-breadcrumb">Inicio &gt; Anunciar</p>
                    <h1>Llegá a miles de turistas que planifican su viaje a Carlos Paz</h1>
                    <p>Sumá tu hotel, cabaña, excursión o restaurante a la guía de turismo de referencia de la ciudad. Elegí cómo querés destacarte.</p>
                </div>
            </section>

            <section className="login-plans">
                <article className="plan-card">
                    <p className="plan-label">Listado destacado</p>
                    <h2>$25.000 <span>/ mes</span></h2>
                    <p className="plan-description">Tu negocio aparece con distintivo Destacado al inicio de su categoría.</p>
                    <ul>
                        <li>Distintivo Destacado en tu categoría</li>
                        <li>Prioridad sobre listados gratuitos</li>
                        <li>Teléfono y datos de contacto</li>
                        <li>Estadísticas de visitas</li>
                    </ul>
                    <button type="button">Quiero este plan</button>
                </article>

                <article className="plan-card plan-card--featured">
                    <span className="plan-pill">Más elegido</span>
                    <p className="plan-label">Anunciante Premium</p>
                    <h2>$60.000 <span>/ mes</span></h2>
                    <p className="plan-description">Listado destacado más un espacio publicitario fijo en las páginas más vistas.</p>
                    <ul>
                        <li>Todo lo del plan Destacado</li>
                        <li>Banner en la home y tu categoría</li>
                        <li>Espacio en la barra lateral</li>
                        <li>Prioridad en resultados de ofertas</li>
                        <li>Reporte mensual de rendimiento</li>
                    </ul>
                    <button type="button">Quiero este plan</button>
                </article>

                <article className="plan-card">
                    <p className="plan-label">Campaña a medida</p>
                    <h2>Consultá</h2>
                    <p className="plan-description">Para agencias, complejos y eventos con necesidades específicas de difusión.</p>
                    <ul>
                        <li>Toma de home por temporada</li>
                        <li>Contenido patrocinado</li>
                        <li>Newsletter a suscriptores</li>
                        <li>Cobertura en redes sociales</li>
                    </ul>
                    <button type="button">Quiero este plan</button>
                </article>
            </section>

            <section className="login-contact">
                <div className="login-contact__box">
                    <h2>Contactanos</h2>
                    <p>Dejanos tus datos y un asesor te contacta para armar tu campaña.</p>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="login-form__row">
                            <label>
                                Nombre y apellido
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                />
                            </label>
                            <label>
                                Negocio
                                <input
                                    type="text"
                                    placeholder="Nombre de tu comercio"
                                />
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
                                />
                            </label>
                            <label>
                                Teléfono
                                <input
                                    type="tel"
                                    placeholder="+54 3541 ..."
                                />
                            </label>
                        </div>
                        <label className="login-form__message">
                            Mensaje
                            <textarea placeholder="Contanos sobre tu negocio y qué plan te interesa" />
                        </label>
                        <button className="login-contact__submit" type="submit">Enviar consulta</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Login;
