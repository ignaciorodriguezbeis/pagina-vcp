import { Link } from 'react-router-dom';

import './heladerias.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import helader1 from '../../assets/img/helado.jpg';

export const heladerias = [
  {
    id: 1,
    nombre: "Heladería 1",
    descripcion: "Descripción de la heladería 1",
    imagen: "ruta/a/la/imagen1.jpg",
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "123-456-7890",
    direccion: "Calle Principal 123, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 2,
    nombre: "Heladería 2",
    descripcion: "Descripción de la heladería 2",
    imagen: "ruta/a/la/imagen2.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "987-654-3210",
    direccion: "Avenida Secundaria 456, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 3,
    nombre: "Heladería 3",
    descripcion: "Descripción de la heladería 3",
    imagen: "ruta/a/la/imagen3.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "555-123-4567",
    direccion: "Plaza Central 789, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 4,
    nombre: "Heladería 4",
    descripcion: "Descripción de la heladería 4",
    imagen: "ruta/a/la/imagen4.jpg",
    horario: "Lunes a Domingo: 10:00 AM - 8:00 PM",
    telefono: "444-987-6543",
    direccion: "Calle del Sol 321, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 5,
    nombre: "Heladería 5",
    descripcion: "Descripción de la heladería 5",
    imagen: "ruta/a/la/imagen5.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "333-222-1111",
    direccion: "Avenida Principal 555, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 6,
    nombre: "Heladería 6",
    descripcion: "Ejemplo de heladería con sabores artesanales",
    imagen: helader1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 6, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 7,
    nombre: "Heladería 7",
    descripcion: "Ejemplo de heladería con opciones para toda la familia",
    imagen: helader1,
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 7, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 8,
    nombre: "Heladería 8",
    descripcion: "Ejemplo de heladería con postres y helados",
    imagen: helader1,
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 8, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 9,
    nombre: "Heladería 9",
    descripcion: "Ejemplo de heladería con sabores clásicos",
    imagen: helader1,
    horario: "Lunes a Domingo: 10:00 AM - 8:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 9, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 10,
    nombre: "Heladería 10",
    descripcion: "Ejemplo de heladería con sabores frutales",
    imagen: helader1,
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 10, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 11,
    nombre: "Heladería 11",
    descripcion: "Ejemplo de heladería con cucuruchos y copas",
    imagen: helader1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 11, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 12,
    nombre: "Heladería 12",
    descripcion: "Ejemplo de heladería con alternativas sin azúcar",
    imagen: helader1,
    horario: "Lunes a Domingo: 11:00 AM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 12, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 13,
    nombre: "Heladería 13",
    descripcion: "Ejemplo de heladería con sabores de chocolate",
    imagen: helader1,
    horario: "Lunes a Domingo: 12:00 PM - 11:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 13, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 14,
    nombre: "Heladería 14",
    descripcion: "Ejemplo de heladería con opciones para llevar",
    imagen: helader1,
    horario: "Lunes a Domingo: 1:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 14, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 15,
    nombre: "Heladería 15",
    descripcion: "Ejemplo de heladería con sabores regionales",
    imagen: helader1,
    horario: "Lunes a Domingo: 10:00 AM - 9:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 15, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 16,
    nombre: "Heladería 16",
    descripcion: "Ejemplo de heladería con opciones de temporada",
    imagen: helader1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 16, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 17,
    nombre: "Heladería 17",
    descripcion: "Ejemplo de heladería con batidos y milkshakes",
    imagen: helader1,
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 17, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 18,
    nombre: "Heladería 18",
    descripcion: "Ejemplo de heladería con postres helados",
    imagen: helader1,
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 18, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 19,
    nombre: "Heladería 19",
    descripcion: "Ejemplo de heladería con sabores tradicionales",
    imagen: helader1,
    horario: "Lunes a Domingo: 10:00 AM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 19, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 20,
    nombre: "Heladería 20",
    descripcion: "Ejemplo de heladería con cucuruchos artesanales",
    imagen: helader1,
    horario: "Lunes a Domingo: 12:00 PM - 11:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 20, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 21,
    nombre: "Heladería 21",
    descripcion: "Ejemplo de heladería con opciones veganas",
    imagen: helader1,
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 21, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 22,
    nombre: "Heladería 22",
    descripcion: "Ejemplo de heladería con sabores de fruta",
    imagen: helader1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 22, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 23,
    nombre: "Heladería 23",
    descripcion: "Ejemplo de heladería con tortas y postres",
    imagen: helader1,
    horario: "Lunes a Domingo: 1:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 23, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 24,
    nombre: "Heladería 24",
    descripcion: "Ejemplo de heladería con sabores cremosos",
    imagen: helader1,
    horario: "Lunes a Domingo: 10:00 AM - 11:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 24, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 25,
    nombre: "Heladería 25",
    descripcion: "Ejemplo de heladería con propuestas para compartir",
    imagen: helader1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 25, Villa Carlos Paz",
    delivery: "Disponible",
  },
];

function Heladerias() {
  return (
    <body className='heladerias'>
      <header style={{ backgroundImage: `url(${helader1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/gastronomia">Gastronomia</Link> &gt; heladerias </p>
        <h1>Heladerias en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <section className="heladerias-list">
          {heladerias.map((heladeria) => (
            <div key={heladeria.id} className="heladeria-card">
              <img src={heladeria.imagen} alt={heladeria.nombre} />
              <h2>{heladeria.nombre}</h2>
              <p>{heladeria.descripcion}</p>
              <p><strong>Horario:</strong> {heladeria.horario}</p>
              <p><strong>Teléfono:</strong> {heladeria.telefono}</p>
              <p><strong>Dirección:</strong> {heladeria.direccion}</p>
              <p><strong>Delivery:</strong> {heladeria.delivery}</p>
            </div>
          ))}
        </section>

        <a className="heladeriaPubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="heladeriaPubli2">
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




export default Heladerias;