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
  {
    titulo: 'Camping Costa del Lago',
    descripcion: 'Parcelas junto a la costa, con sombra, baños y sectores para disfrutar del aire libre.',
    direccion: 'Costanera del Lago, Villa Carlos Paz',
    telefono: '+54 3541 43-1001',
    precio: 'Desde $6,500 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Refugio del Tala',
    descripcion: 'Un espacio tranquilo entre árboles nativos, con mesas, fogones y duchas.',
    direccion: 'Camino al Tala, Villa Carlos Paz',
    telefono: '+54 3541 43-1002',
    precio: 'Desde $7,000 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Las Moras',
    descripcion: 'Predio familiar con parcelas amplias, parrillas y espacios verdes para descansar.',
    direccion: 'Av. de las Moras, Villa Carlos Paz',
    telefono: '+54 3541 43-1003',
    precio: 'Desde $7,300 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Senderos del Sol',
    descripcion: 'Ideal para combinar noches de camping con caminatas por la zona.',
    direccion: 'Camino de las Sierras, Villa Carlos Paz',
    telefono: '+54 3541 43-1004',
    precio: 'Desde $7,800 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Arroyo Claro',
    descripcion: 'Entorno natural con sectores de descanso, agua caliente y área de fogones.',
    direccion: 'Camino del Arroyo, Villa Carlos Paz',
    telefono: '+54 3541 43-1005',
    precio: 'Desde $8,000 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Las Sierras',
    descripcion: 'Parcelas rodeadas de paisaje serrano, con baños, duchas y mesas al aire libre.',
    direccion: 'Camino de las Sierras, Villa Carlos Paz',
    telefono: '+54 3541 43-1006',
    precio: 'Desde $7,600 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping El Algarrobal',
    descripcion: 'Sombra natural y espacios amplios para carpas, con parrillas compartidas.',
    direccion: 'Bajada del Algarrobo, Villa Carlos Paz',
    telefono: '+54 3541 43-1007',
    precio: 'Desde $6,900 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Horizonte Serrano',
    descripcion: 'Lugar apacible con vistas a las sierras y servicios para una estadía cómoda.',
    direccion: 'Av. Horizonte, Villa Carlos Paz',
    telefono: '+54 3541 43-1008',
    precio: 'Desde $8,200 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping La Ribera',
    descripcion: 'A pocos pasos del agua, ofrece parcelas, sanitarios y sectores para compartir.',
    direccion: 'Paseo de la Ribera, Villa Carlos Paz',
    telefono: '+54 3541 43-1009',
    precio: 'Desde $8,400 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Los Aromos',
    descripcion: 'Predio arbolado con mesas, parrillas y espacio para descansar en familia.',
    direccion: 'Calle Los Aromos, Villa Carlos Paz',
    telefono: '+54 3541 43-1010',
    precio: 'Desde $7,100 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Valle Verde',
    descripcion: 'Un rincón verde con parcelas delimitadas, duchas y zona de juegos al aire libre.',
    direccion: 'Camino del Valle, Villa Carlos Paz',
    telefono: '+54 3541 43-1011',
    precio: 'Desde $7,700 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Piedra del Sol',
    descripcion: 'Camping serrano con fogones, sanitarios y espacios para carpas y motorhomes.',
    direccion: 'Ruta de la Piedra, Villa Carlos Paz',
    telefono: '+54 3541 43-1012',
    precio: 'Desde $8,600 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping El Descanso',
    descripcion: 'Ambiente relajado, con sombra, mesas y servicios básicos para una escapada.',
    direccion: 'Calle El Descanso, Villa Carlos Paz',
    telefono: '+54 3541 43-1013',
    precio: 'Desde $6,800 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping Mirador del Lago',
    descripcion: 'Parcelas con vistas al lago y áreas comunes para disfrutar del paisaje.',
    direccion: 'Camino del Mirador, Villa Carlos Paz',
    telefono: '+54 3541 43-1014',
    precio: 'Desde $9,000 por persona',
    imagen: camp1,
  },
  {
    titulo: 'Camping La Quebrada',
    descripcion: 'Rodeado de naturaleza, cuenta con senderos cercanos, baños y parrillas.',
    direccion: 'Acceso a La Quebrada, Villa Carlos Paz',
    telefono: '+54 3541 43-1015',
    precio: 'Desde $7,900 por persona',
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