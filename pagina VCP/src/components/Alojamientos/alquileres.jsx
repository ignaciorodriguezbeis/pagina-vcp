import React from 'react';

import './alquileres.css';

function Alquileres() {
  return (
    <section className="alquileres-section">
      <header className="alquileres-hero">
        <div className="alquileres-hero__content">
          <p className="alquileres-kicker">Alojamientos</p>
          <h1>Alquileres temporarios</h1>
          <p>
            Espacios ideales para estadías cortas, familiares o de trabajo con comodidad y flexibilidad.
          </p>
        </div>
      </header>

      <main className="alquileres-content">
        <article className="alquileres-card">
          <h2>¿Qué incluye?</h2>
          <p>Habitaciones cómodas, ubicación práctica y opciones para diferentes necesidades.</p>
        </article>
      </main>
    </section>
  );
}

export default Alquileres;