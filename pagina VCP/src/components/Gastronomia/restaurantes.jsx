import { Link } from 'react-router-dom';
import './restaurantes.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import rest1 from '../../assets/img/restaurante.webp'

export const restaurantes = [
  {
    id: 1,
    nombre: "Restaurante 1",
    descripcion: "Descripción del restaurante 1",
    imagen: "ruta/a/la/imagen1.jpg",
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "123-456-7890",
    direccion: "Calle Principal 123, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 2,
    nombre: "Restaurante 2",
    descripcion: "Descripción del restaurante 2",
    imagen: "ruta/a/la/imagen2.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "987-654-3210",
    direccion: "Avenida Secundaria 456, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 3,
    nombre: "Restaurante 3",
    descripcion: "Descripción del restaurante 3",
    imagen: "ruta/a/la/imagen3.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "555-123-4567",
    direccion: "Plaza Central 789, Villa Carlos Paz",
    delivery: "Disponible",

  },
  {
    id: 4,
    nombre: "Restaurante 4",
    descripcion: "Descripción del restaurante 4",
    imagen: "ruta/a/la/imagen4.jpg",
    horario: "Lunes a Domingo: 10:00 AM - 8:00 PM",
    telefono: "444-987-6543",
    direccion: "Calle del Sol 321, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 5,
    nombre: "Restaurante 5",
    descripcion: "Descripción del restaurante 5",
    imagen: "ruta/a/la/imagen5.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "333-222-1111",
    direccion: "Avenida Principal 555, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 6,
    nombre: "Restaurante 6",
    descripcion: "Descripción del restaurante 6",
    imagen: "ruta/a/la/imagen6.jpg",
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "222-333-4444",
    direccion: "Calle Secundaria 666, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 7,
    nombre: "Restaurante 7",
    descripcion: "Descripción del restaurante 7",
    imagen: "ruta/a/la/imagen7.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "111-222-3333",
    direccion: "Plaza del Sol 777, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 8,
    nombre: "Restaurante 8",
    descripcion: "Descripción del restaurante 8",
    imagen: "ruta/a/la/imagen7.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "111-222-3333",
    direccion: "Plaza del Sol 1232, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 9,
    nombre: "Restaurante 9",
    descripcion: "Ejemplo de restaurante con platos caseros",
    imagen: rest1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 9, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 10,
    nombre: "Restaurante 10",
    descripcion: "Ejemplo de restaurante con cocina regional",
    imagen: rest1,
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 10, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 11,
    nombre: "Restaurante 11",
    descripcion: "Ejemplo de restaurante con opciones vegetarianas",
    imagen: rest1,
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 11, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 12,
    nombre: "Restaurante 12",
    descripcion: "Ejemplo de restaurante especializado en pastas",
    imagen: rest1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 12, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 13,
    nombre: "Restaurante 13",
    descripcion: "Ejemplo de restaurante con menú familiar",
    imagen: rest1,
    horario: "Lunes a Domingo: 10:00 AM - 9:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 13, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 14,
    nombre: "Restaurante 14",
    descripcion: "Ejemplo de restaurante con carnes a la parrilla",
    imagen: rest1,
    horario: "Lunes a Domingo: 12:00 PM - 11:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 14, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 15,
    nombre: "Restaurante 15",
    descripcion: "Ejemplo de restaurante con platos vegetarianos",
    imagen: rest1,
    horario: "Lunes a Domingo: 11:00 AM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 15, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 16,
    nombre: "Restaurante 16",
    descripcion: "Ejemplo de restaurante con menú del día",
    imagen: rest1,
    horario: "Lunes a Domingo: 12:00 PM - 9:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 16, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 17,
    nombre: "Restaurante 17",
    descripcion: "Ejemplo de restaurante de cocina internacional",
    imagen: rest1,
    horario: "Lunes a Domingo: 1:00 PM - 11:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 17, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 18,
    nombre: "Restaurante 18",
    descripcion: "Ejemplo de restaurante con platos para compartir",
    imagen: rest1,
    horario: "Lunes a Domingo: 11:00 AM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 18, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 19,
    nombre: "Restaurante 19",
    descripcion: "Ejemplo de restaurante con cocina mediterránea",
    imagen: rest1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 19, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 20,
    nombre: "Restaurante 20",
    descripcion: "Ejemplo de restaurante con menú infantil",
    imagen: rest1,
    horario: "Lunes a Domingo: 10:00 AM - 8:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 20, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 21,
    nombre: "Restaurante 21",
    descripcion: "Ejemplo de restaurante con comida al horno",
    imagen: rest1,
    horario: "Lunes a Domingo: 12:00 PM - 11:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 21, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 22,
    nombre: "Restaurante 22",
    descripcion: "Ejemplo de restaurante con opciones sin gluten",
    imagen: rest1,
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 22, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 23,
    nombre: "Restaurante 23",
    descripcion: "Ejemplo de restaurante con sabores tradicionales",
    imagen: rest1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 23, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 24,
    nombre: "Restaurante 24",
    descripcion: "Ejemplo de restaurante con platos de temporada",
    imagen: rest1,
    horario: "Lunes a Domingo: 1:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 24, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 25,
    nombre: "Restaurante 25",
    descripcion: "Ejemplo de restaurante con menú para compartir",
    imagen: rest1,
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "000-000-0000",
    direccion: "Calle de Ejemplo 25, Villa Carlos Paz",
    delivery: "No disponible",
  },
];

function Restaurantes() {
  return (
    <body className='restaurantes'>
      <header style={{ backgroundImage: `url(${rest1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/gastronomia">Gastronomia</Link> &gt; Restaurantes </p>
        <h1>Restaurantes Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <h1>Restaurantes</h1>
        <section className="restaurantes-container">
          {restaurantes.map((restaurante) => (
            <div key={restaurante.id} className="restaurante-card">
              <img src={restaurante.imagen} alt={restaurante.nombre} />
              <h2>{restaurante.nombre}</h2>
              <p>{restaurante.descripcion}</p>
              <p><strong>Horario:</strong> {restaurante.horario}</p>
              <p><strong>Teléfono:</strong> {restaurante.telefono}</p>
              <p><strong>Dirección:</strong> {restaurante.direccion}</p>
              <p><strong>Delivery:</strong> {restaurante.delivery}</p>
            </div>
          ))}
        </section>

        <a className="restaurantePubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="restaurantePubli2">
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

export default Restaurantes;