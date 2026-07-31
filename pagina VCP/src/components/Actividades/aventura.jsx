import React from 'react';
import './aventura.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import avent1 from '../../assets/img/aventura.jpg'

function Aventura() {
  return (
    <main className='aventura'>
      <header style={{ backgroundImage: `url(${avent1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="Actividades">Actividades</a> &gt; aventura</p>
        <h1>aventura</h1>
        <p>Excursiones, espectáculos y aventura</p>
      </header>
      <body>

      </body>
    </main>
  );
}

export default Aventura;

