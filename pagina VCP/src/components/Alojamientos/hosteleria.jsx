import { Link } from 'react-router-dom';

import './hosteleria.css';
import Inicio from '../Inicio/Inicio';
import Alojamiento from './alojamiento';

import hote1 from '../../assets/img/hotel-postal.webp';

function Hoteleria() {
    return (
        <body className='hoteleria'>
            <header style={{ backgroundImage: `url(${hote1})` }}>
                <p><a href="/inicio">inicio</a> &gt; <a href="/alojamiento">alojamiento</a> &gt; hoteleria</p>
                <h1>Hoteleria Villa Carlos Paz</h1>
                <p>hoteles para todos los gustos y actividades yD</p>
            </header>

            <main>
                <h2>catalos de hoteles</h2>
                <section>

                    <div>
                        <h3>Hotel Postal</h3>
                        <p>Ubicado en el corazón de Villa Carlos Paz, el Hotel Postal ofrece comodidades y servicios de calidad para garantizar una estancia inolvidable.</p>
                        <h4>dirección: Av. 1° de Mayo 1234, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-5678</p>
                        <h5>precio: Desde $5,000 por noche</h5>
                        <img src={hote1} alt="Hotel Postal" />
                    </div>

                    <div>
                        <h3>Hotel Portal de las Sierras</h3>
                        <p>Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.</p>
                        <h4>dirección: Av. Costanera 5678, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-1000</p>
                        <h5>precio: Desde $48,000 / noche</h5>
                        <img src={hote2} alt="Hotel Portal de las Sierras" />
                    </div>

                    <div>
                        <h3>Hotel Sierras del Lago</h3>
                        <p>Ubicado a orillas del lago San Roque, este hotel ofrece vistas panorámicas y actividades acuáticas para toda la familia.</p>
                        <h4>dirección: Av. del Lago 9101, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-2000</p>
                        <h5>precio: Desde $6,500 por noche</h5>
                        <img src={hote3} alt="Hotel Sierras del Lago" />
                    </div>

                    <div>
                        <h3>Hotel Cumbres del Valle</h3>
                        <p>Este hotel boutique ofrece una experiencia exclusiva con spa, restaurante gourmet y habitaciones con vistas a las sierras.</p>
                        <h4>dirección: Calle de las Cumbres 2345, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-3000</p>
                        <h5>precio: Desde $7,200 por noche</h5>
                        <img src={hote4} alt="Hotel Cumbres del Valle" />
                    </div>

                    <div>
                        <h3>Hotel Mirador del Lago</h3>
                        <p>Con una ubicación privilegiada, este hotel ofrece habitaciones con balcón y vistas espectaculares del lago y las sierras.</p>
                        <h4>dirección: Av. Mirador 6789, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-4000</p>
                        <h5>precio: Desde $5,800 por noche</h5>
                        <img src={hote5} alt="Hotel Mirador del Lago" />
                    </div>

                    <div>
                        <h3>Hotel Sierra Bella</h3>
                        <p>Este hotel familiar ofrece un ambiente acogedor, con piscina, áreas de juego y actividades para niños.</p>
                        <h4>dirección: Calle Sierra Bella 3456, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-5000</p>
                        <h5>precio: Desde $4,900 por noche</h5>
                        <img src={hote6} alt="Hotel Sierra Bella" />
                    </div>

                    <div>
                        <h3>Hotel Vista del Sol</h3>
                        <p>Con habitaciones modernas y un restaurante con cocina internacional, este hotel es ideal para viajeros de negocios y turistas.</p>
                        <h4>dirección: Av. Vista del Sol 7890, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-6000</p>
                        <h5>precio: Desde $6,200 por noche</h5>
                        <img src={hote7} alt="Hotel Vista del Sol" />
                    </div>

                    <div>
                        <h3>Hotel Las Sierras</h3>
                        <p>Este hotel ofrece una experiencia relajante con spa, gimnasio y actividades al aire libre en un entorno natural.</p>
                        <h4>dirección: Calle Las Sierras 4567, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-7000</p>
                        <h5>precio: Desde $5,500 por noche</h5>
                        <img src={hote8} alt="Hotel Las Sierras" />
                    </div>

                    <div>
                        <h3>Hotel Costa del Lago</h3>
                        <p>Ubicado frente al lago, este hotel ofrece actividades acuáticas, restaurante con vista panorámica y habitaciones con balcón.</p>
                        <h4>dirección: Av. Costa del Lago 1234, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-8000</p>
                        <h5>precio: Desde $6,800 por noche</h5>
                        <img src={hote9} alt="Hotel Costa del Lago" />
                    </div>

                    <div>
                        <h3>Hotel Jardín de las Sierras</h3>
                        <p>Este hotel boutique ofrece un ambiente íntimo con jardines, piscina y habitaciones decoradas con estilo.</p>
                        <h4>dirección: Calle Jardín de las Sierras 5678, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-9000</p>
                        <h5>precio: Desde $5,700 por noche</h5>
                        <img src={hote10} alt="Hotel Jardín de las Sierras" />
                    </div>

                    <div>
                        <h3>Hotel Mirador de las Sierras</h3>
                        <p>Con vistas panorámicas, este hotel ofrece habitaciones con balcón, restaurante gourmet y actividades al aire libre.</p>
                        <h4>dirección: Av. Mirador de las Sierras 6789, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-10000</p>
                        <h5>precio: Desde $6,400 por noche</h5>
                        <img src={hote11} alt="Hotel Mirador de las Sierras" />
                    </div>

                    <div>
                        <h3>Hotel Sol y Mar</h3>
                        <p>Este hotel frente al lago ofrece habitaciones con vista al agua, piscina y actividades acuáticas para toda la familia.</p>
                        <h4>dirección: Av. Sol y Mar 7890, Villa Carlos Paz</h4>
                        <p>teléfono: +54 3541 42-11000</p>
                        <h5>precio: Desde $5,900 por noche</h5>
                        <img src={hote12} alt="Hotel Sol y Mar" />
                    </div>
           
                </section>

                <a className="hostPubli1" to="/publicidad">
                    <div>
                        <h5>publicidad</h5>
                        <h6>espacio publicitario</h6>
                        <p>tu marca acá anuncia con nosotros</p>
                    </div>
                </a>

                <a className="hostPubli2" to="/publicidad">
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
        
        </body >
    );
}

export default Hoteleria;