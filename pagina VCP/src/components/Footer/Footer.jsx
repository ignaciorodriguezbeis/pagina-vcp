import React from "react";
import "./Footer.css";
import facebook from '../../assets/img/facebook-icon.png';
import instagram from '../../assets/img/instagram-icon.png';
import whatsapp from '../../assets/img/whatsapp-icon.png';
import logo from '../../assets/img/cucu_logo.jpg'

function Footer() {
    return (
        <footer>

            <div className="footerheader">

                <div>
                    <img src={logo} alt="" />
                    <h1>VCP turismo</h1>
                </div>

                <p>Guía independiente de turismo de Villa Carlos Paz, Valle de Punilla, Córdoba, Argentina.</p>
                
            </div>

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

            <div>
                <p> Para más información, contáctanos a través de nuestras redes sociales o al +54 9 3541 123456. Estamos disponibles para responder tus consultas y brindarte asistencia en todo lo relacionado con el turismo en Villa Carlos Paz. </p>
                <p>© 2025 VCP turismo - Todos los derechos reservados.</p>
            </div>

        </footer >
    )
}

export default Footer

