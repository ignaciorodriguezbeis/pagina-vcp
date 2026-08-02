import React from 'react';

import './alquileres.css';

import Inicio from '../Inicio/Inicio';
import Alojamiento from './alojamiento';

import alqui1 from '../../assets/img/lagocentro.jpg';

function Alquileres() {
  return (
    <body className='alquileres'>
      <header style={{ backgroundImage: `url(${alqui1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="/alojamiento">alojamiento</a> &gt; alquileres</p>
        <h1>alquileres</h1>
        <p></p>
      </header>

      <main>

      </main>
    </body>
  );
}

export default Alquileres;