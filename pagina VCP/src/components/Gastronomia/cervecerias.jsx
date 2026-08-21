import { Link } from 'react-router-dom';
import './cervecerias.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import bear1 from '../../assets/img/bear.webp';

const cervecerias = [
  {
    id: 1,
    nombre: "Cervecería 1",
    descripcion: "Descripción de la cervecería 1",
    imagen: "ruta/a/la/imagen1.jpg",
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "123-456-7890",
    direccion: "Calle Principal 123, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 2,
    nombre: "Cervecería 2",
    descripcion: "Descripción de la cervecería 2",
    imagen: "ruta/a/la/imagen2.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "987-654-3210",
    direccion: "Avenida Secundaria 456, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 3,
    nombre: "Cervecería 3",
    descripcion: "Descripción de la cervecería 3",
    imagen: "ruta/a/la/imagen3.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "555-123-4567",
    direccion: "Plaza Central 789, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 4,
    nombre: "Cervecería 4",
    descripcion: "Descripción de la cervecería 4",
    imagen: "ruta/a/la/imagen4.jpg",
    horario: "Lunes a Domingo: 10:00 AM - 8:00 PM",
    telefono: "444-987-6543",
    direccion: "Calle del Sol 321, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 5,
    nombre: "Cervecería 5",
    descripcion: "Descripción de la cervecería 5",
    imagen: "ruta/a/la/imagen5.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "333-222-1111",
    direccion: "Avenida Principal 555, Villa Carlos Paz",
    delivery: "Disponible",
  },
];

function Cervecerias() {
  return (
    <body className='cervecerias'>
      <header style={{ backgroundImage: `url(${bear1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/gastronomia">Gastronomia</Link> &gt; Cervecerias </p>
        <h1>Cervecerias y panaderias en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <section className="cervecerias-list">
          {cervecerias.map((cerveceria) => (
            <div key={cerveceria.id} className="cerveceria-card">
              <img src={cerveceria.imagen} alt={cerveceria.nombre} />
              <h2>{cerveceria.nombre}</h2>
              <p>{cerveceria.descripcion}</p>
              <p><strong>Horario:</strong> {cerveceria.horario}</p>
              <p><strong>Teléfono:</strong> {cerveceria.telefono}</p>
              <p><strong>Dirección:</strong> {cerveceria.direccion}</p>
              <p><strong>Delivery:</strong> {cerveceria.delivery}</p>
            </div>
          ))}
        </section>

        <a className="beerPubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="beerPubli2" href="/publicidad">
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


export default Cervecerias;