import React from 'react';
import './infantiles.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import child1 from '../../assets/img/teatro.png'

const infantiles = [
  {
    titulo: 'Parque Infantil Villa Carlos Paz',
    descripcion: 'Un espacio seguro y divertido para que los niños disfruten de juegos, actividades y entretenimiento.',
    direccion: 'Av. del Niño 123, Villa Carlos Paz',
    telefono: '+54 3541 42-1111',
    precio: 'Entrada gratuita',
    imagen: child1,
    horarios: 'Lunes a Domingo: 10:00 AM - 6:00 PM',
  },
  {
    titulo: 'Centro de Desarrollo Infantil',
    descripcion: 'Instalaciones especializadas para el desarrollo integral de los niños.',
    direccion: 'Calle 123, Villa Carlos Paz',
    telefono: '+54 3541 42-2222',
    precio: 'Matrícula mensual desde $5.000',
    imagen: child1,
    horarios: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
  },
  {
    titulo: 'Club de Niños',
    descripcion: 'Programas de actividades recreativas y educativas para niños.',
    direccion: 'Av. del Niño 456, Villa Carlos Paz',
    telefono: '+54 3541 42-3333',
    precio: 'Cuota mensual desde $8.000',
    imagen: child1,
    horarios: 'Lunes a Viernes: 3:00 PM - 7:00 PM',
  },
  {
    titulo: 'Casa de los Niños',
    descripcion: 'Espacio dedicado a la recreación y el aprendizaje de los niños.',
    direccion: 'Av. del Niño 789, Villa Carlos Paz',
    telefono: '+54 3541 42-4444',
    precio: 'Cuota mensual desde $6.000',
    imagen: child1,
    horarios: 'Lunes a Domingo: 9:00 AM - 5:00 PM',
  },
];

function Infantiles() {
  return (
    <body className='infantiles'>
      <header style={{ backgroundImage: `url(${child1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="Actividades">Actividades</a> &gt; Infantiles</p>
        <h1>atracciones para niños en villa carlos paz</h1>
        <p>futboll, padel, natacion y tenis</p>
      </header>
      <main>
        <h2>actividades infantiles</h2>
        <section className="infantiles-grid">
          {infantiles.map((infantil) => (
            <article className="infantil-card" key={infantil.titulo}>
              <img src={infantil.imagen} alt={infantil.titulo} />
              <h3>{infantil.titulo}</h3>
              <p>{infantil.descripcion}</p>
              <p>horarios: {infantil.horarios}</p>
              <h4>dirección: {infantil.direccion}</h4>
              <p>teléfono: {infantil.telefono}</p>
              <h5>precio: {infantil.precio}</h5>
            </article>
          ))}
        </section>

        <a className="infantPubli1" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="infantPubli2" to="/publicidad">
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


export default Infantiles;