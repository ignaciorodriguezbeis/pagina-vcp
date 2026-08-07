import React from 'react';
import './aventura.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import avent1 from '../../assets/img/aventura.jpg'

const actividades = [
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
];

function Aventura() {
  return (
    <body className='aventura'>
      <header style={{ backgroundImage: `url(${avent1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="Actividades">Actividades</a> &gt; aventura</p>
        <h1>aventura</h1>
        <p>Excursiones, espectáculos y aventura</p>
      </header>
      <main>
        <h2>actividades de aventura</h2>
        <section className="aventura-grid">
          {actividades.map((actividad) => (
            <article className="actividad-card" key={actividad.titulo}>
              <img src={actividad.imagen} alt={actividad.titulo} />
              <h3>{actividad.titulo}</h3>
              <p>{actividad.descripcion}</p>
              <p>horarios: {actividad.horarios}</p>
              <h4>dirección: {actividad.direccion}</h4>
              <p>teléfono: {actividad.telefono}</p>
              <h5>precio: {actividad.precio}</h5>
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

