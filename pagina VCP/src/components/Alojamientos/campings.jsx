import { Link } from 'react-router-dom';

import './campings.css';
import camp1 from '../../assets/img/camping.webp';

const campings = [
  {
    titulo: 'Camping Municipal San Roque',
    descripcion: 'Excelente ubicación junto al lago con servicios básicos, duchas y acceso a la costa.',
    direccion: 'Av. del Lago, Villa Carlos Paz',
    telefono: '+54 3541 42-4444',
    precio: 'Desde $6,000 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Los Pinos',
    descripcion: 'Espacios amplios para carpas y casas rodantes con sombra y parrilla compartida.',
    direccion: 'Camino de los Pinos, Villa Carlos Paz',
    telefono: '+54 3541 42-5555',
    precio: 'Desde $7,500 por persona',
    imagen: camp1,
  },
];

function Campings() {
  return (
    <div className='campings'>
      <header style={{ backgroundImage: `url(${camp1})` }}>
        <p>
          <Link to="/inicio">inicio</Link> &gt; <Link to="/alojamientos">alojamiento</Link> &gt; campings
        </p>
        <h1>Campings</h1>
        <p>todos los campings de Villa Carlos Paz</p>
      </header>

      <main>
        <h2>campings recomendados</h2>
        <section className="campings-grid">
          {campings.map((camping) => (
            <article className="camping-card" key={camping.titulo}>
              <img src={camping.imagen} alt={camping.titulo} />
              <h3>{camping.titulo}</h3>
              <p>{camping.descripcion}</p>
              <h4>dirección: {camping.direccion}</h4>
              <p>teléfono: {camping.telefono}</p>
              <h5>precio: {camping.precio}</h5>
            </article>
          ))}
        </section>

        <a className="campPubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <div className="campPubli2">
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
      </main>
    </div>
  );
}

export default Campings;