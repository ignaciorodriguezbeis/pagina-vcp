import { Form, Link } from 'react-router-dom';

import './campings.css';

import Inicio from '../Inicio/Inicio';
import Alojamiento from './alojamiento';

import camp1 from '../../assets/img/camping.webp'

function Campings() {
  return (
    <main className='campings'>
      <header style={{ backgroundImage: `url(${camp1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="/alojamiento">alojamiento</a> &gt; campings</p>
        <h1>Campings</h1>
        <p>todos los campings de villa carlos paz</p>
      </header>

      <body>

      </body>
    </main>

  );
}

export default Campings;