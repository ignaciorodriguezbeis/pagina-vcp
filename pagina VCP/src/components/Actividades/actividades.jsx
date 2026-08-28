
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import './actividades.css';

import Inicio from '../Inicio/Inicio';
import {Aventura} from './aventura';
import {deportes} from './deportes';
import {Espectaculos} from './espectaculos';
import {Excursion} from './excursion';
import {infantiles} from './infantiles';

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
                            <actividadesSlider>
                                {Excursion.map((Excursion, index) => (
                                    <article key={`${Excursion.titulo}-${index}`}>
                                        <img src={Excursion.imagen} alt={hotel.titulo} />
                                        <h3>{Excursion.titulo}</h3>
                                        <p>{Excursion.descripcion}</p>
                                        <h4>dirección: {Excursion.direccion}</h4>
                                        <p>teléfono: {Excursion.telefono}</p>
                                        <h5>precio: {Excursion.precio}</h5>
                                    </article>
                                ))}
                            </actividadesSlider>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>Espectáculos</h2>
                        <article>
                            <actividadesSlider>
                                {espectaculos.map((espectaculos, index) => (
                                    <article key={`${espectaculos.titulo}-${index}`}>
                                        <img src={espectaculos.imagen} alt={hotel.titulo} />
                                        <h3>{espectaculos.titulo}</h3>
                                        <p>{espectaculos.descripcion}</p>
                                        <h4>dirección: {espectaculos.direccion}</h4>
                                        <p>teléfono: {espectaculos.telefono}</p>
                                        <h5>precio: {espectaculos.precio}</h5>
                                    </article>
                                ))}
                            </actividadesSlider>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>Aventura</h2>
                        <article>
                            <actividadesSlider>
                                {Aventura.map((Aventura, index) => (
                                    <article key={`${Aventura.titulo}-${index}`}>
                                        <img src={Aventura.imagen} alt={hotel.titulo} />
                                        <h3>{Aventura.titulo}</h3>
                                        <p>{Aventura.descripcion}</p>
                                        <h4>dirección: {Aventura.direccion}</h4>
                                        <p>teléfono: {Aventura.telefono}</p>
                                        <h5>precio: {Aventura.precio}</h5>
                                    </article>
                                ))}
                            </actividadesSlider>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>deportes</h2>
                        <article>
                            <actividadesSlider>
                                {deportes.map((deportes, index) => (
                                    <article key={`${deportes.titulo}-${index}`}>
                                        <img src={deportes.imagen} alt={hotel.titulo} />
                                        <h3>{deportes.titulo}</h3>
                                        <p>{deportes.descripcion}</p>
                                        <h4>dirección: {deportes.direccion}</h4>
                                        <p>teléfono: {deportes.telefono}</p>
                                        <h5>precio: {deportes.precio}</h5>
                                    </article>
                                ))}
                            </actividadesSlider>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>para niños</h2>
                        <article>
                            <actividadesSlider>
                                {infantiles.map((infantiles, index) => (
                                    <article key={`${infantiles.titulo}-${index}`}>
                                        <img src={infantiles.imagen} alt={hotel.titulo} />
                                        <h3>{infantiles.titulo}</h3>
                                        <p>{infantiles.descripcion}</p>
                                        <h4>dirección: {infantiles.direccion}</h4>
                                        <p>teléfono: {infantiles.telefono}</p>
                                        <h5>precio: {infantiles.precio}</h5>
                                    </article>
                                ))}
                            </actividadesSlider>
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