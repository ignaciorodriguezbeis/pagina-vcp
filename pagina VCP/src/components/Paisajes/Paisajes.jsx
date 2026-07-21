import { useEffect, useState } from 'react';
import './Paisajes.css';

const paisajes = [
  {
    titulo: 'Lago San Roque',
    descripcion: 'Un rincón ideal para disfrutar la calma del lago y las sierras que abrazan a Villa Carlos Paz.',
    imagen: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85',
  },
  {
    titulo: 'Senderos serranos',
    descripcion: 'Caminos entre piedras y vegetación nativa para descubrir la naturaleza cordobesa a cada paso.',
    imagen: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
  },
  {
    titulo: 'Atardecer en las sierras',
    descripcion: 'La luz del final del día transforma el paisaje en una postal de tonos cálidos y tranquilos.',
    imagen: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85',
  },
  {
    titulo: 'Mirador natural',
    descripcion: 'Una vista panorámica para contemplar la inmensidad de las montañas y respirar aire puro.',
    imagen: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=85',
  },
  {
    titulo: 'Río de montaña',
    descripcion: 'El sonido del agua entre las rocas acompaña una pausa refrescante en plena naturaleza.',
    imagen: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1400&q=85',
  },
  {
    titulo: 'Horizonte cordobés',
    descripcion: 'Un paisaje abierto que invita a recorrer las sierras y guardar un recuerdo inolvidable.',
    imagen: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85',
  },
];

function Paisajes() {
  const [paisajeSeleccionado, setPaisajeSeleccionado] = useState(null);

  useEffect(() => {
    const cerrarConEscape = (evento) => {
      if (evento.key === 'Escape') setPaisajeSeleccionado(null);
    };

    window.addEventListener('keydown', cerrarConEscape);
    return () => window.removeEventListener('keydown', cerrarConEscape);
  }, []);

  return (
    <main className="paisajes">
      <header className="paisajes__encabezado">
        <p>Villa Carlos Paz</p>
        <h1>Paisajes para descubrir</h1>
        <span>Elegí una imagen para verla en grande y conocer su historia.</span>
      </header>

      <section className="paisajes__galeria" aria-label="Galería de paisajes">
        {paisajes.map((paisaje) => (
          <button
            className="paisajes__tarjeta"
            key={paisaje.titulo}
            onClick={() => setPaisajeSeleccionado(paisaje)}
            type="button"
          >
            <img src={paisaje.imagen} alt={paisaje.titulo} />
            <span>{paisaje.titulo}</span>
          </button>
        ))}
      </section>

      {paisajeSeleccionado && (
        <div className="paisajes__modal" onClick={() => setPaisajeSeleccionado(null)} role="presentation">
          <section className="paisajes__visor" role="dialog" aria-modal="true" aria-labelledby="titulo-paisaje" onClick={(evento) => evento.stopPropagation()}>
            <button className="paisajes__cerrar" type="button" onClick={() => setPaisajeSeleccionado(null)} aria-label="Cerrar imagen ampliada">×</button>
            <img src={paisajeSeleccionado.imagen} alt={paisajeSeleccionado.titulo} />
            <div className="paisajes__descripcion">
              <h2 id="titulo-paisaje">{paisajeSeleccionado.titulo}</h2>
              <p>{paisajeSeleccionado.descripcion}</p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Paisajes;
