import { Link } from 'react-router-dom';
import './espectaculos.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import bar1 from '../../assets/img/barCosta.jpg'

function Espectaculos() {
  return (
    <main className='espectaculos'>
      <header style={{ backgroundImage: `url(${bar1})` }}>
        <p><a href="/inicio">Inicio</a> &gt; <a href="Actividades">Actividades</a> &gt; Espectaculos </p>
        <h1>Espectaculos en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <body>

      </body>
    </main>
  );
}

export default Espectaculos; 