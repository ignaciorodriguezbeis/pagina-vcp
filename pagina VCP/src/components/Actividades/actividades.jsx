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
                                <h3>Valle de Punilla</h3>
                                <p>Recorridos guiados con paisajes, miradores y paradas gastronómicas.</p>
                            </div>
                            <div>
                                <h3>Rutas serranas</h3>
                                <p>Escapadas ideales para disfrutar de la naturaleza y los valles.</p>
                            </div>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>Espectáculos</h2>
                        <article>
                            <div>
                                <h3>Teatros y shows</h3>
                                <p>Eventos culturales y musicales durante toda la temporada.</p>
                            </div>
                            <div>
                                <h3>Fiestas y eventos</h3>
                                <p>Programación especial para disfrutar en familia o con amigos.</p>
                            </div>
                        </article>
                    </div>

                    <div className='subactividad'>
                        <h2>Aventura</h2>
                        <article>
                            <div>
                                <h3>Parapente</h3>
                                <p>Vuelos sobre los cerros con vistas espectaculares del paisaje.</p>
                            </div>
                            <div>
                                <h3>Deportes náuticos</h3>
                                <p>Kayaks, motos de agua y actividades en el lago San Roque.</p>
                            </div>
                        </article>
                    </div>

                     <div className='subactividad'>
                        <h2>deportes</h2>
                        <article>
                            <div>
                                <h3>Parapente</h3>
                                <p>Vuelos sobre los cerros con vistas espectaculares del paisaje.</p>
                            </div>
                            <div>
                                <h3>Deportes náuticos</h3>
                                <p>Kayaks, motos de agua y actividades en el lago San Roque.</p>
                            </div>
                        </article>
                    </div>

                     <div className='subactividad'>
                        <h2>para niños</h2>
                        <article>
                            <div>
                                <h3>Parapente</h3>
                                <p>Vuelos sobre los cerros con vistas espectaculares del paisaje.</p>
                            </div>
                            <div>
                                <h3>Deportes náuticos</h3>
                                <p>Kayaks, motos de agua y actividades en el lago San Roque.</p>
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