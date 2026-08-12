import React from "react";
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
              <p className="brand-label">CarlosPaz.com</p>
            </div>
          </div>
          <p className="brand-description">
            Guía independiente de turismo de Villa Carlos Paz, Valle de Punilla,
            Córdoba, Argentina.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Alojamiento</h3>
            <ul>
              <li>Hoteles</li>
              <li>Cabañas y aparts</li>
              <li>Hostels</li>
              <li>Alquileres temporarios</li>
              <li>Campings</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Qué hacer</h3>
            <ul>
              <li>Excursiones</li>
              <li>Espectáculos</li>
              <li>Aventura</li>
              <li>Con niños</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Comer</h3>
            <ul>
              <li>Parrillas</li>
              <li>Cafés y confiterías</li>
              <li>Cervecerías</li>
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

