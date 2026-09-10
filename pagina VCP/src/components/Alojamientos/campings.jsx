import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './campings.css';
import camp1 from '../../assets/img/camping.webp';

export const campings = [
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
  {
    titulo: 'Camping La Estancia',
    descripcion: 'Ubicado en un entorno natural, ofrece actividades recreativas y servicios de camping completos.',
    direccion: 'Ruta 38, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $8,000 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping El Bosque',
    descripcion: 'Ideal para familias, con áreas de juegos, senderos y acceso a la naturaleza.',
    direccion: 'Camino del Bosque, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Desde $7,200 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping La Cumbre',
    descripcion: 'Ofrece vistas panorámicas y servicios de camping de alta calidad en un entorno tranquilo.',
    direccion: 'Calle de la Cumbre, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $8,500 por persona',
    imagen: camp1,
  },
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
  {
    titulo: 'Camping La Estancia',
    descripcion: 'Ubicado en un entorno natural, ofrece actividades recreativas y servicios de camping completos.',
    direccion: 'Ruta 38, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $8,000 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping El Bosque',
    descripcion: 'Ideal para familias, con áreas de juegos, senderos y acceso a la naturaleza.',
    direccion: 'Camino del Bosque, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Desde $7,200 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping La Cumbre',
    descripcion: 'Ofrece vistas panorámicas y servicios de camping de alta calidad en un entorno tranquilo.',
    direccion: 'Calle de la Cumbre, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $8,500 por persona',
    imagen: camp1,
  },

];

function Campings() {
  const [campingSeleccionado, setCampingSeleccionado] = useState(null);

  useEffect(() => {
    const cerrarConEscape = (event) => {
      if (event.key === 'Escape') {
        setCampingSeleccionado(null);
      }
    };

    document.addEventListener('keydown', cerrarConEscape);
    return () => document.removeEventListener('keydown', cerrarConEscape);
  }, []);

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
          {campings.map((camping, index) => (
            <article
              className="camping-card"
              key={`${camping.titulo}-${index}`}
              role="button"
              tabIndex="0"
              onClick={() => setCampingSeleccionado(camping)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setCampingSeleccionado(camping);
                }
              }}
            >
              <img src={camping.imagen} alt={camping.titulo} />
              <h3>{camping.titulo}</h3>
              <p>{camping.descripcion}</p>
              <h4>dirección: {camping.direccion}</h4>
              <p>teléfono: {camping.telefono}</p>
              <h5>precio: {camping.precio}</h5>
            </article>
          ))}
        </section>

        {campingSeleccionado && (
          <div className="camping-modal" role="presentation" onClick={() => setCampingSeleccionado(null)}>
            <section
              className="camping-modal__content"
              role="dialog"
              aria-modal="true"
              aria-labelledby="camping-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="camping-modal__close"
                onClick={() => setCampingSeleccionado(null)}
                aria-label="Cerrar información"
              >
                &times;
              </button>
              <img src={campingSeleccionado.imagen} alt={campingSeleccionado.titulo} />
              <div className="camping-modal__details">
                <h2 id="camping-modal-title">{campingSeleccionado.titulo}</h2>
                <p>{campingSeleccionado.descripcion}</p>
                <p><strong>Dirección:</strong> {campingSeleccionado.direccion}</p>
                <p><strong>Teléfono:</strong> {campingSeleccionado.telefono}</p>
                <p className="camping-modal__price"><strong>Precio:</strong> {campingSeleccionado.precio}</p>
              </div>
            </section>
          </div>
        )}

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