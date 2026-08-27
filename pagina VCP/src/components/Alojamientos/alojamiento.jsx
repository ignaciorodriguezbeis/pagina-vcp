
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import "./alojamiento.css";
import { hoteles } from './hosteleria';
import { alquileres } from './alquileres';
import { cabañas } from './cabañaApart';
import { campings } from './campings';

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
                &lt;
            </button>
            <article ref={trackRef} className='slider-track'>
                {children}
            </article>
            <button className='slider-button slider-button-next' type='button' aria-label='Ver más alojamientos' onClick={() => move(1)}>
                &gt;
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
                                {cabañas.map((cabañas, index) => (
                                    <article key={`${cabañas.titulo}-${index}`}>
                                        <img src={cabañas.imagen} alt={cabañas.titulo} />
                                        <h3>{cabañas.titulo}</h3>
                                        <p>{cabañas.descripcion}</p>
                                        <h4>dirección: {cabañas.direccion}</h4>
                                        <p>teléfono: {cabañas.telefono}</p>
                                        <h5>precio: {cabañas.precio}</h5>
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
                            <AlojamientoSlider>
                                {campings.map((campings, index) => (
                                    <article key={`${campings.titulo}-${index}`}>
                                        <img src={campings.imagen} alt={campings.titulo} />
                                        <h3>{campings.titulo}</h3>
                                        <p>{campings.descripcion}</p>
                                        <h4>dirección: {campings.direccion}</h4>
                                        <p>teléfono: {campings.telefono}</p>
                                        <h5>precio: {campings.precio}</h5>
                                    </article>
                                ))}
                            </AlojamientoSlider>
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