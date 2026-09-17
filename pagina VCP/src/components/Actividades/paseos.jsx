import { Link } from 'react-router-dom';
import './paseos.css';

import paseoImage from '../../assets/img/puente-urbano.png';

const paseos = [
  {
    titulo: 'Paseo costanera del lago',
    descripcion: 'Disfrutá una caminata tranquila junto al lago San Roque y sus mejores postales.',
    direccion: 'Costanera, Villa Carlos Paz',
    telefono: '+54 3541 42-3001',
    precio: 'Acceso libre',
    imagen: paseoImage,
    horarios: 'Todos los días, durante todo el día',
  },
  {
    titulo: 'Paseo por el centro histórico',
    descripcion: 'Conocé la historia local caminando por los rincones más tradicionales de la ciudad.',
    direccion: 'Plaza central, Villa Carlos Paz',
    telefono: '+54 3541 42-3002',
    precio: 'Desde $5.000 con guía',
    imagen: paseoImage,
    horarios: 'Miércoles a Domingo: 10:00 AM - 5:00 PM',
  },
  {
    titulo: 'Paseo en bicicleta',
    descripcion: 'Alquilá una bicicleta y recorré la costanera y los barrios residenciales de la villa.',
    direccion: 'Av. Uruguay 250, Villa Carlos Paz',
    telefono: '+54 3541 42-3003',
    precio: 'Desde $4.000 la hora',
    imagen: paseoImage,
    horarios: 'Todos los días: 9:00 AM - 8:00 PM',
  },
  {
    titulo: 'Paseo de artesanos',
    descripcion: 'Encontrá productos regionales, recuerdos y piezas únicas hechas por emprendedores locales.',
    direccion: 'Costanera y puente central',
    telefono: '+54 3541 42-3004',
    precio: 'Entrada libre',
    imagen: paseoImage,
    horarios: 'Viernes a Domingo: 5:00 PM - 11:00 PM',
  },
];

function Paseos() {
  return (
    <body className="paseos">
      <header style={{ backgroundImage: `url(${paseoImage})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; Paseos</p>
        <h1>Paseos en Villa Carlos Paz</h1>
        <p>Caminatas, recorridos y experiencias para disfrutar sin apuro.</p>
      </header>
      <main>
        <h2>Ideas para salir a pasear</h2>
        <section className="paseos-grid">
          {paseos.map((paseo) => (
            <article className="paseo-card" key={paseo.titulo}>
              <img src={paseo.imagen} alt={paseo.titulo} />
              <h3>{paseo.titulo}</h3>
              <p>{paseo.descripcion}</p>
              <p>Horarios: {paseo.horarios}</p>
              <h4>Dirección: {paseo.direccion}</h4>
              <p>Teléfono: {paseo.telefono}</p>
              <h5>Precio: {paseo.precio}</h5>
            </article>
          ))}
        </section>
      </main>
    </body>
  );
}

export default Paseos;
