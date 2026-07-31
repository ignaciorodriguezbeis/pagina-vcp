import { Form, Link } from 'react-router-dom';

import './cabañaApart.css';

import Inicio from '../Inicio/Inicio';
import Alojamiento from './alojamiento';

import cabapr1 from '../../assets/img/cabañaeder.webp'


function CabañaApart() {


  return (
    <main className='cabañaApart'>
      <header style={{ backgroundImage: `url(${cabapr1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="/alojamiento">alojamiento</a> &gt; cabañas y apartamentos</p>
        <h1>cabañas y apartamentos</h1>
        <p></p>
      </header>

      <body>

      </body>

    </main>
  );
}

export default CabañaApart;