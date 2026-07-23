import React from "react";
import "./Inicio.css"
import inicio1 from '../../assets/img/embudo.png';
import inicio2 from '../../assets/img/cucu_logo.jpg';
import inicio3 from '../../assets/img/costa.png';
import inicio4 from '../../assets/img/puente-urbano.png';
import inicio5 from '../../assets/img/teatro.png';
import inicio6 from '../../assets/img/puente-uruguai.png';







function Inicio() {
    return (
        <div class="inicio">
            <div class="slider-container">
                <div class="slider">
                    <div class="slide"><img src={inicio1} ></img></div>
                    <div class="slide"><img src={inicio2} ></img></div>
                    <div class="slide"><img src={inicio3} ></img></div>
                    <div class="slide"><img src={inicio4} ></img></div>
                    <div class="slide"><img src={inicio5} ></img></div>
                    <div class="slide"><img src={inicio6} ></img></div>
                </div>
            </div>
            <div class="inicio-text">
                <h1>Bienvenidos a Villa Carlos Paz</h1>
                <p> en este sitio web ofrecemos información actualizada sobre la ciudad.</p>
                <p> ¿Venis aen pareja, con niños o en grupo? Estamos para ayudarte.</p>
                <p>En esta página encontrarás consejos y todo lo necesario para planificar tu viaje y disfrutar al máximo de nuestra ciudad. </p>
            </div>


            <div class="inicio-image">
                <h2>hostelerias</h2>
                <img src="../../assets/inicio.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio2.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio5.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio7.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio8.jpg" alt="Imagen de Villa Carlos Paz"></img>
            </div>


            <div class="inicio-image">
                <h2>gastronomia</h2>
                <img src="../../assets/inicio.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio2.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio5.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio7.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio8.jpg" alt="Imagen de Villa Carlos Paz"></img>
            </div>
            <div class="inicio-image">
                <h2>actividades</h2>
                <img src="../../assets/inicio8.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio9.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio10.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio11.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio14.jpg" alt="Imagen de Villa Carlos Paz"></img>
            </div>
            <div class="inicio-image">
                <h2>puintos de interes</h2>
                <img src="../../assets/inicio3.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio4.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio6.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio12.jpg" alt="Imagen de Villa Carlos Paz"></img>
                <img src="../../assets/inicio13.jpg" alt="Imagen de Villa Carlos Paz"></img>
            </div>
        </div>






    )
}


export default Inicio;
