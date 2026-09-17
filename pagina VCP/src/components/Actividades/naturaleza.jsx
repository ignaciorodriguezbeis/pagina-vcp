import { Link } from 'react-router-dom';
import './naturaleza.css';

import naturalezaImage from '../../assets/img/costa.png';

export const naturaleza = [
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
  {
    titulo: 'Reserva Natural La Vida',
    descripcion: 'Senderos interpretativos para conocer la flora autóctona y los paisajes del valle.',
    direccion: 'Camino de la Reserva, Córdoba',
    telefono: '+54 3541 42-4005',
    precio: 'Desde $6.000',
    imagen: naturalezaImage,
    horarios: 'Todos los días: 8:00 AM - 6:00 PM',
  },
  {
    titulo: 'Cascada Los Chorrillos',
    descripcion: 'Caminata serrana hasta una cascada rodeada de vegetación y grandes piedras.',
    direccion: 'Área Los Chorrillos',
    telefono: '+54 3541 42-4006',
    precio: 'Desde $9.000',
    imagen: naturalezaImage,
    horarios: 'Miércoles a Domingo: 8:00 AM - 5:00 PM',
  },
  {
    titulo: 'Trekking por el Cerro La Cruz',
    descripcion: 'Ascenso guiado con paradas panorámicas y explicación de la geografía local.',
    direccion: 'Base del Cerro de la Cruz',
    telefono: '+54 3541 42-4007',
    precio: 'Desde $7.500',
    imagen: naturalezaImage,
    horarios: 'Todos los días: 7:00 AM - 1:00 PM',
  },
  {
    titulo: 'Caminata de plantas nativas',
    descripcion: 'Aprendé a reconocer árboles, flores y hierbas propias de las sierras cordobesas.',
    direccion: 'Jardín botánico serrano',
    telefono: '+54 3541 42-4008',
    precio: 'Desde $5.500',
    imagen: naturalezaImage,
    horarios: 'Sábados: 10:00 AM - 1:00 PM',
  },
  {
    titulo: 'Kayak en aguas tranquilas',
    descripcion: 'Una experiencia de remo suave para observar el paisaje del lago con seguridad.',
    direccion: 'Club Náutico del lago San Roque',
    telefono: '+54 3541 42-4009',
    precio: 'Desde $12.000',
    imagen: naturalezaImage,
    horarios: 'Todos los días: 9:00 AM - 5:00 PM',
  },
  {
    titulo: 'Observación de mariposas',
    descripcion: 'Recorrido educativo para conocer mariposas y otros insectos polinizadores de la zona.',
    direccion: 'Sendero El Tala',
    telefono: '+54 3541 42-4010',
    precio: 'Desde $5.000',
    imagen: naturalezaImage,
    horarios: 'Viernes a Domingo: 9:00 AM - 12:00 PM',
  },
  {
    titulo: 'Circuito de miradores serranos',
    descripcion: 'Visitá varios puntos panorámicos y disfrutá vistas amplias del valle y el lago.',
    direccion: 'Salida desde la costanera',
    telefono: '+54 3541 42-4011',
    precio: 'Desde $13.000',
    imagen: naturalezaImage,
    horarios: 'Todos los días: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Yoga frente al lago',
    descripcion: 'Práctica guiada al aire libre para conectar movimiento, respiración y paisaje.',
    direccion: 'Costanera del lago San Roque',
    telefono: '+54 3541 42-4012',
    precio: 'Desde $4.000',
    imagen: naturalezaImage,
    horarios: 'Martes, Jueves y Sábados: 8:00 AM - 10:00 AM',
  },
  {
    titulo: 'Noche de estrellas',
    descripcion: 'Observación del cielo serrano con telescopio y explicaciones de astronomía.',
    direccion: 'Mirador de las Altas Cumbres',
    telefono: '+54 3541 42-4013',
    precio: 'Desde $10.000',
    imagen: naturalezaImage,
    horarios: 'Viernes y Sábados: 8:00 PM - 11:00 PM',
  },
  {
    titulo: 'Caminata junto al río San Antonio',
    descripcion: 'Recorré la ribera y sus balnearios naturales en una salida de dificultad baja.',
    direccion: 'Río San Antonio, Villa Carlos Paz',
    telefono: '+54 3541 42-4014',
    precio: 'Desde $6.500',
    imagen: naturalezaImage,
    horarios: 'Todos los días: 9:00 AM - 3:00 PM',
  },
  {
    titulo: 'Ciclismo de montaña',
    descripcion: 'Circuitos de montaña para pedalear entre bosques, pendientes y miradores naturales.',
    direccion: 'Centro de alquiler serrano',
    telefono: '+54 3541 42-4015',
    precio: 'Desde $11.000',
    imagen: naturalezaImage,
    horarios: 'Todos los días: 8:00 AM - 5:00 PM',
  },
  {
    titulo: 'Fotografía de paisajes',
    descripcion: 'Salida para practicar fotografía de naturaleza con consejos de un fotógrafo local.',
    direccion: 'Mirador del lago',
    telefono: '+54 3541 42-4016',
    precio: 'Desde $9.500',
    imagen: naturalezaImage,
    horarios: 'Sábados y Domingos: 4:00 PM - 7:00 PM',
  },
  {
    titulo: 'Campamento familiar',
    descripcion: 'Experiencia al aire libre con fogón, actividades y noche en un entorno serrano.',
    direccion: 'Camping Los Algarrobos',
    telefono: '+54 3541 42-4017',
    precio: 'Desde $18.000',
    imagen: naturalezaImage,
    horarios: 'Viernes a Domingo: ingreso 3:00 PM',
  },
  {
    titulo: 'Limpieza comunitaria del río',
    descripcion: 'Actividad solidaria para cuidar los espacios naturales y aprender sobre ambiente.',
    direccion: 'Balneario El Fantasio',
    telefono: '+54 3541 42-4018',
    precio: 'Actividad gratuita',
    imagen: naturalezaImage,
    horarios: 'Segundo sábado del mes: 9:00 AM - 12:00 PM',
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
