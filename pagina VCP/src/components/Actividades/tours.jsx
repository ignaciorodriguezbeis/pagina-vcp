import { Link } from 'react-router-dom';
import './tours.css';

import tourImage from '../../assets/img/lagocentro.jpg';

const tours = [
  {
    titulo: 'City tour por Villa Carlos Paz',
    descripcion: 'Recorrido guiado por los principales atractivos, plazas y miradores de la ciudad.',
    direccion: 'Salida desde el centro, Villa Carlos Paz',
    telefono: '+54 3541 42-2001',
    precio: 'Desde $7.000',
    imagen: tourImage,
    horarios: 'Todos los días: 10:00 AM - 6:00 PM',
  },
  {
    titulo: 'Tour por el Valle de Punilla',
    descripcion: 'Descubrí paisajes serranos, pueblos históricos y la cultura de Córdoba en un día.',
    direccion: 'Terminal de ómnibus, Villa Carlos Paz',
    telefono: '+54 3541 42-2002',
    precio: 'Desde $18.000',
    imagen: tourImage,
    horarios: 'Martes a Domingo: 8:00 AM - 7:00 PM',
  },
  {
    titulo: 'Tour gastronómico serrano',
    descripcion: 'Una experiencia para conocer sabores regionales y productores locales.',
    direccion: 'Punto de encuentro a confirmar',
    telefono: '+54 3541 42-2003',
    precio: 'Desde $12.000',
    imagen: tourImage,
    horarios: 'Viernes a Domingo: 6:00 PM - 10:00 PM',
  },
  {
    titulo: 'Tour fotográfico al atardecer',
    descripcion: 'Capturá las mejores vistas del lago y las sierras junto a un guía local.',
    direccion: 'Reloj Cucú, Villa Carlos Paz',
    telefono: '+54 3541 42-2004',
    precio: 'Desde $9.500',
    imagen: tourImage,
    horarios: 'Todos los días: según horario solar',
  },
];

function Tours() {
  return (
    <body className="tours">
      <header style={{ backgroundImage: `url(${tourImage})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; Tours</p>
        <h1>Tours en Villa Carlos Paz</h1>
        <p>Recorridos guiados para descubrir la ciudad y las sierras.</p>
      </header>
      <main>
        <h2>Elegí tu próximo tour</h2>
        <section className="tours-grid">
          {tours.map((tour) => (
            <article className="tour-card" key={tour.titulo}>
              <img src={tour.imagen} alt={tour.titulo} />
              <h3>{tour.titulo}</h3>
              <p>{tour.descripcion}</p>
              <p>Horarios: {tour.horarios}</p>
              <h4>Dirección: {tour.direccion}</h4>
              <p>Teléfono: {tour.telefono}</p>
              <h5>Precio: {tour.precio}</h5>
            </article>
          ))}
        </section>
      </main>
    </body>
  );
}

export default Tours;
