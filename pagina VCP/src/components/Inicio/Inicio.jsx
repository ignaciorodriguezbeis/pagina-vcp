import React from "react";
import "./Inicio.css"
import inicio1 from '../../assets/img/embudo.png';
import inicio2 from '../../assets/img/cucu_logo.jpg';
import inicio3 from '../../assets/img/costa.png';
import inicio4 from '../../assets/img/puente-urbano.png';
import inicio5 from '../../assets/img/teatro.png';
import inicio6 from '../../assets/img/puente-uruguai.png';
import inicio7 from '../../assets/img/vcp-postal.webp'







function Inicio() {
    return (
        <section>
            <div className="inicio" style={{ backgroundImage: `url(${inicio7})` }}>
                <div className="inicio-text">
                    <div className="inicio-subtitle">Villa Carlos Paz - Córdoba</div>
                    <h1>Bienvenidos a Villa Carlos Paz</h1>
                    <p>Información actualizada sobre alojamiento, excursiones, espectáculos y gastronomía.</p>
                    <p>Ya sea que vengas en pareja, con niños o en grupo, acá encontrás todo para planificar tu viaje.</p>
                    <div className="button-group">
                        <button type="button">Dónde alojarte</button>
                        <button type="button">Qué hacer</button>
                    </div>
                </div>
            </div>

            <div class="cards-container">

                <h2>Planificá tu Viaje</h2>
                <p>elegi una categoria para empezar</p>

                <div class="card-plan">
                    <div class="card">
                        <img src={inicio1} />
                        <h4>donde alojarte</h4>
                        <p>Hoteles, cabañas, hostels y campings</p>
                        <button>Ver más</button>
                    </div>
                    <div class="card">
                        <img src={inicio6} />
                        <h4>que hacer</h4>
                        <p>Excursiones, espectáculos y aventura</p>
                        <button>Ver más</button>
                    </div>
                    <div class="card">
                        <img src={inicio3} />
                        <h4>donde comer</h4>
                        <p>Parrillas, cafés y cervecerías</p>
                        <button>Ver más</button>
                    </div>
                    <div class="card">
                        <img src={inicio4} />
                        <h4>oferta y promociones</h4>
                        <p>Descuentos verificados de la temporada</p>
                        <button>Ver más</button>
                    </div>

                    <a to="/publicidad">
                        <div>
                            <h5>publicidad</h5>
                            <h6>espacio publicitario</h6>
                            <p>tu marca acá anuncia con nosotros</p>
                        </div>
                    </a>
                    <a to="/publicidad">
                        <div>
                            <h5>publicidad</h5>
                            <h6>espacio publicitario</h6>
                            <p>tu marca acá anuncia con nosotros</p>
                        </div>
                    </a>
                    <div>
                        <h2>servisios destacados</h2>
                        <p>Los espacios destacados corresponden a comercios anunciantes de CarlosPaz.com. </p>

                        {/* <link to="/promos"> Ver ofrertas</link> */}
                    </div>

                </div>
            </div>


        </section>




    )
}


export default Inicio;
