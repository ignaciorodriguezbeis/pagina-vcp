import { useRef } from 'react';
import { Link } from 'react-router-dom';

import './gastronomia.css';

import Inicio from '../Inicio/Inicio';
import { bares } from './bares';
import { cafe } from './cafeterias';
import { cerveza } from './cervecerias';
import { heladeria } from './heladerias';
import { restaurantes } from './restaurantes';

import bar1 from '../../assets/img/barCosta.jpg';
import cafe1 from '../../assets/img/cafePan.jpg';
import bear1 from '../../assets/img/bear.webp';
import helader1 from '../../assets/img/helado.jpg';
import rest1 from '../../assets/img/restaurante.webp';
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
                <p><a href="/inicio">inicio</a> &gt; Gastronomia </p>
                <h1>Gastronomia de Villa Carlos Paz</h1>
                <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
            </header>

            <main >
                <p>Descubrí los mejores lugares para comer en Villa Carlos Paz, desde restaurantes tradicionales hasta opciones casuales para pasar el día.</p>

                <section>
                    <div className='subgastronomia'>
                        <h2>Restaurantes</h2>
                        <article>
                            <GastronomiaSlider>
                                {restaurantes.map((restaurantes, index) => (
                                    <article key={`${restaurantes.titulo}-${index}`}>
                                        <img src={restaurantes.imagen} alt={restaurantes.titulo} />
                                        <h3>{restaurantes.titulo}</h3>
                                        <p>{restaurantes.descripcion}</p>
                                        <h4>dirección: {restaurantes.direccion}</h4>
                                        <p>teléfono: {restaurantes.telefono}</p>
                                        <h5>precio: {restaurantes.precio}</h5>
                                    </article>
                                ))}
                            </GastronomiaSlider>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>Bares</h2>
                        <article>
                            <GastronomiaSlider>
                                {bares.map((bares, index) => (
                                    <article key={`${bares.titulo}-${index}`}>
                                        <img src={bares.imagen} alt={bares.titulo} />
                                        <h3>{bares.titulo}</h3>
                                        <p>{bares.descripcion}</p>
                                        <h4>dirección: {bares.direccion}</h4>
                                        <p>teléfono: {bares.telefono}</p>
                                        <h5>precio: {bares.precio}</h5>
                                    </article>
                                ))}
                            </GastronomiaSlider>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>Heladerías</h2>
                        <article>
                           <GastronomiaSlider>
                                {Heladerias.map((heladerias, index) => (
                                    <article key={`${heladerias.titulo}-${index}`}>
                                        <img src={heladerias.imagen} alt={heladerias.titulo} />
                                        <h3>{heladerias.titulo}</h3>
                                        <p>{heladerias.descripcion}</p>
                                        <h4>dirección: {heladerias.direccion}</h4>
                                        <p>teléfono: {heladerias.telefono}</p>
                                        <h5>precio: {heladerias.precio}</h5>
                                    </article>
                                ))}
                            </GastronomiaSlider>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>cafeteria y panaderia</h2>
                        <article>
                           <GastronomiaSlider>
                                {Cafeterias.map((cafe, index) => (
                                    <article key={`${cafe.titulo}-${index}`}>
                                        <img src={cafe.imagen} alt={cafe.titulo} />
                                        <h3>{cafe.titulo}</h3>
                                        <p>{cafe.descripcion}</p>
                                        <h4>dirección: {cafe.direccion}</h4>
                                        <p>teléfono: {cafe.telefono}</p>
                                        <h5>precio: {cafe.precio}</h5>
                                    </article>
                                ))}
                            </GastronomiaSlider>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>cerveceria</h2>
                        <article>
                             <GastronomiaSlider>
                                {Cervecerias.map((cerveza, index) => (
                                    <article key={`${cerveza.titulo}-${index}`}>
                                        <img src={cerveza.imagen} alt={cerveza.titulo} />
                                        <h3>{cerveza.titulo}</h3>
                                        <p>{cerveza.descripcion}</p>
                                        <h4>dirección: {cerveza.direccion}</h4>
                                        <p>teléfono: {cerveza.telefono}</p>
                                        <h5>precio: {cerveza.precio}</h5>
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