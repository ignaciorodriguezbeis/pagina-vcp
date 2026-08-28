import { Link } from 'react-router-dom';
import './espectaculos.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import espec1 from '../../assets/img/teatro.png'

export const espectaculos = [
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
  {
    titulo: 'Teatro de la Ciudad',
    descripcion: 'Espacio dedicado a la promoción de artistas locales y nacionales, con una amplia oferta de espectáculos.',
    direccion: 'Calle San Martín 910, Villa Carlos Paz',
    telefono: '+54 3541 42-5555',
    precio: 'Entradas desde $10.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 5:00 PM - 10:00 PM',
  },
  {
    titulo: 'Teatro Independiente',
    descripcion: 'Pequeño teatro que ofrece obras de teatro independientes y experimentales.',
    direccion: 'Calle Belgrano 234, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Entradas desde $8.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 6:00 PM - 9:00 PM',
  },
  {
    titulo: 'Teatro de Comedia',
    descripcion: 'Especializado en comedias y espectáculos humorísticos, con funciones para toda la familia.',
    direccion: 'Calle Rivadavia 345, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Entradas desde $9.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 7:00 PM - 10:00 PM',
  },
  {
    titulo: 'Teatro Musical',
    descripcion: 'Ofrece producciones de teatro musical con coreografías y música en vivo.',
    direccion: 'Calle San Juan 456, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Entradas desde $11.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 6:00 PM - 10:00 PM',
  },
  {
    titulo: 'Teatro Infantil',
    descripcion: 'Espacio dedicado a espectáculos para niños, con obras de teatro y actividades educativas.',
    direccion: 'Calle Mitre 567, Villa Carlos Paz',
    telefono: '+54 3541 42-9999',
    precio: 'Entradas desde $7.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 4:00 PM - 7:00 PM',
  },
  {
    titulo: 'Teatro Experimental',
    descripcion: 'Ofrece obras de teatro experimentales y vanguardistas, con propuestas innovadoras.',
    direccion: 'Calle Córdoba 678, Villa Carlos Paz',
    telefono: '+54 3541 42-1010',
    precio: 'Entradas desde $10.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 5:00 PM - 9:00 PM',
  },
  {
    titulo: 'Teatro de Improvisación',
    descripcion: 'Espacio donde se realizan espectáculos de improvisación teatral, con participación del público.',
    direccion: 'Calle Entre Ríos 789, Villa Carlos Paz',
    telefono: '+54 3541 42-1111',
    precio: 'Entradas desde $8.500',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 6:00 PM - 9:00 PM',
  },
  {
    titulo: 'Teatro de Títeres',
    descripcion: 'Ofrece espectáculos de títeres para niños y adultos, con historias divertidas y educativas.',
    direccion: 'Calle La Rioja 890, Villa Carlos Paz',
    telefono: '+54 3541 42-1212',
    precio: 'Entradas desde $7.500',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 4:00 PM - 7:00 PM',
  },
];

function Espectaculos() {
  return (
    <body className='espectaculos'>
      <header style={{ backgroundImage: `url(${espec1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; espectaculos </p>
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