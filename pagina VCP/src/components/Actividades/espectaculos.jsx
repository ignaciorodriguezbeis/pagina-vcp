import { Link } from 'react-router-dom';
import './espectaculos.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import espec1 from '../../assets/img/teatro.png'

const espectaculos = [
  {
    titulo: 'Teatro Municipal',
    descripcion: 'Espacio cultural con funciones de teatro, danza y música en vivo.',
    direccion: 'Av. 9 de Julio 1234, Villa Carlos Paz',
    telefono: '+54 3541 42-3333',
    precio: 'Entradas desde $15.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 7:00 PM - 10:00 PM',
  },
  {
    titulo: 'Teatro del Lago',
    descripcion: 'Ofrece una variada programación de espectáculos, incluyendo obras de teatro, conciertos y festivales.',
    direccion: 'Av. del Lago 5678, Villa Carlos Paz',
    telefono: '+54 3541 42-4444',
    precio: 'Entradas desde $12.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 6:00 PM - 11:00 PM',
  },
];

function Espectaculos() {
  return (
    <body className='espectaculos'>
      <header style={{ backgroundImage: `url(${espec1})` }}>
        <p><a href="/inicio">Inicio</a> &gt; <a href="Actividades">Actividades</a> &gt; Espectaculos </p>
        <h1>Espectaculos en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>

        <h2>Espectaculos</h2>

        <section className="espectaculos-grid">
          {espectaculos.map((espectaculo) => (
            <article className="espectaculo-card" key={espectaculo.titulo}>
              <img src={espectaculo.imagen} alt={espectaculo.titulo} />
              <h3>{espectaculo.titulo}</h3>
              <p>{espectaculo.descripcion}</p>
              <p>horarios: {espectaculo.horarios}</p>
              <h4>dirección: {espectaculo.direccion}</h4>
              <p>teléfono: {espectaculo.telefono}</p>
              <h5>precio: {espectaculo.precio}</h5>
            </article>
          ))}

        </section>

        <a className="especPubli1" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="especPubli2" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>

          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>
      </main>
    </body>

  );
}

export default Espectaculos; 