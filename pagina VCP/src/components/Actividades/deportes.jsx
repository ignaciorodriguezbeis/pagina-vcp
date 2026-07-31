import React from 'react';
import './deportes.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import deport1 from '../../assets/img/deportes.webp'

function Deportes() {
  return (
    <main className='deportes'>
      <header style={{ backgroundImage: `url(${deport1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="Actividades">Actividades</a> &gt; Deportes</p>
        <h1>Deportes y donde preacticarlos en villa carlos paz</h1>
        <p>futboll, padel, natacion y tenis</p>
      </header>
      <body>

      </body>
    </main>
  );
}


 
export default Deportes;