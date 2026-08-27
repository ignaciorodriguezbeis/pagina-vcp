
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import "./alojamiento.css";
import { hoteles } from './hosteleria';
import { alquileres } from './alquileres';
import { cabañaApart } from './cabañaApart'

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
                            <AlojamientoSlider>
                                {hoteles.map((hotel, index) => (
                                    <article key={`${hotel.titulo}-${index}`}>
                                        <img src={hotel.imagen} alt={hotel.titulo} />
                                        <h3>{hotel.titulo}</h3>
                                        <p>{hotel.descripcion}</p>
                                        <h4>dirección: {hotel.direccion}</h4>
                                        <p>teléfono: {hotel.telefono}</p>
                                        <h5>precio: {hotel.precio}</h5>
                                    </article>
                                ))}
                            </AlojamientoSlider>
                        </article>
                    </div>

                    <div className='subalojamientos'>
                        <h2>cabañas y apartamentos</h2>
                        <article>
                           <AlojamientoSlider>
                                {cabañaparts.map((cabañaApart, index) => (
                                    <article key={`${cabañaApart.titulo}-${index}`}>
                                        <img src={cabañaApart.imagen} alt={cabañaApart.titulo} />
                                        <h3>{cabañaApart.titulo}</h3>
                                        <p>{cabañaApart.descripcion}</p>
                                        <h4>dirección: {cabañaApart.direccion}</h4>
                                        <p>teléfono: {cabañaApart.telefono}</p>
                                        <h5>precio: {cabañaApart.precio}</h5>
                                    </article>
                                ))}
                            </AlojamientoSlider>
                        </article>
                    </div>

                    <div className='subalojamientos'>
                        <h2>alquileres temporarios</h2>
                        <article>
                            <AlojamientoSlider>
                                {alquileres.map((alquileres, index) => (
                                    <article key={`${alquileres.titulo}-${index}`}>
                                        <img src={alquileres.imagen} alt={alquileres.titulo} />
                                        <h3>{alquileres.titulo}</h3>
                                        <p>{alquileres.descripcion}</p>
                                        <h4>dirección: {alquileres.direccion}</h4>
                                        <p>teléfono: {alquileres.telefono}</p>
                                        <h5>precio: {alquileres.precio}</h5>
                                    </article>
                                ))}
                            </AlojamientoSlider>
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