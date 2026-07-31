import React from 'react';
import './cervecerias.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import bear1 from '../../assets/img/bear.webp';

function Cervecerias() {
  return (
    <main className='cervecerias'>
      <header style={{ backgroundImage: `url(${bear1})` }}>
        <p><a href="/inicio">Inicio</a> &gt; <a href="gastronomia">Gastronomia</a> &gt; Cervecerias </p>
        <h1>Cervecerias y panaderias en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <body>

      </body>
    </main>
  );
}

export default Cervecerias;