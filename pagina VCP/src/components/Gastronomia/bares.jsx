import React from 'react';
import './bares.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import bar1 from '../../assets/img/barCosta.jpg'

function Bares() {
  return (
    <main className='restaurantes'>
      <header style={{ backgroundImage: `url(${bar1})` }}>
        <p><a href="/inicio">Inicio</a> &gt; <a href="gastronomia">Gastronomia</a> &gt; Bares </p>
        <h1>Bares de Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <body>

      </body>
    </main>
  );
}


export default Bares;