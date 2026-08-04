import { Form, Link } from 'react-router-dom';

import './cabañaApart.css';

import Inicio from '../Inicio/Inicio';
import Alojamiento from './alojamiento';

import cabapr1 from '../../assets/img/cabañaeder.webp';

function CabañaApart() {
  return (
    <body className='cabañaApart'>
      <header style={{ backgroundImage: `url(${cabapr1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="/alojamiento">alojamiento</a> &gt; cabañas y apartamentos</p>
        <h1>cabañas y apartamentos</h1>
        <p>opciones ideales para relajarte en medio de la naturaleza</p>
      </header>

      <main>
        <h2>cabañas y apartamentos destacados</h2>
        <section>
          <div>
            <h3>Cabaña Los Aromos</h3>
            <p>Amplia cabaña con parilla, quincho y vista a las sierras para disfrutar en familia.</p>
            <h4>dirección: Villa del Lago, Villa Carlos Paz</h4>
            <p>teléfono: +54 3541 42-1111</p>
            <h5>precio: Desde $45,000 por noche</h5>
            <img src={cabapr1} alt="Cabaña Los Aromos" />
          </div>

          <div>
            <h3>Apartamento Vista al Lago</h3>
            <p>Departamento moderno con terraza, cocina equipada y excelente ubicación urbana.</p>
            <h4>dirección: Av. Costanera 2345, Villa Carlos Paz</h4>
            <p>teléfono: +54 3541 42-2222</p>
            <h5>precio: Desde $38,000 por noche</h5>
            <img src={cabapr1} alt="Apartamento Vista al Lago" />
          </div>

          <div>
            <h3>Cabaña El Bosque</h3>
            <p>Ideal para escapadas de fin de semana con pileta, parrilla y ambiente tranquilo.</p>
            <h4>dirección: Camino del Sol, Villa Carlos Paz</h4>
            <p>teléfono: +54 3541 42-3333</p>
            <h5>precio: Desde $50,000 por noche</h5>
            <img src={cabapr1} alt="Cabaña El Bosque" />
          </div>
        </section>

        <a className="cabañaPubli1" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="cabañaPubli2" to="/publicidad">
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

export default CabañaApart;