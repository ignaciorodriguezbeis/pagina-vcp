import { Form, Link } from 'react-router-dom';

import './campings.css';

import Inicio from '../Inicio/Inicio';
import Alojamiento from './alojamiento';

import camp1 from '../../assets/img/camping.webp';

function Campings() {
  return (
    <body className='campings'>
      <header style={{ backgroundImage: `url(${camp1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="/alojamiento">alojamiento</a> &gt; campings</p>
        <h1>Campings</h1>
        <p>todos los campings de villa carlos paz</p>
      </header>

      <main>
        <h2>campings recomendados</h2>
        <section>
          <div>
            <h3>Camping Municipal San Roque</h3>
            <p>Excelente ubicación junto al lago con servicios básicos, duchas y acceso a la costa.</p>
            <h4>dirección: Av. del Lago, Villa Carlos Paz</h4>
            <p>teléfono: +54 3541 42-4444</p>
            <h5>precio: Desde $6,000 por persona</h5>
            <img src={camp1} alt="Camping Municipal San Roque" />
          </div>

          <div>
            <h3>Camping Los Pinos</h3>
            <p>Espacios amplios para carpas y casas rodantes con sombra y parrilla compartida.</p>
            <h4>dirección: Camino de los Pinos, Villa Carlos Paz</h4>
            <p>teléfono: +54 3541 42-5555</p>
            <h5>precio: Desde $7,500 por persona</h5>
            <img src={camp1} alt="Camping Los Pinos" />
          </div>
        </section>

        <a className="campPubli1" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="campPubli2" to="/publicidad">
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

export default Campings;