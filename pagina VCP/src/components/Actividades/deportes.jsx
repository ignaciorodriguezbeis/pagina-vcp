import { Link } from 'react-router-dom';
import './deportes.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import deport1 from '../../assets/img/deportes.webp'

export const deportes = [
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
  {
    titulo: 'Gimnasio CrossFit Villa Carlos Paz',
    descripcion: 'Entrenamientos funcionales de alta intensidad con una programación dinámica y guías especializados.',
    direccion: 'Ruta 20 555, Villa Carlos Paz',
    telefono: '+54 3541 42-5555',
    precio: 'Desde $2,800 por mes',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 7:00 AM - 9:00 PM',
  },
  {
    titulo: 'Academia de Básquet Villa Carlos Paz',
    descripcion: 'Entrena con un equipo profesional y participa en prácticas de básquet para todas las edades.',
    direccion: 'Calle del Básquet 202, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $2,200 por mes',
    imagen: deport1,
    horarios: 'Lunes a Viernes: 5:00 PM - 9:00 PM',
  },
  {
    titulo: 'Club de Yoga y Pilates Villa Carlos Paz',
    descripcion: 'Clases de relajación y fortalecimiento muscular para mejorar movilidad, postura y bienestar.',
    direccion: 'Av. del Sol 314, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Desde $1,800 por mes',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 8:00 AM - 8:00 PM',
  },
  {
    titulo: 'Escuela de Atletismo Villa Carlos Paz',
    descripcion: 'Entrenamiento para velocidad, resistencia y fuerza con planificaciones adaptadas a cada nivel.',
    direccion: 'Parque Deportivo 89, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $2,300 por mes',
    imagen: deport1,
    horarios: 'Lunes a Sábado: 6:00 AM - 7:00 PM',
  },
  {
    titulo: 'Club de Hockey Villa Carlos Paz',
    descripcion: 'Prácticas y competiciones de hockey con orientación técnica y espacios adecuados.',
    direccion: 'Calle del Hockey 404, Villa Carlos Paz',
    telefono: '+54 3541 42-9999',
    precio: 'Desde $2,700 por mes',
    imagen: deport1,
    horarios: 'Lunes a Viernes: 4:00 PM - 9:00 PM',
  },
  {
    titulo: 'Canchas de Vóley Villa Carlos Paz',
    descripcion: 'Diviértete jugando vóley con grupos recreativos y clases para principiantes y avanzados.',
    direccion: 'Av. del Vóley 512, Villa Carlos Paz',
    telefono: '+54 3541 42-1010',
    precio: 'Desde $1,600 por hora',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 9:00 AM - 10:00 PM',
  },
  {
    titulo: 'Academia de Boxeo Villa Carlos Paz',
    descripcion: 'Clases de boxeo técnico y acondicionamiento físico para mejorar resistencia y coordinación.',
    direccion: 'Calle del Boxeo 710, Villa Carlos Paz',
    telefono: '+54 3541 42-1212',
    precio: 'Desde $2,600 por mes',
    imagen: deport1,
    horarios: 'Lunes a Viernes: 5:00 PM - 9:00 PM',
  },
  {
    titulo: 'Club de Surf en Lago Villa Carlos Paz',
    descripcion: 'Experiencias de surf recreativo y entrenamiento con tablas y guías en aguas tranquilas.',
    direccion: 'Lago San Roque 114, Villa Carlos Paz',
    telefono: '+54 3541 42-1313',
    precio: 'Desde $3,200 por sesión',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 9:00 AM - 6:00 PM',
  },
  {
    titulo: 'Academia de Karate Villa Carlos Paz',
    descripcion: 'Clases de defensa personal y disciplina marcial con formación para todas las edades.',
    direccion: 'Calle del Karate 707, Villa Carlos Paz',
    telefono: '+54 3541 42-1414',
    precio: 'Desde $2,100 por mes',
    imagen: deport1,
    horarios: 'Martes a Domingo: 4:00 PM - 8:00 PM',
  },
  {
    titulo: 'Club de Mountain Bike Villa Carlos Paz',
    descripcion: 'Recorré rutas de montaña con grupos y entrenamientos adaptados a distintos niveles.',
    direccion: 'Ruta de los Cerros 18, Villa Carlos Paz',
    telefono: '+54 3541 42-1515',
    precio: 'Desde $1,900 por sesión',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 7:00 AM - 5:00 PM',
  },
  {
    titulo: 'Gimnasio de Musculación Villa Carlos Paz',
    descripcion: 'Equipamiento moderno para entrenamiento de fuerza, resistencia y acondicionamiento general.',
    direccion: 'Av. del Deporte 600, Villa Carlos Paz',
    telefono: '+54 3541 42-1616',
    precio: 'Desde $2,900 por mes',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 6:00 AM - 10:00 PM',
  },
  {
    titulo: 'Club de Gimnasia Artística Villa Carlos Paz',
    descripcion: 'Clases con enfoque en flexibilidad, fuerza y coordinación para todas las edades.',
    direccion: 'Calle de la Gimnasia 221, Villa Carlos Paz',
    telefono: '+54 3541 42-1717',
    precio: 'Desde $2,400 por mes',
    imagen: deport1,
    horarios: 'Lunes a Viernes: 3:00 PM - 8:00 PM',
  },
  {
    titulo: 'Escuela de Rugby Villa Carlos Paz',
    descripcion: 'Formación táctica y física para participar en deportes de contacto y trabajo en equipo.',
    direccion: 'Parque del Rugby 330, Villa Carlos Paz',
    telefono: '+54 3541 42-1818',
    precio: 'Desde $2,500 por mes',
    imagen: deport1,
    horarios: 'Lunes a Sábado: 4:00 PM - 8:00 PM',
  },
  {
    titulo: 'Club de Remo Villa Carlos Paz',
    descripcion: 'Entrenamientos de remo con vistas al lago y clases para principiantes y avanzados.',
    direccion: 'Muelle del Lago 501, Villa Carlos Paz',
    telefono: '+54 3541 42-1919',
    precio: 'Desde $3,000 por sesión',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 8:00 AM - 6:00 PM',
  },
  {
    titulo: 'Academia de Taekwondo Villa Carlos Paz',
    descripcion: 'Desarrolla disciplina, flexibilidad y técnica en clases de taekwondo para todas las edades.',
    direccion: 'Calle del Taekwondo 65, Villa Carlos Paz',
    telefono: '+54 3541 42-2020',
    precio: 'Desde $2,000 por mes',
    imagen: deport1,
    horarios: 'Martes a Domingo: 4:00 PM - 8:00 PM',
  },
  {
    titulo: 'Club de Esquí Acuático Villa Carlos Paz',
    descripcion: 'Divertida experiencia de esquí acuático con instrucción y equipos seguros.',
    direccion: 'Mirador del Lago 110, Villa Carlos Paz',
    telefono: '+54 3541 42-2121',
    precio: 'Desde $4,000 por sesión',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 10:00 AM - 6:00 PM',
  },
  {
    titulo: 'Centro de Acondicionamiento Villa Carlos Paz',
    descripcion: 'Programas de entrenamiento personal y grupal enfocados en salud, fuerza y resistencia.',
    direccion: 'Calle de la Salud 980, Villa Carlos Paz',
    telefono: '+54 3541 42-2223',
    precio: 'Desde $3,500 por mes',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 7:00 AM - 9:00 PM',
  },
  {
    titulo: 'Escuela de Balonmano Villa Carlos Paz',
    descripcion: 'Prácticas de balón mano con trabajo técnico, coordinación y juego en equipo.',
    direccion: 'Av. del Balón 311, Villa Carlos Paz',
    telefono: '+54 3541 42-2323',
    precio: 'Desde $2,200 por mes',
    imagen: deport1,
    horarios: 'Lunes a Viernes: 4:00 PM - 8:00 PM',
  },
  {
    titulo: 'Club de Golf Villa Carlos Paz',
    descripcion: 'Disfruta de práctica y torneos en un ambiente exclusivo para principiantes y avanzados.',
    direccion: 'Campo de Golf 440, Villa Carlos Paz',
    telefono: '+54 3541 42-2424',
    precio: 'Desde $4,500 por mes',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 8:00 AM - 7:00 PM',
  },
  {
    titulo: 'Academia de Squash Villa Carlos Paz',
    descripcion: 'Entrena en canchas de squash con clases técnicas y oportunidades de competencia.',
    direccion: 'Calle del Squash 760, Villa Carlos Paz',
    telefono: '+54 3541 42-2525',
    precio: 'Desde $2,800 por mes',
    imagen: deport1,
    horarios: 'Lunes a Domingo: 9:00 AM - 9:00 PM',
  },
  {
    titulo: 'Club de Hockey sobre Césped',
    descripcion: 'Practica hockey con espacios profesionales y entrenamientos de alto nivel.',
    direccion: 'Campo Verde 304, Villa Carlos Paz',
    telefono: '+54 3541 42-2626',
    precio: 'Desde $2,900 por mes',
    imagen: deport1,
    horarios: 'Lunes a Sábado: 5:00 PM - 8:00 PM',
  },
  {
    titulo: 'Academia de Judo Villa Carlos Paz',
    descripcion: 'Clases de judo para fortalecer técnica, equilibrio y autocontrol.',
    direccion: 'Calle del Judo 100, Villa Carlos Paz',
    telefono: '+54 3541 42-2727',
    precio: 'Desde $2,100 por mes',
    imagen: deport1,
    horarios: 'Martes a Domingo: 4:00 PM - 8:00 PM',
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