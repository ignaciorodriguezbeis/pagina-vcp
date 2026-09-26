import { Link } from 'react-router-dom';
import './infantiles.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import child1 from '../../assets/img/teatro.png'

export const infantiles = [
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
  {
    titulo: 'Taller de Arte Infantil',
    descripcion: 'Actividades de dibujo, pintura y manualidades para que los chicos exploren su creatividad.',
    direccion: 'Calle Los Artesanos 120, Villa Carlos Paz',
    telefono: '+54 3541 42-5555',
    precio: 'Desde $3.500 por clase',
    imagen: child1,
    horarios: 'Lunes a Viernes: 3:00 PM - 6:00 PM',
  },
  {
    titulo: 'Ludoteca del Lago',
    descripcion: 'Espacio de juego libre con propuestas recreativas para distintas edades.',
    direccion: 'Costanera del Lago 245, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Entrada desde $2.500',
    imagen: child1,
    horarios: 'Lunes a Domingo: 10:00 AM - 7:00 PM',
  },
  {
    titulo: 'Escuela de Circo para Niños',
    descripcion: 'Clases de malabares, equilibrio y acrobacia con actividades adaptadas a cada edad.',
    direccion: 'Av. Cárcano 310, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Cuota mensual desde $7.000',
    imagen: child1,
    horarios: 'Martes a Sábado: 4:00 PM - 7:00 PM',
  },
  {
    titulo: 'Granja Educativa Serrana',
    descripcion: 'Visitas guiadas para conocer animales de granja y aprender sobre el cuidado de la naturaleza.',
    direccion: 'Camino de las Granjas 450, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Entradas desde $4.000',
    imagen: child1,
    horarios: 'Miércoles a Domingo: 10:00 AM - 5:00 PM',
  },
  {
    titulo: 'Cine Infantil del Centro',
    descripcion: 'Funciones familiares con películas infantiles y horarios especiales durante las vacaciones.',
    direccion: 'Galería del Centro 510, Villa Carlos Paz',
    telefono: '+54 3541 42-9999',
    precio: 'Entradas desde $3.000',
    imagen: child1,
    horarios: 'Lunes a Domingo: 2:00 PM - 8:00 PM',
  },
  {
    titulo: 'Taller de Cocina para Chicos',
    descripcion: 'Clases prácticas para preparar recetas sencillas en un entorno cuidado y divertido.',
    direccion: 'Calle San Martín 620, Villa Carlos Paz',
    telefono: '+54 3541 42-1010',
    precio: 'Desde $4.500 por taller',
    imagen: child1,
    horarios: 'Sábados y Domingos: 10:00 AM - 1:00 PM',
  },
  {
    titulo: 'Club de Ciencia Infantil',
    descripcion: 'Experimentos y actividades para descubrir principios de ciencia de forma entretenida.',
    direccion: 'Av. Libertad 725, Villa Carlos Paz',
    telefono: '+54 3541 42-1212',
    precio: 'Cuota mensual desde $5.500',
    imagen: child1,
    horarios: 'Lunes y Miércoles: 4:00 PM - 6:00 PM',
  },
  {
    titulo: 'Espacio de Juegos Bajo Techo',
    descripcion: 'Juegos blandos, circuitos y sectores de actividad para disfrutar en familia.',
    direccion: 'Av. Uruguay 830, Villa Carlos Paz',
    telefono: '+54 3541 42-1313',
    precio: 'Entrada desde $3.500',
    imagen: child1,
    horarios: 'Lunes a Domingo: 10:00 AM - 8:00 PM',
  },
  {
    titulo: 'Taller de Música Infantil',
    descripcion: 'Encuentros musicales con canto, ritmo e instrumentos para iniciarse en la música.',
    direccion: 'Calle 9 de Julio 940, Villa Carlos Paz',
    telefono: '+54 3541 42-1414',
    precio: 'Cuota mensual desde $6.500',
    imagen: child1,
    horarios: 'Martes a Viernes: 3:00 PM - 7:00 PM',
  },
  {
    titulo: 'Biblioteca Infantil Viajera',
    descripcion: 'Lecturas, narraciones y actividades para acercar a los niños al mundo de los libros.',
    direccion: 'Calle Corrientes 105, Villa Carlos Paz',
    telefono: '+54 3541 42-1515',
    precio: 'Actividades desde $1.500',
    imagen: child1,
    horarios: 'Lunes a Sábado: 9:00 AM - 6:00 PM',
  },
  {
    titulo: 'Escuela de Danza para Niños',
    descripcion: 'Clases de danza con ejercicios de movimiento, coordinación y expresión corporal.',
    direccion: 'Calle Juan B. Justo 215, Villa Carlos Paz',
    telefono: '+54 3541 42-1616',
    precio: 'Cuota mensual desde $5.000',
    imagen: child1,
    horarios: 'Lunes a Viernes: 4:00 PM - 8:00 PM',
  },
  {
    titulo: 'Paseos en Pony',
    descripcion: 'Experiencia recreativa de contacto con caballos y paseos cortos acompañados por adultos.',
    direccion: 'Camino de las Sierras 330, Villa Carlos Paz',
    telefono: '+54 3541 42-1717',
    precio: 'Desde $3.000 por paseo',
    imagen: child1,
    horarios: 'Sábados y Domingos: 10:00 AM - 5:00 PM',
  },
  {
    titulo: 'Parque de Trampolines Infantil',
    descripcion: 'Circuitos de salto y juegos con áreas diferenciadas para distintas edades.',
    direccion: 'Av. San Martín 445, Villa Carlos Paz',
    telefono: '+54 3541 42-1818',
    precio: 'Desde $4.000 por hora',
    imagen: child1,
    horarios: 'Lunes a Domingo: 11:00 AM - 8:00 PM',
  },
  {
    titulo: 'Taller de Cerámica para Niños',
    descripcion: 'Propuestas de modelado y decoración para crear piezas de cerámica propias.',
    direccion: 'Calle Las Heras 550, Villa Carlos Paz',
    telefono: '+54 3541 42-1919',
    precio: 'Desde $3.800 por clase',
    imagen: child1,
    horarios: 'Martes a Sábado: 3:00 PM - 6:00 PM',
  },
  {
    titulo: 'Acuario Educativo',
    descripcion: 'Recorrido didáctico para descubrir especies acuáticas y aprender sobre su hábitat.',
    direccion: 'Costanera del Lago 660, Villa Carlos Paz',
    telefono: '+54 3541 42-2020',
    precio: 'Entradas desde $5.000',
    imagen: child1,
    horarios: 'Lunes a Domingo: 10:00 AM - 6:00 PM',
  },
  {
    titulo: 'Taller de Teatro Infantil',
    descripcion: 'Juegos teatrales y expresión escénica para que los chicos inventen historias y personajes.',
    direccion: 'Calle Alem 775, Villa Carlos Paz',
    telefono: '+54 3541 42-2121',
    precio: 'Cuota mensual desde $5.800',
    imagen: child1,
    horarios: 'Lunes, Miércoles y Viernes: 4:00 PM - 7:00 PM',
  },
  {
    titulo: 'Mini Golf Familiar',
    descripcion: 'Recorrido de minigolf con desafíos sencillos y diversión para chicos y grandes.',
    direccion: 'Av. Illia 880, Villa Carlos Paz',
    telefono: '+54 3541 42-2222',
    precio: 'Desde $2.800 por partida',
    imagen: child1,
    horarios: 'Lunes a Domingo: 10:00 AM - 9:00 PM',
  },
  {
    titulo: 'Taller de Huerta para Chicos',
    descripcion: 'Actividad al aire libre para aprender a sembrar, cuidar plantas y cosechar verduras.',
    direccion: 'Parque de la Villa 990, Villa Carlos Paz',
    telefono: '+54 3541 42-2323',
    precio: 'Desde $2.500 por encuentro',
    imagen: child1,
    horarios: 'Sábados: 9:00 AM - 12:00 PM',
  },
  {
    titulo: 'Colonia Recreativa de Verano',
    descripcion: 'Jornadas con juegos, deportes y actividades grupales durante la temporada de verano.',
    direccion: 'Complejo Recreativo 110, Villa Carlos Paz',
    telefono: '+54 3541 42-2424',
    precio: 'Inscripción desde $12.000 por semana',
    imagen: child1,
    horarios: 'Lunes a Viernes: 9:00 AM - 1:00 PM',
  },
  {
    titulo: 'Búsqueda del Tesoro Familiar',
    descripcion: 'Juego guiado con pistas y desafíos para recorrer espacios recreativos en familia.',
    direccion: 'Punto de encuentro en el centro, Villa Carlos Paz',
    telefono: '+54 3541 42-2525',
    precio: 'Desde $2.000 por participante',
    imagen: child1,
    horarios: 'Sábados y Domingos: 3:00 PM - 6:00 PM',
  },
];

function Infantiles() {
  return (
    <body className='infantiles'>
      <header style={{ backgroundImage: `url(${child1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; Infantiles</p>
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