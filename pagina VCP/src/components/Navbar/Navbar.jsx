import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


import alojamientos from '../Alojamientos/alojamiento';
import gastronomia from '../Gastronomia/gastronomia';
import actvidades from '../Actividades/actividades.jsx';

import hosteleria from '../Alojamientos/hosteleria';
import campings from '../Alojamientos/campings.jsx';
import alquileres from '../Alojamientos/alquileres.jsx';

import excursion from '../Actividades/excursion.jsx';
import espectaculos from '../Actividades/espectaculos.jsx';
import aventura from '../Actividades/aventura.jsx';
import deportes from '../Actividades/deportes.jsx';
import infantiles from '../Actividades/infantiles.jsx';

import restaurantes from '../Gastronomia/restaurantes.jsx';
import bares from '../Gastronomia/bares.jsx';
import heladerias from '../Gastronomia/heladerias.jsx';
import cafeterias from '../Gastronomia/cafeterias.jsx';
import cervecerias from '../Gastronomia/cervecerias.jsx';

import logo from '../../assets/img/cucu_logo.jpg';

function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasLoginError, setHasLoginError] = useState(false);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isFormValid = isEmailValid && password.trim() !== '';

        setHasLoginError(!isFormValid);
    };

    const closeLogin = () => {
        setIsLoginOpen(false);
        setHasLoginError(false);
    };

    return (
        <nav >
            <section>
                <div>
                    <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
                    <Link to="/" className="logoname"><span>VCP</span> turismo</Link>
                </div>
            </section>
            <div className="navbar">
                <ul className="list-container">
                    <li className="list-header">
                        <Link to="../alojamientos">Alojamientos</Link>
                        <ul>
                            <li>
                                <Link to="/hosteleria">Hostelería</Link>
                            </li>
                            <li>
                                <Link to="/alquileres">alquileres temporarios</Link>
                            </li>
                            <li>
                                <Link to="/campings">campings</Link>
                            </li>
                            
                        </ul>
                    </li>
                </ul>
                <ul className="list-container">
                    <li className="list-header">
                        <Link to="./actividades">Actividades</Link>
                        <ul>
                            <li>
                                <Link to="/excursion">excursiones</Link>
                            </li>
                            <li>
                                <Link to="/espectaculos">espectáculos</Link>
                            </li>
                            <li>
                                <Link to="/aventura">aventura</Link>
                            </li>
                            <li>
                                <Link to="/deportes">deportes</Link>
                            </li>
                            <li>
                                <Link to="/infantil">infantiles</Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-container">
                    <li className="list-header">
                        <Link to="/gastronomia">Gastronomía</Link>
                        <ul>
                            <li>
                                <Link to="/restaurantes">restaurantes</Link>
                            </li>
                            <li>
                                <Link to="/bares">bares</Link>
                            </li>
                            <li>
                                <Link to="/heladerias">heladerías</Link>
                            </li>
                            <li>
                                <Link to="/cafeterias">cafeterías</Link>
                            </li>
                            <li>
                                <Link to="/cervecerias">cervecerías</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="list-container">
                    <li className="list-header">
                        <Link to="/otros">Otros</Link>
                        <ul>
                            <li>servicios de salud</li>
                            <li>servicios de transporte</li>
                            <li>servicios de seguridad</li>
                            <li>información</li>

                        </ul>

                    </li>
                </ul>
            </div>

            <div className="login-container">
                <button type="button" className="login" onClick={() => setIsLoginOpen(true)}>
                    Login
                </button>
            </div>

            {isLoginOpen && (
                <div className="login-modal" role="presentation" onClick={closeLogin}>
                    <section
                        className="login-modal__content"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="login-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button type="button" className="login-modal__close" onClick={closeLogin} aria-label="Cerrar">
                            &times;
                        </button>
                        <h2 id="login-title">Iniciar sesión</h2>
                        <p>Ingresá tus datos para continuar.</p>
                        <form onSubmit={handleLoginSubmit} noValidate>
                            <label htmlFor="login-email">Email</label>
                            <input
                                id="login-email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className={hasLoginError ? 'login-modal__input--error' : ''}
                                placeholder="tuemail@ejemplo.com"
                            />

                            <label htmlFor="login-password">Contraseña</label>
                            <input
                                id="login-password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className={hasLoginError ? 'login-modal__input--error' : ''}
                                placeholder="Tu contraseña"
                            />

                            {hasLoginError && (
                                <small className="login-modal__error" role="alert">
                                    La dirección de email o la contraseña son incorrectas.
                                </small>
                            )}
                            <button type="submit" className="login-modal__submit">Iniciar sesión</button>
                        </form>
                        <Link to="/login" className="login-modal__register" onClick={closeLogin}>
                            Registrarse
                        </Link>
                    </section>
                </div>
            )}
        </nav>
    )
}

export default Navbar;

