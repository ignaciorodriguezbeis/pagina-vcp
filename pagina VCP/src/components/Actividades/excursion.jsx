import { Link } from 'react-router-dom';
import './excursion.css';

import excur1 from '../../assets/img/embudo.png'

export const excursiones = [
  {
    titulo: 'Aerosilla al Cerro de la Cruz',
    descripcion: 'Ascenso panorámico con la mejor vista del lago y la ciudad. Apto todo público.',
    direccion: 'Cerro de la Cruz, Villa Carlos Paz',
    telefono: '+54 3541 42-1111',
    precio: 'Entradas desde $9.500',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 6:00 PM',
  },
  {
    titulo: 'Paseo en Catamarán por el Lago',
    descripcion: 'Recorrido guiado de 1 hora por el lago San Roque con salidas cada 45 minutos.',
    direccion: 'Puerto de Villa Carlos Paz',
    telefono: '+54 3541 42-2222',
    precio: 'Desde $8.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 10:00 AM - 5:00 PM',
  },
  {
    titulo: 'Parque Temático de Aventura',
    descripcion: 'Diversión para toda la familia con tirolesas, puentes colgantes y actividades al aire libre.',
    direccion: 'Ruta 14, Villa Carlos Paz',
    telefono: '+54 3541 42-3333',
    precio: 'Entradas desde $7.500',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 7:00 PM',
  },
  {
    titulo: 'Tour en Bicicleta por el Centro Histórico',
    descripcion: 'Recorrido guiado en bicicleta por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-4444',
    precio: 'Desde $6.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Visita Guiada al Parque Nacional',
    descripcion: 'Recorrido informativo por las principales zonas del parque nacional con guía especializado.',
    direccion: 'Parque Nacional, Villa Carlos Paz',
    telefono: '+54 3541 42-5555',
    precio: 'Desde $5.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 5:00 PM',
  },
  {
    titulo: 'Tour en Motos por el Centro Histórico',
    descripcion: 'Recorrido guiado en motos por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $8.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 4:00 PM',
  },
  {
    titulo: 'Tour en Patineta por el Centro Histórico',
    descripcion: 'Recorrido guiado en patineta por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Desde $6.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Tour en Skate por el Centro Histórico',
    descripcion: 'Recorrido guiado en skate por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $6.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Tour en Ruta por el Centro Histórico',
    descripcion: 'Recorrido guiado en ruta por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-9999',
    precio: 'Desde $5.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 4:00 PM',
  },
  {
    titulo: 'Tour en Bicicleta por el Centro Histórico',
    descripcion: 'Recorrido guiado en bicicleta por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-0000',
    precio: 'Desde $5.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
];

function Excursion() {
  return (
    <body className='excursion'>
      <header style={{ backgroundImage: `url(${excur1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; Excursion </p>
        <h1>Excursion en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <h2>Excursiones</h2>
        <section className="excursion-grid">
          {excursiones.map((excursion) => (
            <article className="excursion-card" key={excursion.titulo}>
              <img src={excursion.imagen} alt={excursion.titulo} />
              <h3>{excursion.titulo}</h3>
              <p>{excursion.descripcion}</p>
              <p>horarios: {excursion.horarios}</p>
              <h4>dirección: {excursion.direccion}</h4>
              <p>teléfono: {excursion.telefono}</p>
              <h5>precio: {excursion.precio}</h5>
            </article>
          ))}
        </section>

        <a className="excurPubli1" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="excurPubli2" to="/publicidad">
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

export default Excursion;