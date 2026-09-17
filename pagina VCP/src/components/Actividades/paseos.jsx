import { Link } from 'react-router-dom';
import './paseos.css';

import paseoImage from '../../assets/img/puente-urbano.png';

export const paseos = [
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
  {
    titulo: 'Paseo por el parque estanciero',
    descripcion: 'Un espacio verde ideal para caminar, descansar y disfrutar una tarde en familia.',
    direccion: 'Parque Estancia La Quinta',
    telefono: '+54 3541 42-3005',
    precio: 'Entrada libre',
    imagen: paseoImage,
    horarios: 'Todos los días: 9:00 AM - 8:00 PM',
  },
  {
    titulo: 'Paseo en catamarán',
    descripcion: 'Navegá por el lago San Roque y observá la ciudad desde una perspectiva diferente.',
    direccion: 'Puerto del lago San Roque',
    telefono: '+54 3541 42-3006',
    precio: 'Desde $8.500',
    imagen: paseoImage,
    horarios: 'Todos los días: 10:00 AM - 6:00 PM',
  },
  {
    titulo: 'Paseo por la feria de diseño',
    descripcion: 'Recorré puestos de diseño independiente, decoración y productos hechos a mano.',
    direccion: 'Av. Libertad 100, Villa Carlos Paz',
    telefono: '+54 3541 42-3007',
    precio: 'Entrada libre',
    imagen: paseoImage,
    horarios: 'Sábados y Domingos: 4:00 PM - 10:00 PM',
  },
  {
    titulo: 'Paseo de murales urbanos',
    descripcion: 'Descubrí obras de arte urbano y conocé las historias detrás de cada mural.',
    direccion: 'Centro de Villa Carlos Paz',
    telefono: '+54 3541 42-3008',
    precio: 'Desde $4.500 con guía',
    imagen: paseoImage,
    horarios: 'Viernes y Sábados: 6:00 PM - 8:00 PM',
  },
  {
    titulo: 'Paseo por el balneario',
    descripcion: 'Disfrutá el río, la sombra de los árboles y los espacios recreativos del balneario.',
    direccion: 'Balneario El Fantasio',
    telefono: '+54 3541 42-3009',
    precio: 'Entrada libre',
    imagen: paseoImage,
    horarios: 'Todos los días: 9:00 AM - 8:00 PM',
  },
  {
    titulo: 'Paseo en monopatín',
    descripcion: 'Recorré la costanera de forma práctica y divertida con monopatines en alquiler.',
    direccion: 'Costanera y calle 9 de Julio',
    telefono: '+54 3541 42-3010',
    precio: 'Desde $3.000 la hora',
    imagen: paseoImage,
    horarios: 'Todos los días: 10:00 AM - 9:00 PM',
  },
  {
    titulo: 'Paseo de cafés y meriendas',
    descripcion: 'Visitá cafeterías tradicionales y probá dulces regionales durante una tarde relajada.',
    direccion: 'Galería del centro',
    telefono: '+54 3541 42-3011',
    precio: 'Desde $7.500',
    imagen: paseoImage,
    horarios: 'Miércoles a Domingo: 4:00 PM - 8:00 PM',
  },
  {
    titulo: 'Paseo por el puente central',
    descripcion: 'Un recorrido breve para disfrutar las vistas del lago y sacar fotografías memorables.',
    direccion: 'Puente central, Villa Carlos Paz',
    telefono: '+54 3541 42-3012',
    precio: 'Acceso libre',
    imagen: paseoImage,
    horarios: 'Todos los días, durante todo el día',
  },
  {
    titulo: 'Paseo de picnic serrano',
    descripcion: 'Compartí una comida al aire libre en un entorno natural con mesas y sombra.',
    direccion: 'Área recreativa Los Chorrillos',
    telefono: '+54 3541 42-3013',
    precio: 'Desde $6.000 por persona',
    imagen: paseoImage,
    horarios: 'Todos los días: 11:00 AM - 7:00 PM',
  },
  {
    titulo: 'Paseo por la costanera norte',
    descripcion: 'Caminata tranquila por un sector menos concurrido con vistas abiertas del lago.',
    direccion: 'Costanera norte, Villa Carlos Paz',
    telefono: '+54 3541 42-3014',
    precio: 'Acceso libre',
    imagen: paseoImage,
    horarios: 'Todos los días, durante todo el día',
  },
  {
    titulo: 'Paseo en tren turístico',
    descripcion: 'Un recorrido familiar por los puntos más visitados de la ciudad a bordo de un tren.',
    direccion: 'Salida desde la plaza central',
    telefono: '+54 3541 42-3015',
    precio: 'Desde $5.500',
    imagen: paseoImage,
    horarios: 'Todos los días: 3:00 PM - 9:00 PM',
  },
  {
    titulo: 'Paseo de juegos tradicionales',
    descripcion: 'Actividades recreativas al aire libre para que grandes y chicos compartan una tarde.',
    direccion: 'Parque de la Familia',
    telefono: '+54 3541 42-3016',
    precio: 'Desde $4.000',
    imagen: paseoImage,
    horarios: 'Sábados y Domingos: 2:00 PM - 8:00 PM',
  },
  {
    titulo: 'Paseo de luna llena',
    descripcion: 'Caminata nocturna junto al lago con una vista diferente de la ciudad iluminada.',
    direccion: 'Reloj Cucú, Villa Carlos Paz',
    telefono: '+54 3541 42-3017',
    precio: 'Desde $7.000',
    imagen: paseoImage,
    horarios: 'Una vez al mes: 8:00 PM - 10:00 PM',
  },
  {
    titulo: 'Paseo por las sierras bajas',
    descripcion: 'Recorrido de baja dificultad para disfrutar del paisaje sin alejarse de la ciudad.',
    direccion: 'Mirador de Cabalango',
    telefono: '+54 3541 42-3018',
    precio: 'Desde $9.000',
    imagen: paseoImage,
    horarios: 'Martes a Domingo: 9:00 AM - 4:00 PM',
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
