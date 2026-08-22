import { Link } from 'react-router-dom';
import './bares.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import bar1 from '../../assets/img/barCosta.jpg'

const bares = [
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
            <div key={bar.id} className="bar-card">
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