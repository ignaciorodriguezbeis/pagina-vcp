import { Link } from 'react-router-dom';

import './gastronomia.css';

import Inicio from '../Inicio/Inicio';

import gast1 from '../../assets/img/gastronomia.jpg';

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
                            <div>
                                <h3>Comida local</h3>
                                <p>Platos regionales, parrillas y propuestas para toda la familia.</p>
                            </div>
                            <div>
                                <h3>Ambientes acogedores</h3>
                                <p>Espacios ideales para almorzar o cenar con vista y buena atención.</p>
                            </div>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>Bares</h2>
                        <article>
                            <div>
                                <h3>Copas y tragos</h3>
                                <p>Opciones para disfrutar de una noche relajada en la ciudad.</p>
                            </div>
                            <div>
                                <h3>Vibración nocturna</h3>
                                <p>Lugares animados con música y ambiente de verano.</p>
                            </div>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>Heladerías</h2>
                        <article>
                            <div>
                                <h3>Postres y cafés</h3>
                                <p>Perfectos para disfrutar un rato de descanso entre paseo y paseo.</p>
                            </div>
                            <div>
                                <h3>Opciones rápidas</h3>
                                <p>Ideal para comer algo rico sin perder tiempo en el recorrido.</p>
                            </div>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>cafeteria y panaderia</h2>
                        <article>
                            <div>
                                <h3>Comida local</h3>
                                <p>Platos regionales, parrillas y propuestas para toda la familia.</p>
                            </div>
                            <div>
                                <h3>Ambientes acogedores</h3>
                                <p>Espacios ideales para almorzar o cenar con vista y buena atención.</p>
                            </div>
                        </article>
                    </div>

                    <div className='subgastronomia'>
                        <h2>cerveceria</h2>
                        <article>
                            <div>
                                <h3>Comida local</h3>
                                <p>Platos regionales, parrillas y propuestas para toda la familia.</p>
                            </div>
                            <div>
                                <h3>Ambientes acogedores</h3>
                                <p>Espacios ideales para almorzar o cenar con vista y buena atención.</p>
                            </div>
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