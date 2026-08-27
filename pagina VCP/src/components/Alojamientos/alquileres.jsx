import { Link } from 'react-router-dom';

import './alquileres.css';
import alqui1 from '../../assets/img/lagocentro.jpg';

export const alquileres = [
  {
    titulo: 'Casa en Barrio San Martín',
    descripcion: 'Casa amplia con patio, parrilla y tres habitaciones para grupos familiares.',
    direccion: 'Barrio San Martín, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $18,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Departamento céntrico',
    descripcion: 'Departamento cómodo y bien ubicado para estadías cortas o largas.',
    direccion: 'Avenida Libertad 1234, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Desde $15,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Cabaña en las Sierras',
    descripcion: 'Cabaña rústica con vista a las sierras, ideal para escapadas de fin de semana.',
    direccion: 'Camino a las Sierras 5678, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $20,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Casa en Barrio San Martín 2',
    descripcion: 'Casa amplia con patio, parrilla y tres habitaciones para grupos familiares.',
    direccion: 'Barrio San Martín, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $18,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Departamento céntrico',
    descripcion: 'Departamento cómodo y bien ubicado para estadías cortas o largas.',
    direccion: 'Avenida Libertad 1234, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Desde $15,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Cabaña en las Sierras',
    descripcion: 'Cabaña rústica con vista a las sierras, ideal para escapadas de fin de semana.',
    direccion: 'Camino a las Sierras 5678, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $20,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Casa en Barrio San Martín 3',
    descripcion: 'Casa amplia con patio, parrilla y tres habitaciones para grupos familiares.',
    direccion: 'Barrio San Martín, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $18,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Casa en Barrio San Martín',
    descripcion: 'Casa amplia con patio, parrilla y tres habitaciones para grupos familiares.',
    direccion: 'Barrio San Martín, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $18,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Departamento céntrico',
    descripcion: 'Departamento cómodo y bien ubicado para estadías cortas o largas.',
    direccion: 'Avenida Libertad 1234, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Desde $15,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Cabaña en las Sierras',
    descripcion: 'Cabaña rústica con vista a las sierras, ideal para escapadas de fin de semana.',
    direccion: 'Camino a las Sierras 5678, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $20,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Casa en Barrio San Martín',
    descripcion: 'Casa amplia con patio, parrilla y tres habitaciones para grupos familiares.',
    direccion: 'Barrio San Martín, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $18,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Departamento céntrico',
    descripcion: 'Departamento cómodo y bien ubicado para estadías cortas o largas.',
    direccion: 'Avenida Libertad 1234, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Desde $15,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Cabaña en las Sierras',
    descripcion: 'Cabaña rústica con vista a las sierras, ideal para escapadas de fin de semana.',
    direccion: 'Camino a las Sierras 5678, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $20,000 por noche',
    imagen: alqui1,
  },
  {
    titulo: 'Casa en Barrio San Martín',
    descripcion: 'Casa amplia con patio, parrilla y tres habitaciones para grupos familiares.',
    direccion: 'Barrio San Martín, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $18,000 por noche',
    imagen: alqui1,
  },
];

function Alquileres() {
  return (
    <div className='alquileres'>
      <header style={{ backgroundImage: `url(${alqui1})` }}>
        <p>
          <Link to="/inicio">inicio</Link> &gt; <Link to="/alojamientos">alojamiento</Link> &gt; alquileres
        </p>
        <h1>Alquileres</h1>
        <p>opciones temporarias para vacaciones o estadías largas</p>
      </header>

      <main>
        <h2>alquileres temporarios</h2>
        <section className="alquileres-grid">
          {alquileres.map((alquiler) => (
            <article className="alquiler-card" key={alquiler.titulo}>
              <img src={alquiler.imagen} alt={alquiler.titulo} />
              <h3>{alquiler.titulo}</h3>
              <p>{alquiler.descripcion}</p>
              <h4>dirección: {alquiler.direccion}</h4>
              <p>teléfono: {alquiler.telefono}</p>
              <h5>precio: {alquiler.precio}</h5>
            </article>
          ))}
        </section>

        <a className="alquiPubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <div className="alquiPubli2">
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

export default Alquileres;