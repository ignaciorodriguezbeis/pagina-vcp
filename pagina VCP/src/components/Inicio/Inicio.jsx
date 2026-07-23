import React from "react";
import { useNavigate } from 'react-router-dom'
import "./Inicio.css"
import inicio1 from '../../assets/img/embudo.png';
import inicio2 from '../../assets/img/cucu_logo.jpg';
import inicio3 from '../../assets/img/costa.png';
import inicio4 from '../../assets/img/puente-urbano.png';
import inicio5 from '../../assets/img/teatro.png';
import inicio6 from '../../assets/img/puente-uruguai.png';
import inicio7 from '../../assets/img/hotel-ventana.png';

function Inicio() {
    const navigate = useNavigate()

    return (
        <div className="inicio">

            <div class="inicio-text">
                <h1>Bienvenidos a Villa Carlos Paz</h1>
                <p> en este sitio web ofrecemos información actualizada sobre la ciudad.</p>
                <p> ¿Venis aen pareja, con niños o en grupo? Estamos para ayudarte.</p>
                <p>En esta página encontrarás consejos y todo lo necesario para planificar tu viaje y disfrutar al máximo de nuestra ciudad. </p>
            </div>

            <h3>Planifica tu viaje</h3>

            <div class="inicio-catalogo">

                <div className="inicio-catalogo-item">
                    <button type="button" onClick={() => navigate('/actividades')}>
                        <img src={inicio1} alt="excursiones" />
                        <p>actividades</p>
                    </button>
                </div>

                <div className="inicio-catalogo-item">
                    <button type="button" onClick={() => navigate('/hosteleria')}>
                        <img src={inicio7} alt="Hotel Ventana" />
                        <p>donde alojarse</p>
                    </button>
                </div>

                <div className="inicio-catalogo-item">
                    <button type="button" onClick={() => navigate('/paisajes')}>
                        <img src={inicio3} alt="Costa" />
                        <p>paisajes</p>
                    </button>
                </div>

                <div className="inicio-catalogo-item">
                    <button type="button" onClick={() => navigate('/gastronomia')}>
                        <img src={inicio4} alt="Puente Urbano" />
                        <p>itinerarios</p>
                    </button>
                </div>

                <div className="inicio-catalogo-item">
                    <button type="button" onClick={() => navigate('/espectaculos')}>
                        <img src={inicio5} alt="Teatro" />
                        <p>espectáculos</p>
                    </button>
                </div>

                <div className="inicio-catalogo-item">
                    <button type="button" onClick={() => navigate('/catalogo')}>
                        <img src={inicio6} alt="Puente Uruguai" />
                        <p>recomendaciones</p>
                    </button>
                </div>

            </div>
        </div>






    )
}


export default Inicio;

