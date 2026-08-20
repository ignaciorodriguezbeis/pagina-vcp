import { Link } from 'react-router-dom';
import './deportes.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import deport1 from '../../assets/img/deportes.webp'

const deportes = [
  {
    titulo: 'Club de Fútbol Villa Carlos Paz',
    descripcion: 'Participa en entrenamientos y partidos de fútbol en un entorno seguro y divertido para todas las edades.',
    direccion: 'Av. del Deporte 123, Villa Carlos Paz',
    telefono: '+54 3541 42-1111',
    precio: 'Desde $2,000 por mes',
    imagen: deport1,
    horarios: 'Lunes a Viernes: 4:00 PM - 8:00 PM',
  },
  {
    titulo: 'Club de Padel Villa Carlos Paz',
    descripcion: 'Disfruta de partidos de padel en canchas bien equipadas y con profesores certificados.',
    direccion: 'Calle del Padel 456, Villa Carlos Paz',
    telefono: '+54 3541 42-2222',
    precio: 'Desde $1,500 por hora',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 9:00 AM - 10:00 PM',
  },
  {
    titulo: 'Club de Natación Villa Carlos Paz',
    descripcion: 'Clases de natación para todas las edades y niveles, con instructores profesionales.',
    direccion: 'Av. del Lago 789, Villa Carlos Paz',
    telefono: '+54 3541 42-3333',
    precio: 'Desde $3,000 por mes',
    imagen: deport1,
    horarios: 'Lunes a Viernes: 6:00 AM - 8:00 PM',
  },
  {
    titulo: 'Club de Tenis Villa Carlos Paz',
    descripcion: 'Clases y torneos de tenis en canchas de calidad, con entrenadores experimentados.',
    direccion: 'Calle del Tenis 101, Villa Carlos Paz',
    telefono: '+54 3541 42-4444',
    precio: 'Desde $2,500 por mes',
    imagen: deport1,
    horarios: 'Lunes a Sábado: 8:00 AM - 9:00 PM',
  },
];

function Deportes() {
  return (
    <body className='deportes'>
      <header style={{ backgroundImage: `url(${deport1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; Deportes</p>
        <h1>Deportes y donde preacticarlos en villa carlos paz</h1>
        <p>futboll, padel, natacion y tenis</p>
      </header>
      <main>
        <h2>complejos deportivos</h2>
        <section className="deportes-grid">
          {deportes.map((deporte) => (
            <article className="deporte-card" key={deporte.titulo}>
              <img src={deporte.imagen} alt={deporte.titulo} />
              <h3>{deporte.titulo}</h3>
              <p>{deporte.descripcion}</p>
              <p>horarios: {deporte.horarios}</p>
              <h4>dirección: {deporte.direccion}</h4>
              <p>teléfono: {deporte.telefono}</p>
              <h5>precio: {deporte.precio}</h5>
            </article>
          ))}
        </section>
        <a className="deporPubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>
        <div className="deporPubli2">
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
        </div>
      </main >
    </body >
  );
}



export default Deportes;