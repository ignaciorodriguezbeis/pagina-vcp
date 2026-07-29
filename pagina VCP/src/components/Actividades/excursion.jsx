import React from 'react';
import './excursion.css';

function Excursion() {
  return (
    <section className="excursion-section">
      <header className="excursion-hero">
        <div className="excursion-hero__content">
          <p className="excursion-kicker">Actividades</p>
          <h1>Excursiones</h1>
          <p>Descubrí recorridos y puntos de interés para disfrutar de la región.</p>
        </div>
      </header>

      <main className="excursion-content">
        <article className="excursion-card">
          <h2>Próximas salidas</h2>
          <p>Información de salidas guiadas, recorridos y visitas recomendadas.</p>
        </article>
      </main>
    </section>
  );
}

export default Excursion;