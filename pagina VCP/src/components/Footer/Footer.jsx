import { Link } from 'react-router-dom';

import "./Footer.css";
import facebook from "../../assets/img/facebook-icon.png";
import instagram from "../../assets/img/instagram-icon.png";
import whatsapp from "../../assets/img/whatsapp-icon.png";
import logo from "../../assets/img/cucu_logo.jpg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="brand-logo">
                        <img src={logo} alt="VCP turismo" />
                        <div>
                            <p className="brand-label"><Link className="footer-link" to="/">CarlosPaz.com</Link></p>
                        </div>
                    </div>
                    <p className="brand-description">
                        Guía independiente de turismo de Villa Carlos Paz, Valle de Punilla,
                        Córdoba, Argentina.
                    </p>
                </div>

                <div className="footer-columns">

                    <div className="footer-column">
                        <h3><Link className="footer-link" to="/alojamientos">Alojamiento</Link></h3>
                        <ul>
                            <li><Link className="footer-link" to="/hosteleria">Hosteleria</Link></li>
                            <li><Link className="footer-link" to="/alquileres">Alquileres Temporarios</Link></li>
                            <li><Link className="footer-link" to="/campings">Campings</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3><Link className="footer-link" to="/actividades">Actividades</Link></h3>
                        <ul>
                            <li><Link className="footer-link" to="/excursion">Excursiones</Link></li>
                            <li><Link className="footer-link" to="/espectaculos">Espectáculos</Link></li>
                            <li><Link className="footer-link" to="/aventura">Aventura</Link></li>
                            <li><Link className="footer-link" to="/deportes">Deportes</Link></li>
                            <li><Link className="footer-link" to="/infantil">para niños</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3><Link className="footer-link" to="/gastronomia">Gastronomía</Link></h3>
                        <ul>
                            <li><Link className="footer-link" to="/restaurantes">Restaurantes</Link></li>
                            <li><Link className="footer-link" to="/bares">Bares</Link></li>
                            <li><Link className="footer-link" to="/heladerias">Heladerías</Link></li>
                            <li><Link className="footer-link" to="/cafeterias">Cafeterías</Link></li>
                            <li><Link className="footer-link" to="/cervecerias">Cervecerías</Link></li>

                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Otros</h3>
                        <ul>
                            <li>Servicios</li>
                            <li>Salud</li>
                            <li>Transporte</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-business">
                <h3>Para negocios</h3>
                <ul>
                    <li>Anunciá tu negocio</li>
                    <li>Publicar una oferta</li>
                </ul>
            </div>

            <div className="footer-bottom">
                <div className="footer-social">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                        <img src={whatsapp} alt="WhatsApp" />
                    </a>
                </div>

                <p>© 2026 CarlosPaz.com — Sitio de demostración. Villa Carlos Paz, Córdoba.</p>
            </div>
        </footer>
    );
}

export default Footer;

