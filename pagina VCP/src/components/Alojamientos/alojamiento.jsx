
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import "./alojamiento.css";
import portal1 from '../../assets/img/hotel-ventana.png'

function AlojamientoSlider({ children }) {
    const trackRef = useRef(null);

    const move = (direction) => {
        trackRef.current?.scrollBy({
            left: direction * trackRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <div className='slider'>
            <button className='slider-button slider-button-prev' type='button' aria-label='Ver alojamientos anteriores' onClick={() => move(-1)}>
                &#8249;
            </button>
            <article ref={trackRef} className='slider-track'>
                {children}
            </article>
            <button className='slider-button slider-button-next' type='button' aria-label='Ver más alojamientos' onClick={() => move(1)}>
                &#8250;
            </button>
        </div>
    );
}

function Alojamiento() {
    return (
        <body className='alojamiento'>

            <header style={{ backgroundImage: `url(${portal1})` }}>
                <p><Link to="/Inicio">inicio</Link> &gt;  Dónde alojarte</p>
                <h1>Dónde queres alojarte</h1>
                <p>hoteles, cabañas, hosteles, camping o departametos/casas</p>
            </header>

            <main>

                <p>Villa Carlos Paz cuenta con miles de plazas repartidas entre hoteles sobre la costanera del lago San Roque, cabañas en las sierras y campings junto al río. Elegí según tu estilo de viaje.</p>

                <section>

                    <div className='subalojamientos'>
                        <h2>hoteles</h2>
                        <article>
                            <button className='slider-button-prev slider-button'>&lt;</button>
                            <div className='slider'>
                                <div>
                                    <p>hotel</p>
                                    <h3>Hotel Portal de las Sierras</h3>
                                    <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                                    <span>Desde $48.000 / noche</span>
                                    <p>+54 3541 42-1000</p>
                                </div>

                                <div>
                                    <p>hotel</p>
                                    <h3>Hotel Portal de las Sierras</h3>
                                    <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                                    <span>Desde $48.000 / noche</span>
                                    <p>+54 3541 42-1000</p>
                                </div>

                                <div>
                                    <p>hotel</p>
                                    <h3>hotel alfin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum autem eligendi qui rerum officia facere doloribus animi totam ratione, libero est magnam quae, aperiam nobis sequi vero voluptates in.</p>
                                    <span>desde $50.000 / noche</span>
                                    <p>+54 3541 2763767</p>
                                </div>

                                <div>
                                    <p>hotel</p>
                                    <h3>hotel el portal</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil aliquam, fugiat voluptatem totam aliquid, excepturi, rerum beatae modi quis assumenda minus! Et, ut! Iure laudantium alias officia dolor dolores!</p>
                                    <span>desde 35.000 / noche</span>
                                    <p>+54 3541 4596394</p>
                                </div>

                                <div>
                                    <p>hotel</p>
                                    <h3>hotel pangolin</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maxime libero quia velit! Perspiciatis, perferendis. Expedita ipsum labore suscipit ipsa. Numquam enim provident expedita harum veritatis facilis laborum sed ad.</p>
                                    <span>desde 70.000 / noche</span>
                                    <p>+54 3541 374628</p>
                                </div>d
                            </div>
                            <button className='slider-button-next slider-button'>&gt;</button>
                        </article>
                    </div>

                    <div className='subalojamientos'>
                        <h2>cabañas y apartamentos</h2>
                        <article>
                            <div>
                                <p>cabaña</p>
                                <h3>Cabañas Los Aromos</h3>
                                <p>Complejo de cabañas equipadas en zona Villa del Lago, ideal para familias.</p>
                                <span>Desde $48.000 / noche</span>
                                <p>+54 3541 42-1000</p>
                            </div>
                            <div>
                                <p>apartamento</p>
                                <h3>Hotel Portal de las Sierras</h3>
                                <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                                <span>Desde $48.000 / noche</span>
                                <p>+54 3541 42-1000</p>
                            </div>
                        </article>
                    </div>

                    <div className='subalojamientos'>
                        <h2>alquileres temporarios</h2>
                        <article>
                            <div>
                                <p>casa</p>
                                <h3>santa fe 1771</h3>
                                <p>Habitaciones compartidas y privadas a pasos del centro, con terraza y parrilla.</p>
                                <span>Desde $12.000 / persona</span>
                                <p>+54 3541 42-1000</p>
                            </div>
                            <div>
                                <p>complejo</p>
                                <h3>miralejos</h3>
                                <p>Habitaciones compartidas y privadas a pasos del centro, con terraza y parrilla.</p>
                                <span>Desde $12.000 / persona</span>
                                <p>+54 3541 42-1000</p>
                            </div>
                        </article>
                    </div>

                    <div className='subalojamientos'>
                        <h2>camping</h2>
                        <article>
                            <div >
                                <p>Campings</p>
                                <span></span>
                                <h3>Camping Municipal San Roque</h3>
                                <p>Acampe junto al lago con proveeduría, sanitarios y bajada de lanchas.</p>
                                <span>Desde $6.000 / persona</span>
                                <p>+54 3541 42-1000</p>
                            </div>
                        </article>
                    </div>

                </section>

                <a className="alojPubli1" to="/publicidad">
                    <div>
                        <h5>publicidad</h5>
                        <h6>espacio publicitario</h6>
                        <p>tu marca acá anuncia con nosotros</p>
                    </div>
                </a>

                <a className="alojPubli2" to="/publicidad">
                    <div>
                        <h5>publicidad</h5>
                        <h6>espacio publicitario</h6>
                        <p>tu marca acá anuncia con nosotros</p>
                    </div>

                    <div>
                        <h5>publicidad</h5>
                        <h6>espacio publicitario</h6>
                        <p>tu marca acá anuncia con nosotros</p>
                    </div>
                </a>
            </main>
        </body>
    );
}

export default Alojamiento;