import React from "react";
import "./Footer.css";
import facebook from '../../assets/img/facebook-icon.png';
import instagram from '../../assets/img/instagram-icon.png';
import whatsapp from '../../assets/img/whatsapp-icon.png';

function Footer() {
    return (
        <footer>
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

