import { Form, Link } from 'react-router-dom';

import './campings.css';

import Inicio from '../Inicio/Inicio';
import Alojamiento from './alojamiento';

import camp1 from '../../assets/img/camping.webp'

function Campings() {
  return (
    <body className='campings'>
      <header style={{ backgroundImage: `url(${camp1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="/alojamiento">alojamiento</a> &gt; campings</p>
        <h1>Campings</h1>
        <p>todos los campings de villa carlos paz</p>
      </header>

      <main>

      </main>
    </body>

  );
}

export default Campings;