import React from 'react';
import './excursion.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import excur1 from '../../assets/img/embudo.png'

function Excursion() {
  return (
    <main className='excursion'>
      <header style={{ backgroundImage: `url(${excur1})` }}>
        <p><a href="/inicio">Inicio</a> &gt; <a href="Actividades">Actividades</a> &gt; Excursion </p>
        <h1>Excursion en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <body>

      </body>
    </main>
  );
}

export default Excursion;