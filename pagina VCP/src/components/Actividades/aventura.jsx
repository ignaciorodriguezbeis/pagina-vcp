import { Link } from 'react-router-dom';
import './aventura.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import avent1 from '../../assets/img/aventura.jpg'

export const aventuras = [
  {
    titulo: 'Parque de Aventura',
    descripcion: 'Disfruta de emocionantes actividades al aire libre, como tirolesa, escalada y senderismo en un entorno natural impresionante.',
    direccion: 'Camino de la Aventura, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $3,000 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 10:00 AM - 6:00 PM',
  },
  {
    titulo: 'Rafting en el Río San Antonio',
    descripcion: 'Vive la adrenalina del rafting en aguas rápidas y emocionantes, con guías expertos que te acompañarán en esta aventura acuática.',
    direccion: 'Río San Antonio, Villa Carlos Paz',
    telefono: '+54 3541 42-9999',
    precio: 'Desde $4,500 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 9:00 AM - 5:00 PM',
  },
  {
    titulo: 'Parapente en las Sierras',
    descripcion: 'Experimenta la sensación de volar sobre las sierras con un emocionante vuelo en parapente, disfrutando de vistas panorámicas únicas.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1010',
    precio: 'Desde $6,000 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Senderismo en las Sierras',
    descripcion: 'Explora los senderos naturales de las sierras con guías expertos, disfrutando de paisajes impresionantes y vida silvestre.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1313',
    precio: 'Desde $2,500 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 9:00 AM - 3:00 PM',
  },
  {
    titulo: 'Ciclismo en las Sierras',
    descripcion: 'Disfruta de rutas de ciclismo en las sierras con guías expertos, explorando paisajes naturales y disfrutando del aire fresco.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1414',
    precio: 'Desde $3,500 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 8:00 AM - 5:00 PM',
  },
  {
    titulo: 'Trekking en las Sierras',
    descripcion: 'Experimenta la naturaleza de las sierras con rutas de trekking adaptadas a diferentes niveles de dificultad.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1515',
    precio: 'Desde $4,000 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 7:00 AM - 4:00 PM',
  },
  {
    titulo: 'Aventura en la Naturaleza',
    descripcion: 'Experimenta la emoción de la naturaleza con actividades de aventura adaptadas a diferentes niveles de dificultad.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1616',
    precio: 'Desde $5,000 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 6:00 AM - 5:00 PM',
  },
  {
    titulo: 'Parque de Aventura',
    descripcion: 'Disfruta de emocionantes actividades al aire libre, como tirolesa, escalada y senderismo en un entorno natural impresionante.',
    direccion: 'Camino de la Aventura, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $3,000 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 10:00 AM - 6:00 PM',
  },
  {
    titulo: 'Rafting en el Río San Antonio',
    descripcion: 'Vive la adrenalina del rafting en aguas rápidas y emocionantes, con guías expertos que te acompañarán en esta aventura acuática.',
    direccion: 'Río San Antonio, Villa Carlos Paz',
    telefono: '+54 3541 42-9999',
    precio: 'Desde $4,500 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 9:00 AM - 5:00 PM',
  },
  {
    titulo: 'Parapente en las Sierras',
    descripcion: 'Experimenta la sensación de volar sobre las sierras con un emocionante vuelo en parapente, disfrutando de vistas panorámicas únicas.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1010',
    precio: 'Desde $6,000 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Senderismo en las Sierras',
    descripcion: 'Explora los senderos naturales de las sierras con guías expertos, disfrutando de paisajes impresionantes y vida silvestre.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1313',
    precio: 'Desde $2,500 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 9:00 AM - 3:00 PM',
  },
  {
    titulo: 'Ciclismo en las Sierras',
    descripcion: 'Disfruta de rutas de ciclismo en las sierras con guías expertos, explorando paisajes naturales y disfrutando del aire fresco.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1414',
    precio: 'Desde $3,500 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 8:00 AM - 5:00 PM',
  },
  {
    titulo: 'Trekking en las Sierras',
    descripcion: 'Experimenta la naturaleza de las sierras con rutas de trekking adaptadas a diferentes niveles de dificultad.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1515',
    precio: 'Desde $4,000 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 7:00 AM - 4:00 PM',
  },
  {
    titulo: 'Aventura en la Naturaleza',
    descripcion: 'Experimenta la emoción de la naturaleza con actividades de aventura adaptadas a diferentes niveles de dificultad.',
    direccion: 'Sierras de Villa Carlos Paz',
    telefono: '+54 3541 42-1616',
    precio: 'Desde $5,000 por persona',
    imagen: avent1,
    horarios: 'Lunes a Domingo: 6:00 AM - 5:00 PM',
  },
];

function Aventura() {
  return (
    <body className='aventura'>
      <header style={{ backgroundImage: `url(${avent1})` }}>
         <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; aventura</p>
        <h1>aventura</h1>
        <p>Excursiones, espectáculos y aventura</p>
      </header>
      <main>
        <h2>actividades de aventura</h2>
        <section className="aventura-grid">
          {aventuras.map((aventura) => (
            <article className="aventura-card" key={aventura.titulo}>
              <img src={aventura.imagen} alt={aventura.titulo} />
              <h3>{aventura.titulo}</h3>
              <p>{aventura.descripcion}</p>
              <p>horarios: {aventura.horarios}</p>
              <h4>dirección: {aventura.direccion}</h4>
              <p>teléfono: {aventura.telefono}</p>
              <h5>precio: {aventura.precio}</h5>
            </article>
          ))}
        </section>

        <a className="avenPubli1" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="avenPubli2" to="/publicidad">
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

export default Aventura;

