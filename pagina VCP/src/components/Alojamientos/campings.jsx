import { Form, Link } from 'react-router-dom';
import './campings.css';

function Campings() {
  const servicios = ['Parqueo para vehículos', 'Baños y duchas', 'Áreas verdes', 'Acceso a fogones'];
  const detalles = ['Ideal para familias', 'Espacios amplios', 'Cerca de la naturaleza', 'Ambiente tranquilo'];

  return (
    <section className="campings-section">
      <header className="campings-hero">
        <div className="campings-hero__content">
          <p className="campings-kicker">Alojamientos</p>
          <h1>Campings</h1>
          <p>
            Una opción ideal para quienes quieren disfrutar de la naturaleza con comodidad y espacio.
          </p>
          <button className="campings-btn">Consultar disponibilidad</button>
        </div>
      </header>

      <main className="campings-content">
        <article className="campings-card">
          <h2>Sobre el camping</h2>
          <p>
            El camping ofrece un ambiente relajado y familiar, perfecto para pasar días de descanso en contacto con la naturaleza.
          </p>
        </article>

        <article className="campings-card">
          <h2>Servicios disponibles</h2>
          <ul>
            {servicios.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="campings-card">
          <h2>Características principales</h2>
          <div className="campings-grid">
            {detalles.map((detalle) => (
              <div className="campings-grid__item" key={detalle}>
                {detalle}
              </div>
            ))}
          </div>
        </article>
      </main>
    </section>
  );
}

export default Campings;