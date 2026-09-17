import { Link } from 'react-router-dom';
import './tours.css';

import tourImage from '../../assets/img/lagocentro.jpg';

export const tours = [
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
  {
    titulo: 'Tour por el Camino de las Altas Cumbres',
    descripcion: 'Un recorrido entre montañas, quebradas y miradores de las sierras cordobesas.',
    direccion: 'Salida desde Villa Carlos Paz',
    telefono: '+54 3541 42-2005',
    precio: 'Desde $22.000',
    imagen: tourImage,
    horarios: 'Lunes, Miércoles y Sábados: 7:00 AM - 8:00 PM',
  },
  {
    titulo: 'Tour de iglesias y capillas',
    descripcion: 'Conocé el patrimonio religioso y la historia de las primeras comunidades de la región.',
    direccion: 'Parroquia Nuestra Señora del Carmen',
    telefono: '+54 3541 42-2006',
    precio: 'Desde $6.500',
    imagen: tourImage,
    horarios: 'Jueves y Sábados: 10:00 AM - 1:00 PM',
  },
  {
    titulo: 'Tour de mercados locales',
    descripcion: 'Visitá ferias y mercados para descubrir artesanías, productos regionales y sabores locales.',
    direccion: 'Plaza de los Artesanos',
    telefono: '+54 3541 42-2007',
    precio: 'Desde $5.500',
    imagen: tourImage,
    horarios: 'Viernes a Domingo: 9:00 AM - 1:00 PM',
  },
  {
    titulo: 'Tour nocturno de leyendas',
    descripcion: 'Historias y relatos de Villa Carlos Paz durante una caminata guiada por el centro.',
    direccion: 'Reloj Cucú, Villa Carlos Paz',
    telefono: '+54 3541 42-2008',
    precio: 'Desde $8.000',
    imagen: tourImage,
    horarios: 'Viernes y Sábados: 8:00 PM - 10:00 PM',
  },
  {
    titulo: 'Tour en kayak por el lago',
    descripcion: 'Explorá el lago San Roque desde el agua con instructores y equipamiento incluido.',
    direccion: 'Club Náutico, Villa Carlos Paz',
    telefono: '+54 3541 42-2009',
    precio: 'Desde $14.000',
    imagen: tourImage,
    horarios: 'Todos los días: 9:00 AM - 5:00 PM',
  },
  {
    titulo: 'Tour de arquitectura local',
    descripcion: 'Un paseo por edificios, hoteles y espacios que forman parte de la identidad de la ciudad.',
    direccion: 'Centro histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-2010',
    precio: 'Desde $6.000',
    imagen: tourImage,
    horarios: 'Martes y Jueves: 4:00 PM - 6:00 PM',
  },
  {
    titulo: 'Tour de cabalgata serrana',
    descripcion: 'Recorré senderos serranos a caballo acompañado por guías especializados.',
    direccion: 'Estancia El Durazno',
    telefono: '+54 3541 42-2011',
    precio: 'Desde $16.000',
    imagen: tourImage,
    horarios: 'Todos los días: 9:00 AM - 6:00 PM',
  },
  {
    titulo: 'Tour del patrimonio ferroviario',
    descripcion: 'Descubrí la importancia del ferrocarril en el crecimiento de las localidades serranas.',
    direccion: 'Antigua estación de trenes',
    telefono: '+54 3541 42-2012',
    precio: 'Desde $5.000',
    imagen: tourImage,
    horarios: 'Sábados: 10:00 AM - 1:00 PM',
  },
  {
    titulo: 'Tour de fotografía urbana',
    descripcion: 'Aprendé técnicas para fotografiar calles, puentes y rincones emblemáticos de la ciudad.',
    direccion: 'Puente central, Villa Carlos Paz',
    telefono: '+54 3541 42-2013',
    precio: 'Desde $10.000',
    imagen: tourImage,
    horarios: 'Domingos: 4:00 PM - 7:00 PM',
  },
  {
    titulo: 'Tour de bodegas cordobesas',
    descripcion: 'Conocé bodegas cercanas y degustá vinos producidos en los valles de Córdoba.',
    direccion: 'Salida desde la terminal',
    telefono: '+54 3541 42-2014',
    precio: 'Desde $25.000',
    imagen: tourImage,
    horarios: 'Viernes y Sábados: 9:00 AM - 8:00 PM',
  },
  {
    titulo: 'Tour de bienestar y relax',
    descripcion: 'Una jornada para disfrutar de spas, masajes y espacios de descanso en las sierras.',
    direccion: 'Complejo termal, Villa Carlos Paz',
    telefono: '+54 3541 42-2015',
    precio: 'Desde $19.000',
    imagen: tourImage,
    horarios: 'Lunes a Viernes: 10:00 AM - 6:00 PM',
  },
  {
    titulo: 'Tour de parques y plazas',
    descripcion: 'Recorrido familiar por los espacios verdes y las plazas más importantes de la villa.',
    direccion: 'Plaza del Sol, Villa Carlos Paz',
    telefono: '+54 3541 42-2016',
    precio: 'Desde $4.500',
    imagen: tourImage,
    horarios: 'Todos los días: 3:00 PM - 6:00 PM',
  },
  {
    titulo: 'Tour de aventura en 4x4',
    descripcion: 'Atravesá caminos serranos y disfrutá miradores de difícil acceso en vehículos todo terreno.',
    direccion: 'Salida desde la costanera',
    telefono: '+54 3541 42-2017',
    precio: 'Desde $21.000',
    imagen: tourImage,
    horarios: 'Martes a Domingo: 8:00 AM - 5:00 PM',
  },
  {
    titulo: 'Tour de amanecer en las sierras',
    descripcion: 'Viví un amanecer especial con vistas abiertas y desayuno regional incluido.',
    direccion: 'Mirador de Villa Carlos Paz',
    telefono: '+54 3541 42-2018',
    precio: 'Desde $11.000',
    imagen: tourImage,
    horarios: 'Todos los días: desde las 5:30 AM',
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
