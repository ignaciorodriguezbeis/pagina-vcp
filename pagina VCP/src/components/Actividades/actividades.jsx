
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import './actividades.css';

import Inicio from '../Inicio/Inicio';
import { aventuras } from './aventura';
import { deportes } from './deportes';
import { espectaculos } from './espectaculos';
import { excursiones } from './excursion';
import { infantiles } from './infantiles';

import activ1 from '../../assets/img/deportes.webp'
import avent1 from '../../assets/img/aventura.jpg';
import deport1 from '../../assets/img/deportes.webp';
import espec1 from '../../assets/img/teatro.png';
import excur1 from '../../assets/img/embudo.png';
import child1 from '../../assets/img/teatro.png';


function ActividadesSlider({ children }) {
    const trackRef = useRef(null);

    const move = (direction) => {
        trackRef.current?.scrollBy({
            left: direction * trackRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    return (
        <div className='slider'>
            <button className='slider-button slider-button-prev' type='button' aria-label='Ver actividades anteriores' onClick={() => move(-1)}>
                &lt;
            </button>
            <article ref={trackRef} className='slider-track'>
                {children}
            </article>
            <button className='slider-button slider-button-next' type='button' aria-label='Ver más actividades' onClick={() => move(1)}>
                &gt;
            </button>
        </div>
    );
}


function Actividades() {
    return (
        <body className='actividades'>
            <header style={{ backgroundImage: `url(${activ1})` }}>
                <p><a href="/inicio">inicio</a> &gt; Actividades</p>

                <h1>Actividades</h1>
                <p>Excursiones, espectáculos y aventura</p>
            </header>

            <main>
                <p>La ciudad es la capital del entretenimiento serrano: teatros con las grandes figuras nacionales en verano, deportes náuticos en el lago, trekking, parapente y excursiones por el Valle de Punilla.</p>

                <section >
                    <div className='subactividad'>
                        <h2>Excursiones</h2>
                        <article>
                            <ActividadesSlider>
                                {excursiones.map((excursion, index) => (
                                    <article key={`${excursion.titulo}-${index}`}>
                                        <img src={excursion.imagen} alt={excursion.titulo} />
                                        <h3>{excursion.titulo}</h3>
                                        <p>{excursion.descripcion}</p>
                                        <h4>dirección: {excursion.direccion}</h4>
                                        <p>teléfono: {excursion.telefono}</p>
                                        <h5>precio: {excursion.precio}</h5>
                                    </article>
                                ))}
                            </ActividadesSlider>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>Espectáculos</h2>
                        <article>
                            <ActividadesSlider>
                                {espectaculos.map((espectaculo, index) => (
                                    <article key={`${espectaculo.titulo}-${index}`}>
                                        <img src={espectaculo.imagen} alt={espectaculo.titulo} />
                                        <h3>{espectaculo.titulo}</h3>
                                        <p>{espectaculo.descripcion}</p>
                                        <h4>dirección: {espectaculo.direccion}</h4>
                                        <p>teléfono: {espectaculo.telefono}</p>
                                        <h5>precio: {espectaculo.precio}</h5>
                                    </article>
                                ))}
                            </ActividadesSlider>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>Aventura</h2>
                        <article>
                            <ActividadesSlider>
                                {aventuras.map((aventura, index) => (
                                    <article key={`${aventura.titulo}-${index}`}>
                                        <img src={aventura.imagen} alt={aventura.titulo} />
                                        <h3>{aventura.titulo}</h3>
                                        <p>{aventura.descripcion}</p>
                                        <h4>dirección: {aventura.direccion}</h4>
                                        <p>teléfono: {aventura.telefono}</p>
                                        <h5>precio: {aventura.precio}</h5>
                                    </article>
                                ))}
                            </ActividadesSlider>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>deportes</h2>
                        <article>
                            <ActividadesSlider>
                                {deportes.map((deporte, index) => (
                                    <article key={`${deporte.titulo}-${index}`}>
                                        <img src={deporte.imagen} alt={deporte.titulo} />
                                        <h3>{deporte.titulo}</h3>
                                        <p>{deporte.descripcion}</p>
                                        <h4>dirección: {deporte.direccion}</h4>
                                        <p>teléfono: {deporte.telefono}</p>
                                        <h5>precio: {deporte.precio}</h5>
                                    </article>
                                ))}
                            </ActividadesSlider>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>para niños</h2>
                        <article>
                            <ActividadesSlider>
                                {infantiles.map((infantil, index) => (
                                    <article key={`${infantil.titulo}-${index}`}>
                                        <img src={infantil.imagen} alt={infantil.titulo} />
                                        <h3>{infantil.titulo}</h3>
                                        <p>{infantil.descripcion}</p>
                                        <h4>dirección: {infantil.direccion}</h4>
                                        <p>teléfono: {infantil.telefono}</p>
                                        <h5>precio: {infantil.precio}</h5>
                                    </article>
                                ))}
                            </ActividadesSlider>
                        </article>
                    </div>
                </section>

                <a className="actvPubli1" to="/publicidad">
                    <div>
                        <h5>publicidad</h5>
                        <h6>espacio publicitario</h6>
                        <p>tu marca acá anuncia con nosotros</p>
                    </div>
                </a>

                <a className="actvPubli2" to="/publicidad">
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

export default Actividades;