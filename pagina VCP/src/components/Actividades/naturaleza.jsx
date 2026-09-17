import { Link } from 'react-router-dom';
import './naturaleza.css';

import naturalezaImage from '../../assets/img/costa.png';

const naturaleza = [
  {
    titulo: 'Reserva Natural Los Gigantes',
    descripcion: 'Paisajes serranos, formaciones rocosas y senderos para conectar con la naturaleza.',
    direccion: 'Camino a Los Gigantes, Córdoba',
    telefono: '+54 3541 42-4001',
    precio: 'Desde $15.000',
    imagen: naturalezaImage,
    horarios: 'Todos los días: 8:00 AM - 6:00 PM',
  },
  {
    titulo: 'Sendero del Cerro de la Cruz',
    descripcion: 'Una caminata de dificultad media con una vista panorámica de Villa Carlos Paz.',
    direccion: 'Base del Cerro de la Cruz',
    telefono: '+54 3541 42-4002',
    precio: 'Acceso libre',
    imagen: naturalezaImage,
    horarios: 'Todos los días: 8:00 AM - 7:00 PM',
  },
  {
    titulo: 'Avistaje de aves serranas',
    descripcion: 'Salida guiada para observar la fauna y aprender sobre el ecosistema de las sierras.',
    direccion: 'Punto de encuentro a confirmar',
    telefono: '+54 3541 42-4003',
    precio: 'Desde $8.000',
    imagen: naturalezaImage,
    horarios: 'Sábados y Domingos: 7:00 AM - 11:00 AM',
  },
  {
    titulo: 'Día de río y naturaleza',
    descripcion: 'Un plan para relajarse junto al río, disfrutar del paisaje y compartir al aire libre.',
    direccion: 'Balneario Playas de Oro',
    telefono: '+54 3541 42-4004',
    precio: 'Acceso libre',
    imagen: naturalezaImage,
    horarios: 'Todos los días: 9:00 AM - 8:00 PM',
  },
];

function Naturaleza() {
  return (
    <body className="naturaleza">
      <header style={{ backgroundImage: `url(${naturalezaImage})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; Naturaleza</p>
        <h1>Naturaleza en Villa Carlos Paz</h1>
        <p>Senderos, ríos y paisajes serranos para vivir al aire libre.</p>
      </header>
      <main>
        <h2>Experiencias en la naturaleza</h2>
        <section className="naturaleza-grid">
          {naturaleza.map((experiencia) => (
            <article className="naturaleza-card" key={experiencia.titulo}>
              <img src={experiencia.imagen} alt={experiencia.titulo} />
              <h3>{experiencia.titulo}</h3>
              <p>{experiencia.descripcion}</p>
              <p>Horarios: {experiencia.horarios}</p>
              <h4>Dirección: {experiencia.direccion}</h4>
              <p>Teléfono: {experiencia.telefono}</p>
              <h5>Precio: {experiencia.precio}</h5>
            </article>
          ))}
        </section>
      </main>
    </body>
  );
}

export default Naturaleza;
