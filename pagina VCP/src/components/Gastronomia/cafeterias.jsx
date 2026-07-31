import React from 'react';
import './cafeterias.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import cafe1 from '../../assets/img/cafePan.jpg';

function Cafeterias() {
  return (
    <main className='cafeterias'>
      <header style={{ backgroundImage: `url(${cafe1})` }}>
        <p><a href="/inicio">Inicio</a> &gt; <a href="gastronomia">Gastronomia</a> &gt; Cafeterias </p>
        <h1>Cafeterias y panaderias en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <body>

      </body>
    </main>
  );
}



export default Cafeterias; 