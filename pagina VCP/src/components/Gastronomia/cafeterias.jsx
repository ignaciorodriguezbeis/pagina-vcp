import { Link } from 'react-router-dom';
import './cafeterias.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import cafe1 from '../../assets/img/cafePan.jpg';

export const cafeterias = [
  {
    id: 1,
    nombre: "Cafetería 1",
    descripcion: "Descripción de la cafetería 1",
    imagen: "ruta/a/la/imagen1.jpg",
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "123-456-7890",
    direccion: "Calle Principal 123, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 2,
    nombre: "Cafetería 2",
    descripcion: "Descripción de la cafetería 2",
    imagen: "ruta/a/la/imagen2.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "987-654-3210",
    direccion: "Avenida Secundaria 456, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 3,
    nombre: "Cafetería 3",
    descripcion: "Descripción de la cafetería 3",
    imagen: "ruta/a/la/imagen3.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "555-123-4567",
    direccion: "Plaza Central 789, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 4,
    nombre: "Cafetería 4",
    descripcion: "Descripción de la cafetería 4",
    imagen: "ruta/a/la/imagen4.jpg",
    horario: "Lunes a Domingo: 10:00 AM - 8:00 PM",
    telefono: "444-987-6543",
    direccion: "Calle del Sol 321, Villa Carlos Paz",
    delivery: "No disponible",
  }
];

function Cafeterias() {
  return (
    <body className='cafeterias'>
      <header style={{ backgroundImage: `url(${cafe1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/gastronomia">Gastronomia</Link> &gt; Cafeterias </p>
        <h1>Cafeterias y panaderias en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <section className="cafeterias-list">
          {cafeterias.map((cafeteria) => (
            <div key={cafeteria.id} className="cafeteria-card">
              <img src={cafeteria.imagen} alt={cafeteria.nombre} />
              <h2>{cafeteria.nombre}</h2>
              <p>{cafeteria.descripcion}</p>
              <p><strong>Horario:</strong> {cafeteria.horario}</p>
              <p><strong>Teléfono:</strong> {cafeteria.telefono}</p>
              <p><strong>Dirección:</strong> {cafeteria.direccion}</p>
              <p><strong>Delivery:</strong> {cafeteria.delivery}</p>
            </div>
          ))}
        </section>

        <a className="cafePubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="cafePubli2">
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



export default Cafeterias; 