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
                </div>

                <a class="publi1" to="/publicidad">
                    <div>
                        <h5>publicidad</h5>
                        <h6>espacio publicitario</h6>
                        <p>tu marca acá anuncia con nosotros</p>
                    </div>
                </a>


                <div class="servs">
                    <h2>servisios destacados</h2>
                    <button>Ver Ofertas</button>
                    <p>Los espacios destacados corresponden a comercios anunciantes de CarlosPaz.com. </p>
                    <div class="card-servs">
                        <div >
                            <p>hoteles</p>
                            <span>destacado</span>
                            <h3>Hotel Portal de las Sierras</h3>
                            <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                            <h4>Desde $48.000 / noche</h4>
                            <p>+54 3541 42-1000</p>
                        </div>
                        <div>
                            <p>hoteles</p>
                            <span>destacado</span>
                            <h3>Hotel Portal de las Sierras</h3>
                            <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                            <h4>Desde $48.000 / noche</h4>
                            <p>+54 3541 42-1000</p>
                        </div>
                        <div>
                            <p>hoteles</p>
                            <span>destacado</span>
                            <h3>Hotel Portal de las Sierras</h3>
                            <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                            <h4>Desde $48.000 / noche</h4>
                            <p>+54 3541 42-1000</p>
                        </div>
                        <div>
                            <p>hoteles</p>
                            <span>destacado</span>
                            <h3>Hotel Portal de las Sierras</h3>
                            <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                            <h4>Desde $48.000 / noche</h4>
                            <p>+54 3541 42-1000</p>
                        </div>
                        <div>
                            <p>hoteles</p>
                            <span>destacado</span>
                            <h3>Hotel Portal de las Sierras</h3>
                            <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                            <h4>Desde $48.000 / noche</h4>
                            <p>+54 3541 42-1000</p>
                        </div>
                        <div>
                            <p>hoteles</p>
                            <span>destacado</span>
                            <h3>Hotel Portal de las Sierras</h3>
                            <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                            <h4>Desde $48.000 / noche</h4>
                            <p>+54 3541 42-1000</p>
                        </div>

                    </div>

                </div>

                <a class="publi2" to="/publicidad">
                    <div>
                        <h5>publicidad</h5>
                        <h6>espacio publicitario</h6>
                        <p>tu marca acá anuncia con nosotros</p>
                    </div>
                </a>

                <div class="imprecindibles">
                    <h2>Imprescindibles de Villa Carlos Paz</h2>
                    <p>Lo que no te podés perder en tu visita</p>
                    <div class="imprecindibles-container">
                        <div class="card-impre">
                            <img src="" alt="" />
                            <h3>Reloj Cucú</h3>
                            <p>El emblema de la ciudad: el único reloj cucú de estilo alpino.</p>
                        </div>
                        <div class="card-impre">
                            <img src="" alt="" />
                            <h3>Aerosilla al Cerro de la Cruz</h3>
                            <p>Vistas de 360° del lago San Roque y todo el Valle de Punilla.</p>
                        </div>
                        <div class="card-impre">
                            <img src="" alt="" />
                            <h3>Costanera del Lago San Roque</h3>
                            <p>Atardeceres, deportes náuticos y paseos junto al agua.</p>
                        </div>
                        <div class="card-impre">
                            <img src="" alt="" />
                            <h3>Villa Carlos Paz de noche</h3>
                            <p>Teatros, gastronomía y el puente iluminado sobre el lago.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="negocio">
                <h1>¿Tenés un negocio en Carlos Paz?</h1>
                <p>Aparecé como destacado en tu categoría y ganá visibilidad frente a miles de turistas que planifican su viaje cada temporada.</p>
                <button>Anunciá tu negocio</button>
            </div>

        </section>




    )
}


export default Inicio;
