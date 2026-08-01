import { Link } from 'react-router-dom';
import './actividades.css';

import Inicio from '../Inicio/Inicio';

import activ1 from '../../assets/img/deportes.webp'

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
                            <div>
                                <p>Excursiones</p>
                                <h3>Aerosilla al Cerro de la Cruz</h3>
                                <p>Ascenso panorámico con la mejor vista del lago y la ciudad. Apto todo público.</p>
                                <span>Entradas desde $9.500</span>
                            </div>
                            <div>
                                <p>Excursiones</p>
                                <h3>Paseo en Catamarán por el Lago</h3>
                                <p>Recorrido guiado de 1 hora por el lago San Roque con salidas cada 45 minutos.</p>
                                <span>Desde $8.000</span>
                            </div>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>Espectáculos</h2>
                        <article>
                            <div>
                                <p>Espectáculos</p>
                                <h3>strabagansa</h3>
                                <p>Las grandes figuras del espectáculo argentino en las salas del centro.</p>
                                <span>Entradas desde $18.000</span>
                            </div>
                            <div>
                                <p>Espectáculos</p>
                                <h3>flor de V</h3>
                                <p>Las grandes figuras del espectáculo argentino en las salas del centro.</p>
                                <span>Entradas desde $15.000</span>
                            </div>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>Aventura</h2>
                        <article>
                            <div>
                                <p>Aventura</p>
                                <h3>Vuelo en Parapente</h3>
                                <p>Vuelo biplaza sobre las sierras con instructor certificado. Fotos incluidas.</p>
                                <span>Desde $25.000</span>
                            </div>
                            <div>
                                <p>Aventura</p>
                                <h3>Treking a la Cruz</h3>
                                <p>Kayaks, motos de agua y actividades en el lago San Roque.</p>
                                <span>Desde $12.000</span>
                            </div>
                        </article>
                    </div>

                     <div className='subactividad'>
                        <h2>deportes</h2>
                        <article>
                            <div>
                                <p>Deportes</p>
                                <h3>futboll 5</h3>
                                <p>Vuelos sobre los cerros con vistas espectaculares del paisaje.</p>
                                <span>Desde $10.000</span>
                            </div>
                            <div>
                                <p>Deportes</p>
                                <h3>canotaje</h3>
                                <p>Kayaks, motos de agua y actividades en el lago San Roque.</p>
                                <span>Desde $15.000</span>
                            </div>
                        </article>
                    </div>

                     <div className='subactividad'>
                        <h2>para niños</h2>
                        <article>
                            <div>
                                <p>Infantil</p>
                                <h3>parque de diversiones</h3>
                                <p>Vuelos sobre los cerros con vistas espectaculares del paisaje.</p>
                                <span>Desde $10.000</span>
                            </div>
                            <div>
                                <p>Infantil</p>
                                <h3>parque acuático</h3>
                                <p>Kayaks, motos de agua y actividades en el lago San Roque.</p>
                                <span>Desde $12.000</span>
                            </div>
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