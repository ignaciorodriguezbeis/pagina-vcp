import { Link } from 'react-router-dom';
import './bares.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import bar1 from '../../assets/img/barCosta.jpg'

export const bares = [
  {
    nombre: "Bar 1",
    descripcion: "Descripción del bar 1",
    imagen: "ruta/a/la/imagen1.jpg",
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "123-456-7890",
    direccion: "Calle Principal 123, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 2",
    descripcion: "Descripción del bar 2",
    imagen: "ruta/a/la/imagen2.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "987-654-3210",
    direccion: "Avenida Secundaria 456, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    nombre: "Bar 3",
    descripcion: "Descripción del bar 3",
    imagen: "ruta/a/la/imagen3.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "555-123-4567",
    direccion: "Plaza Central 789, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 4",
    descripcion: "Descripción del bar 4",
    imagen: "ruta/a/la/imagen4.jpg",
    horario: "Lunes a Domingo: 10:00 AM - 8:00 PM",
    telefono: "444-987-6543",
    direccion: "Calle del Sol 321, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    nombre: "Bar 5",
    descripcion: "Descripción del bar 5",
    imagen: "ruta/a/la/imagen5.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "333-222-1111",
    direccion: "Avenida Principal 9187, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 6",
    descripcion: "Descripción del bar 6",
    imagen: "ruta/a/la/imagen5.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "333-222-1111",
    direccion: "Avenida Principal 9831, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 7",
    descripcion: "Descripción del bar 7",
    imagen: "ruta/a/la/imagen5.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "333-222-1111",
    direccion: "Avenida Principal 3434, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 8",
    descripcion: "Un espacio informal para disfrutar de bebidas y picadas.",
    imagen: bar1,
    horario: "Lunes a Domingo: 12:00 PM - 11:00 PM",
    telefono: "(03541) 400-108",
    direccion: "Avenida San Martín 108, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 9",
    descripcion: "Bar de ambiente relajado con opciones para compartir.",
    imagen: bar1,
    horario: "Martes a Domingo: 5:00 PM - 1:00 AM",
    telefono: "(03541) 400-109",
    direccion: "Calle 9 de Julio 209, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    nombre: "Bar 10",
    descripcion: "Un lugar para reunirse y probar tragos clásicos.",
    imagen: bar1,
    horario: "Lunes a Sábado: 6:00 PM - 2:00 AM",
    telefono: "(03541) 400-110",
    direccion: "Avenida Uruguay 310, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 11",
    descripcion: "Propuestas sencillas para una salida con amigos.",
    imagen: bar1,
    horario: "Lunes a Domingo: 11:00 AM - 12:00 AM",
    telefono: "(03541) 400-111",
    direccion: "Calle Las Heras 411, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    nombre: "Bar 12",
    descripcion: "Bebidas, aperitivos y un ambiente tranquilo.",
    imagen: bar1,
    horario: "Miércoles a Lunes: 4:00 PM - 1:00 AM",
    telefono: "(03541) 400-112",
    direccion: "Avenida Cárcano 512, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 13",
    descripcion: "Un punto de encuentro para compartir algo rico.",
    imagen: bar1,
    horario: "Lunes a Domingo: 12:00 PM - 12:00 AM",
    telefono: "(03541) 400-113",
    direccion: "Calle Libertad 613, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    nombre: "Bar 14",
    descripcion: "Carta variada de bebidas y comidas para picar.",
    imagen: bar1,
    horario: "Jueves a Martes: 5:00 PM - 2:00 AM",
    telefono: "(03541) 400-114",
    direccion: "Avenida General Paz 714, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 15",
    descripcion: "Un ambiente distendido para disfrutar cualquier día.",
    imagen: bar1,
    horario: "Lunes a Domingo: 10:00 AM - 11:00 PM",
    telefono: "(03541) 400-115",
    direccion: "Calle Alberdi 815, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 16",
    descripcion: "Opciones clásicas para acompañar una buena charla.",
    imagen: bar1,
    horario: "Martes a Domingo: 12:00 PM - 1:00 AM",
    telefono: "(03541) 400-116",
    direccion: "Avenida Libertad 916, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    nombre: "Bar 17",
    descripcion: "Un bar acogedor con bebidas y platos para compartir.",
    imagen: bar1,
    horario: "Lunes a Sábado: 5:00 PM - 1:00 AM",
    telefono: "(03541) 400-117",
    direccion: "Calle Moreno 1017, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 18",
    descripcion: "Un espacio casual para hacer una pausa y tomar algo.",
    imagen: bar1,
    horario: "Lunes a Domingo: 9:00 AM - 11:00 PM",
    telefono: "(03541) 400-118",
    direccion: "Avenida San Martín 1118, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    nombre: "Bar 19",
    descripcion: "Ideal para juntarse a disfrutar de una picada.",
    imagen: bar1,
    horario: "Miércoles a Lunes: 6:00 PM - 2:00 AM",
    telefono: "(03541) 400-119",
    direccion: "Calle Sarmiento 1219, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 20",
    descripcion: "Bebidas y sabores simples en un ambiente amigable.",
    imagen: bar1,
    horario: "Lunes a Domingo: 11:00 AM - 12:00 AM",
    telefono: "(03541) 400-120",
    direccion: "Avenida Uruguay 1320, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 21",
    descripcion: "Una propuesta relajada para compartir con amigos.",
    imagen: bar1,
    horario: "Jueves a Martes: 4:00 PM - 1:00 AM",
    telefono: "(03541) 400-121",
    direccion: "Calle Belgrano 1421, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    nombre: "Bar 22",
    descripcion: "Un lugar para disfrutar aperitivos y tragos variados.",
    imagen: bar1,
    horario: "Lunes a Sábado: 12:00 PM - 1:00 AM",
    telefono: "(03541) 400-122",
    direccion: "Avenida Cárcano 1522, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 23",
    descripcion: "Bar de barrio con alternativas para todos los gustos.",
    imagen: bar1,
    horario: "Martes a Domingo: 10:00 AM - 12:00 AM",
    telefono: "(03541) 400-123",
    direccion: "Calle José Hernández 1623, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    nombre: "Bar 24",
    descripcion: "Una opción cómoda para reunirse y compartir algo rico.",
    imagen: bar1,
    horario: "Lunes a Domingo: 5:00 PM - 2:00 AM",
    telefono: "(03541) 400-124",
    direccion: "Avenida General Paz 1724, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    nombre: "Bar 25",
    descripcion: "Bebidas, picadas y un ambiente para disfrutar sin apuro.",
    imagen: bar1,
    horario: "Miércoles a Lunes: 12:00 PM - 12:00 AM",
    telefono: "(03541) 400-125",
    direccion: "Calle Los Andes 1825, Villa Carlos Paz",
    delivery: "Disponible",
  }
];

function Bares() {
  return (
    <body className='bares'>
      <header style={{ backgroundImage: `url(${bar1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/gastronomia">Gastronomia</Link> &gt; Bares </p>
        <h1>Bares de Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <section className="bares-container">
          {bares.map((bar) => (
            <div key={bar.nombre} className="bar-card">
              <img src={bar.imagen} alt={bar.nombre} />
              <h2>{bar.nombre}</h2>
              <p>{bar.descripcion}</p>
              <p><strong>Horario:</strong> {bar.horario}</p>
              <p><strong>Teléfono:</strong> {bar.telefono}</p>
              <p><strong>Dirección:</strong> {bar.direccion}</p>
              <p><strong>Delivery:</strong> {bar.delivery}</p>
            </div>
          ))}
        </section>

        <a className="barPubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="barPubli2">
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


export default Bares;