import { useRef } from 'react';

import './gastronomia.css';

import { bares } from './bares';
import { cafeterias } from './cafeterias';
import { cervecerias } from './cervecerias';
import { heladerias } from './heladerias';
import { restaurantes } from './restaurantes';

import gast1 from '../../assets/img/gastronomia.jpg';



function GastronomiaSlider({ children }) {
    const trackRef = useRef(null);

    const move = (direction) => {
        trackRef.current?.scrollBy({
            left: direction * trackRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <div className='slider'>
            <button className='slider-button slider-button-prev' type='button' aria-label='Ver gastronomia anteriores' onClick={() => move(-1)}>
                &lt;
            </button>
            <article ref={trackRef} className='slider-track'>
                {children}
            </article>
            <button className='slider-button slider-button-next' type='button' aria-label='Ver más gastronomia' onClick={() => move(1)}>
                &gt;
            </button>
        </div>
    );
}

function Gastronomia() {
    return (
        <body className='gastronomia'>
            <header style={{ backgroundImage: `url(${gast1})` }}>
                <p><a href="/inicio">inicio</a> &gt; Gastronomia</p>
                <h1>Gastronomía de Villa Carlos Paz</h1>
                <p>Descubrí los mejores lugares para comer, tomar y disfrutar de la vida en Villa Carlos Paz.</p>
            </header>

            <main>
                <p>Descubrí los mejores lugares para comer en Villa Carlos Paz, desde restaurantes tradicionales hasta opciones casuales para pasar el día.</p>

                <section>
                    <div className='subgastronomia'>
                        <h2>Restaurantes</h2>
                        <article>
                            <GastronomiaSlider>
                                {restaurantes.map((restaurante, index) => (
                                    <article key={`${restaurante.nombre}-${index}`}>
                                        <img src={restaurante.imagen} alt={restaurante.nombre} />
                                        <h3>{restaurante.nombre}</h3>
                                        <p>{restaurante.descripcion}</p>
                                        <h4>dirección: {restaurante.direccion}</h4>
                                        <p>horario:{restaurante.horario}</p>
                                        <p>teléfono: {restaurante.telefono}</p>
                                        <h5>delivery: {restaurante.delivery}</h5>
                                    </article>
                                ))}
                            </GastronomiaSlider>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>Bares</h2>
                        <article>
                            <GastronomiaSlider>
                                {bares.map((bar, index) => (
                                    <article key={`${bar.nombre}-${index}`}>
                                        <img src={bar.imagen} alt={bar.nombre} />
                                        <h3>{bar.nombre}</h3>
                                        <p>{bar.descripcion}</p>
                                        <h4>dirección: {bar.direccion}</h4>
                                        <p>horario:{bar.horario}</p>
                                        <p>teléfono: {bar.telefono}</p>
                                        <h5>delivery: {bar.delivery}</h5>
                                    </article>
                                ))}
                            </GastronomiaSlider>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>Heladerías</h2>
                        <article>
                            <GastronomiaSlider>
                                {heladerias.map((heladeria, index) => (
                                    <article key={`${heladeria.nombre}-${index}`}>
                                        <img src={heladeria.imagen} alt={heladeria.nombre} />
                                        <h3>{heladeria.nombre}</h3>
                                        <p>{heladeria.descripcion}</p>
                                        <h4>dirección: {heladeria.direccion}</h4>
                                        <p>horario:{heladeria.horario}</p>
                                        <p>teléfono: {heladeria.telefono}</p>
                                        <h5>delivery: {heladeria.delivery}</h5>
                                    </article>
                                ))}
                            </GastronomiaSlider>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>Cafeterías y panaderías</h2>
                        <article>
                            <GastronomiaSlider>
                                {cafeterias.map((cafeteria, index) => (
                                    <article key={`${cafeteria.nombre}-${index}`}>
                                        <img src={cafeteria.imagen} alt={cafeteria.nombre} />
                                        <h3>{cafeteria.nombre}</h3>
                                        <p>{cafeteria.descripcion}</p>
                                        <h4>dirección: {cafeteria.direccion}</h4>
                                        <p>horario:{cafeteria.horario}</p>
                                        <p>teléfono: {cafeteria.telefono}</p>
                                        <h5>delivery: {cafeteria.delivery}</h5>
                                    </article>
                                ))}
                            </GastronomiaSlider>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>Cervecerías</h2>
                        <article>
                            <GastronomiaSlider>
                                {cervecerias.map((cerveceria, index) => (
                                    <article key={`${cerveceria.nombre}-${index}`}>
                                        <img src={cerveceria.imagen} alt={cerveceria.nombre} />
                                        <h3>{cerveceria.nombre}</h3>
                                        <p>{cerveceria.descripcion}</p>
                                        <h4>dirección: {cerveceria.direccion}</h4>
                                        <p>teléfono: {cerveceria.telefono}</p>
                                        <h5>delivery: {cerveceria.delivery}</h5>
                                    </article>
                                ))}
                            </GastronomiaSlider>
                        </article>
                    </div>
                </section>

                <a className="gastPubli1" to="/publicidad">
                    <div>
                        <h5>publicidad</h5>
                        <h6>espacio publicitario</h6>
                        <p>tu marca acá anuncia con nosotros</p>
                    </div>
                </a>

                <a className="gastPubli2" to="/publicidad">
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

export default Gastronomia;