import { Link } from 'react-router-dom';

import './cabañaApart.css';
import cabapr1 from '../../assets/img/cabañaeder.webp';

const cabañas = [
  {
    titulo: 'Cabaña Los Aromos',
    descripcion: 'Amplia cabaña con parilla, quincho y vista a las sierras para disfrutar en familia.',
    direccion: 'Villa del Lago, Villa Carlos Paz',
    telefono: '+54 3541 42-1111',
    precio: 'Desde $45,000 por noche',
    imagen: cabapr1,
  },
  {
    titulo: 'Apartamento Vista al Lago',
    descripcion: 'Departamento moderno con terraza, cocina equipada y excelente ubicación urbana.',
    direccion: 'Av. Costanera 2345, Villa Carlos Paz',
    telefono: '+54 3541 42-2222',
    precio: 'Desde $38,000 por noche',
    imagen: cabapr1,
  },
  {
    titulo: 'Cabaña El Bosque',
    descripcion: 'Ideal para escapadas de fin de semana con pileta, parrilla y ambiente tranquilo.',
    direccion: 'Camino del Sol, Villa Carlos Paz',
    telefono: '+54 3541 42-3333',
    precio: 'Desde $50,000 por noche',
    imagen: cabapr1,
  },
];

function CabañaApart() {
  return (
    <div className='cabañaApart'>
      <header style={{ backgroundImage: `url(${cabapr1})` }}>
        <p>
          <Link to="/inicio">inicio</Link> &gt; <Link to="/alojamientos">alojamiento</Link> &gt; cabañas y apartamentos
        </p>
        <h1>Cabañas y apartamentos</h1>
        <p>opciones ideales para relajarte en medio de la naturaleza</p>
      </header>

      <main>
        <h2>cabañas y apartamentos destacados</h2>
        <section className="cabaña-grid">
          {cabañas.map((cabaña) => (
            <article className="cabaña-card" key={cabaña.titulo}>
              <img src={cabaña.imagen} alt={cabaña.titulo} />
              <h3>{cabaña.titulo}</h3>
              <p>{cabaña.descripcion}</p>
              <h4>dirección: {cabaña.direccion}</h4>
              <p>teléfono: {cabaña.telefono}</p>
              <h5>precio: {cabaña.precio}</h5>
            </article>
          ))}
        </section>

        <a className="cabañaPubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <div className="cabañaPubli2">
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

export default CabañaApart;