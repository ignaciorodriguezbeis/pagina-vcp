import React from 'react';
import './infantiles.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import child1 from '../../assets/img/teatro.png'

function Infantiles() {
  return (
    <main className='infantiles'>
      <header style={{ backgroundImage: `url(${child1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="Actividades">Actividades</a> &gt; Infantiles</p>
        <h1>atracciones para niños en villa carlos paz</h1>
        <p>futboll, padel, natacion y tenis</p>
      </header>
      <body>

      </body>
    </main>
  );
}


export default Infantiles;