import React from "react";
import "./Inicio.css"
import inicio1 from '../../assets/img/embudo.png';
import inicio2 from '../../assets/img/cucu_logo.jpg';
import inicio3 from '../../assets/img/costa.png';
import inicio4 from '../../assets/img/puente-urbano.png';
import inicio5 from '../../assets/img/teatro.png';
import inicio6 from '../../assets/img/puente-uruguai.png';
import inicio7 from '../../assets/img/hotel-ventana.png';








function Inicio() {
    return (
        <div class="inicio">

            <div class="inicio-text">
                <h1>Bienvenidos a Villa Carlos Paz</h1>
                <p> en este sitio web ofrecemos información actualizada sobre la ciudad.</p>
                <p> ¿Venis aen pareja, con niños o en grupo? Estamos para ayudarte.</p>
                <p>En esta página encontrarás consejos y todo lo necesario para planificar tu viaje y disfrutar al máximo de nuestra ciudad. </p>
            </div>

            <h3>Planifica tu viaje</h3>

            <div class="inicio-catalogo">

                < div class="inicio-catalogo-item">
                    <button>
                        <img src={inicio1} alt="Embudo"></img>

                        <p>excursiones</p></button>
                </div>

                <div class="inicio-catalogo-item">
                    <button>
                        <img src={inicio7} alt="Hotel Ventana"></img>
                        <p>donde alojarse</p>
                    </button>
                </div>

                <div class="inicio-catalogo-item">
                    <button>
                        <img src={inicio3} alt="Costa"></img>
                        <p>impredecibles</p>
                    </button>
                </div>

                <div class="inicio-catalogo-item">
                    <button>
                        <img src={inicio4} alt="Puente Urbano"></img>
                        <p>itinerarios</p>
                    </button>
                </div>

                <div class="inicio-catalogo-item">
                    <button>
                        <img src={inicio5} alt="Teatro"></img>
                        <p>espectáculos</p>
                    </button>
                </div>

                <div class="inicio-catalogo-item">
                    <button>
                        <img src={inicio6} alt="Puente Uruguai"></img>
                        <p>recomendaciones</p>
                    </button>
                </div>

            </div>
        </div>






    )
}


export default Inicio;
