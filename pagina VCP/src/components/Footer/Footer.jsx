import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-social">
                <a href="https://www.facebook.com/" target="_blank">
                    <img src=".../assets/img/facebook-icon.png" alt="Facebook"></img>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="  .../assets/img/instagram-icon.png" alt="Instagram"></img>
                </a>
                <a href="https://web.whatsapp.com/" target="_blank">
                    <img src=".../assets/img/whatsapp-icon.png" alt="WhatsApp"></img>
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

