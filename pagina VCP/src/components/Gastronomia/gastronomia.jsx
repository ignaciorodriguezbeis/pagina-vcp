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
                                    <article key={`${restaurante.titulo}-${index}`}>
                                        <img src={restaurante.imagen} alt={restaurante.titulo} />
                                        <h3>{restaurante.titulo}</h3>
                                        <p>{restaurante.descripcion}</p>
                                        <h4>dirección: {restaurante.direccion}</h4>
                                        <p>teléfono: {restaurante.telefono}</p>
                                        <h5>precio: {restaurante.precio}</h5>
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
                                    <article key={`${bar.titulo}-${index}`}>
                                        <img src={bar.imagen} alt={bar.titulo} />
                                        <h3>{bar.titulo}</h3>
                                        <p>{bar.descripcion}</p>
                                        <h4>dirección: {bar.direccion}</h4>
                                        <p>teléfono: {bar.telefono}</p>
                                        <h5>precio: {bar.precio}</h5>
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
                                    <article key={`${heladeria.titulo}-${index}`}>
                                        <img src={heladeria.imagen} alt={heladeria.titulo} />
                                        <h3>{heladeria.titulo}</h3>
                                        <p>{heladeria.descripcion}</p>
                                        <h4>dirección: {heladeria.direccion}</h4>
                                        <p>teléfono: {heladeria.telefono}</p>
                                        <h5>precio: {heladeria.precio}</h5>
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
                                    <article key={`${cafeteria.titulo}-${index}`}>
                                        <img src={cafeteria.imagen} alt={cafeteria.titulo} />
                                        <h3>{cafeteria.titulo}</h3>
                                        <p>{cafeteria.descripcion}</p>
                                        <h4>dirección: {cafeteria.direccion}</h4>
                                        <p>teléfono: {cafeteria.telefono}</p>
                                        <h5>precio: {cafeteria.precio}</h5>
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
                                    <article key={`${cerveceria.titulo}-${index}`}>
                                        <img src={cerveceria.imagen} alt={cerveceria.titulo} />
                                        <h3>{cerveceria.titulo}</h3>
                                        <p>{cerveceria.descripcion}</p>
                                        <h4>dirección: {cerveceria.direccion}</h4>
                                        <p>teléfono: {cerveceria.telefono}</p>
                                        <h5>precio: {cerveceria.precio}</h5>
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