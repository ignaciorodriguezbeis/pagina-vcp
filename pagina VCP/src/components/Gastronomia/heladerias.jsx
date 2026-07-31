import React from 'react';
import './heladerias.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import helader1 from '../../assets/img/helado.jpg';

function Heladerias() {
  return (
    <main className='heladerias'>
      <header style={{ backgroundImage: `url(${helader1})` }}>
        <p><a href="/inicio">Inicio</a> &gt; <a href="gastronomia">Gastronomia</a> &gt; heladerias </p>
        <h1>Heladerias en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <body>

      </body>
    </main>
  );
}


 

export default Heladerias;