import {  Link } from 'react-router-dom';
import './actividades.css';

function Actividades() {
  const actividadesList = [
    'Senderismo y caminatas',
    'Paseos en kayak',
    'Tour por la ciudad',
    'Ciclovía y bicicletas',
  ];

  const experiencias = ['Ideal para familias', 'Ambiente natural', 'Opciones para todo el día', 'Actividades guiadas'];

  return (
    <section className="actividades-section">
      <header className="actividades-hero">
        <div className="actividades-hero__content">
          <p className="actividades-kicker">Turismo</p>
          <h1>Actividades</h1>
          <p>
            Descubrí opciones para disfrutar de la zona con planes divertidos, relajantes y llenos de naturaleza.
          </p>
          <button className="actividades-btn">Explorar actividades</button>
        </div>
      </header>

      <main className="actividades-content">
        <article className="actividades-card">
          <h2>Qué podés hacer</h2>
          <ul>
            {actividadesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="actividades-card">
          <h2>Experiencias destacadas</h2>
          <div className="actividades-grid">
            {experiencias.map((item) => (
              <div className="actividades-grid__item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </article>
      </main>
    </section>
  );
}

export default Actividades;