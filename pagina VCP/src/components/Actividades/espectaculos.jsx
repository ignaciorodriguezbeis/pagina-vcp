import { Link } from 'react-router-dom';
import './espectaculos.css';

import Inicio from '../Inicio/Inicio';
import Actividades from './actividades';

import espec1 from '../../assets/img/teatro.png'

export const espectaculos = [
  {
    titulo: 'Teatro Municipal',
    descripcion: 'Espacio cultural con funciones de teatro, danza y música en vivo.',
    direccion: 'Av. 9 de Julio 1234, Villa Carlos Paz',
    telefono: '+54 3541 42-3333',
    precio: 'Entradas desde $15.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 7:00 PM - 10:00 PM',
  },
  {
    titulo: 'Teatro del Lago',
    descripcion: 'Ofrece una variada programación de espectáculos, incluyendo obras de teatro, conciertos y festivales.',
    direccion: 'Av. del Lago 5678, Villa Carlos Paz',
    telefono: '+54 3541 42-4444',
    precio: 'Entradas desde $12.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 6:00 PM - 11:00 PM',
  },
  {
    titulo: 'Teatro de la Ciudad',
    descripcion: 'Espacio dedicado a la promoción de artistas locales y nacionales, con una amplia oferta de espectáculos.',
    direccion: 'Calle San Martín 910, Villa Carlos Paz',
    telefono: '+54 3541 42-5555',
    precio: 'Entradas desde $10.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 5:00 PM - 10:00 PM',
  },
  {
    titulo: 'Teatro Independiente',
    descripcion: 'Pequeño teatro que ofrece obras de teatro independientes y experimentales.',
    direccion: 'Calle Belgrano 234, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Entradas desde $8.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 6:00 PM - 9:00 PM',
  },
  {
    titulo: 'Teatro de Comedia',
    descripcion: 'Especializado en comedias y espectáculos humorísticos, con funciones para toda la familia.',
    direccion: 'Calle Rivadavia 345, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Entradas desde $9.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 7:00 PM - 10:00 PM',
  },
  {
    titulo: 'Teatro Musical',
    descripcion: 'Ofrece producciones de teatro musical con coreografías y música en vivo.',
    direccion: 'Calle San Juan 456, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Entradas desde $11.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 6:00 PM - 10:00 PM',
  },
  {
    titulo: 'Teatro Infantil',
    descripcion: 'Espacio dedicado a espectáculos para niños, con obras de teatro y actividades educativas.',
    direccion: 'Calle Mitre 567, Villa Carlos Paz',
    telefono: '+54 3541 42-9999',
    precio: 'Entradas desde $7.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 4:00 PM - 7:00 PM',
  },
  {
    titulo: 'Teatro Experimental',
    descripcion: 'Ofrece obras de teatro experimentales y vanguardistas, con propuestas innovadoras.',
    direccion: 'Calle Córdoba 678, Villa Carlos Paz',
    telefono: '+54 3541 42-1010',
    precio: 'Entradas desde $10.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 5:00 PM - 9:00 PM',
  },
  {
    titulo: 'Teatro de Improvisación',
    descripcion: 'Espacio donde se realizan espectáculos de improvisación teatral, con participación del público.',
    direccion: 'Calle Entre Ríos 789, Villa Carlos Paz',
    telefono: '+54 3541 42-1111',
    precio: 'Entradas desde $8.500',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 6:00 PM - 9:00 PM',
  },
  {
    titulo: 'Teatro de Títeres',
    descripcion: 'Ofrece espectáculos de títeres para niños y adultos, con historias divertidas y educativas.',
    direccion: 'Calle La Rioja 890, Villa Carlos Paz',
    telefono: '+54 3541 42-1212',
    precio: 'Entradas desde $7.500',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 4:00 PM - 7:00 PM',
  },
  {
    titulo: 'Cine Club Villa Carlos Paz',
    descripcion: 'Proyecciones exclusivas de cine independiente, clásicos y presentaciones especiales.',
    direccion: 'Calle Rosario 111, Villa Carlos Paz',
    telefono: '+54 3541 42-1313',
    precio: 'Entradas desde $6.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 2:00 PM - 11:00 PM',
  },
  {
    titulo: 'Concierto al Aire Libre',
    descripcion: 'Eventos musicales con artistas locales e internacionales bajo el cielo abierto.',
    direccion: 'Plaza Central 222, Villa Carlos Paz',
    telefono: '+54 3541 42-1414',
    precio: 'Entradas desde $14.000',
    imagen: espec1,
    horarios: 'Viernes a Domingo: 8:00 PM - 1:00 AM',
  },
  {
    titulo: 'Festival de Jazz',
    descripcion: 'Una cita musical con presentaciones de jazz, blues y música en vivo.',
    direccion: 'Avenida del Sol 333, Villa Carlos Paz',
    telefono: '+54 3541 42-1515',
    precio: 'Entradas desde $18.000',
    imagen: espec1,
    horarios: 'Sábado y Domingo: 7:00 PM - 11:00 PM',
  },
  {
    titulo: 'Espacio de Danza',
    descripcion: 'Funciones de danza contemporánea y folclórica con artistas locales y regionales.',
    direccion: 'Calle Santa Fe 444, Villa Carlos Paz',
    telefono: '+54 3541 42-1616',
    precio: 'Entradas desde $9.500',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 6:00 PM - 9:00 PM',
  },
  {
    titulo: 'Festival de Folklore',
    descripcion: 'Celebración con música tradicional, danzas y artistas del folclore argentino.',
    direccion: 'Parque de la Cultura 555, Villa Carlos Paz',
    telefono: '+54 3541 42-1717',
    precio: 'Entradas desde $12.000',
    imagen: espec1,
    horarios: 'Viernes a Domingo: 6:00 PM - 11:00 PM',
  },
  {
    titulo: 'Show de Magia',
    descripcion: 'Espectáculos impresionantes de magia y trucos para grandes y chicos.',
    direccion: 'Calle Bella Vista 666, Villa Carlos Paz',
    telefono: '+54 3541 42-1818',
    precio: 'Entradas desde $10.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 5:00 PM - 9:00 PM',
  },
  {
    titulo: 'Festival de Cine',
    descripcion: 'Muestra cinematográfica con proyecciones, debates y encuentros con artistas.',
    direccion: 'Centro Cultural 777, Villa Carlos Paz',
    telefono: '+54 3541 42-1919',
    precio: 'Entradas desde $8.000',
    imagen: espec1,
    horarios: 'Jueves a Domingo: 4:00 PM - 10:00 PM',
  },
  {
    titulo: 'Cabaret Nocturno',
    descripcion: 'Espectáculos de música y entretenimiento con ambiente elegante para la noche.',
    direccion: 'Calle Libertad 888, Villa Carlos Paz',
    telefono: '+54 3541 42-2020',
    precio: 'Entradas desde $20.000',
    imagen: espec1,
    horarios: 'Viernes a Domingo: 9:00 PM - 2:00 AM',
  },
  {
    titulo: 'Teatro de Vida Silvestre',
    descripcion: 'Espectáculos temáticos con música, luces y escenarios inspirados en la naturaleza.',
    direccion: 'Sendero del Sol 999, Villa Carlos Paz',
    telefono: '+54 3541 42-2121',
    precio: 'Entradas desde $13.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 7:00 PM - 10:00 PM',
  },
  {
    titulo: 'Pequeño Circo',
    descripcion: 'Un show familiar con artistas circenses, acrobacias y números para toda la familia.',
    direccion: 'Ruta Provincial 15, Villa Carlos Paz',
    telefono: '+54 3541 42-2222',
    precio: 'Entradas desde $12.500',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 3:00 PM - 8:00 PM',
  },
  {
    titulo: 'Festival de Música Electrónica',
    descripcion: 'Noche de DJs, luces y música electrónica en un ambiente vibrante y moderno.',
    direccion: 'Polideportivo 222, Villa Carlos Paz',
    telefono: '+54 3541 42-2323',
    precio: 'Entradas desde $16.000',
    imagen: espec1,
    horarios: 'Viernes y Sábado: 9:00 PM - 2:00 AM',
  },
  {
    titulo: 'Espacio de Stand Up',
    descripcion: 'Funciones de comedia en vivo con humor local, nacional e internacional.',
    direccion: 'Calle de la Risa 333, Villa Carlos Paz',
    telefono: '+54 3541 42-2424',
    precio: 'Entradas desde $11.000',
    imagen: espec1,
    horarios: 'Viernes a Domingo: 8:00 PM - 11:00 PM',
  },
  {
    titulo: 'Muestra de Arte Visual',
    descripcion: 'Exposiciones de arte contemporáneo, performance y actividades culturales.',
    direccion: 'Galería del Centro 444, Villa Carlos Paz',
    telefono: '+54 3541 42-2525',
    precio: 'Entradas desde $5.000',
    imagen: espec1,
    horarios: 'Lunes a Domingo: 10:00 AM - 7:00 PM',
  },
  {
    titulo: 'Recital de Rock',
    descripcion: 'Bandas locales e internacionales participan en una noche de rock y energía.',
    direccion: 'Club del Rock 555, Villa Carlos Paz',
    telefono: '+54 3541 42-2626',
    precio: 'Entradas desde $17.000',
    imagen: espec1,
    horarios: 'Viernes a Domingo: 8:00 PM - 12:00 AM',
  },
  {
    titulo: 'Show de Folclore',
    descripcion: 'Presentación musical con guitarras, danzas y costumbres tradicionales del país.',
    direccion: 'Plaza del Pueblo 666, Villa Carlos Paz',
    telefono: '+54 3541 42-2727',
    precio: 'Entradas desde $10.500',
    imagen: espec1,
    horarios: 'Sábado y Domingo: 7:00 PM - 10:00 PM',
  },
  {
    titulo: 'Festival de Verano',
    descripcion: 'Evento anual con música, gastronomía y actividades culturales para toda la familia.',
    direccion: 'Costa del Lago 777, Villa Carlos Paz',
    telefono: '+54 3541 42-2828',
    precio: 'Entradas desde $15.000',
    imagen: espec1,
    horarios: 'Viernes a Domingo: 5:00 PM - 1:00 AM',
  },
  {
    titulo: 'Teatro de Ópera',
    descripcion: 'Funciones de ópera y canto lírico con una propuesta internacional y local.',
    direccion: 'Calle del Arte 888, Villa Carlos Paz',
    telefono: '+54 3541 42-2929',
    precio: 'Entradas desde $21.000',
    imagen: espec1,
    horarios: 'Sábado y Domingo: 7:00 PM - 10:00 PM',
  },
];

function Espectaculos() {
  return (
    <body className='espectaculos'>
      <header style={{ backgroundImage: `url(${espec1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; espectaculos </p>
        <h1>Espectaculos en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>

        <h2>Espectaculos</h2>

        <section className="espectaculos-grid">
          {espectaculos.map((espectaculo) => (
            <article className="espectaculo-card" key={espectaculo.titulo}>
              <img src={espectaculo.imagen} alt={espectaculo.titulo} />
              <h3>{espectaculo.titulo}</h3>
              <p>{espectaculo.descripcion}</p>
              <p>horarios: {espectaculo.horarios}</p>
              <h4>dirección: {espectaculo.direccion}</h4>
              <p>teléfono: {espectaculo.telefono}</p>
              <h5>precio: {espectaculo.precio}</h5>
            </article>
          ))}

        </section>

        <a className="especPubli1" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="especPubli2" to="/publicidad">
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

export default Espectaculos; 