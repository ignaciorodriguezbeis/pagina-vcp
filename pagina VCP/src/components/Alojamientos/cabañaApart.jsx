import { Form, Link } from 'react-router-dom';
import './cabañaApart.css';

function CabañaApart() {
  const servicios = ['Wi-Fi', 'Cocina equipada', 'Estacionamiento', 'Vista al paisaje'];
  const detalles = ['Capacidad para 4 personas', '2 habitaciones', 'Baño privado', 'Cerca del centro'];

  return (
    <section className="cabanas-section">
      <header className="cabanas-hero">
        <div className="cabanas-hero__content">
          <p className="cabanas-kicker">Alojamientos</p>
          <h1>Cabañas y Departamentos</h1>
          <p>
            Un lugar tranquilo para descansar, disfrutar del paisaje y recorrer la zona con comodidad.
          </p>
          <button className="cabanas-btn">Reservar ahora</button>
        </div>
      </header>

      <main className="cabanas-content">
        <article className="cabanas-card">
          <h2>Sobre el alojamiento</h2>
          <p>
            Este espacio combina confort, privacidad y una ubicación ideal para quienes buscan una estadía relajante.
          </p>
        </article>

        <article className="cabanas-card">
          <h2>Servicios incluidos</h2>
          <ul>
            {servicios.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="cabanas-card">
          <h2>Características principales</h2>
          <div className="cabanas-grid">
            {detalles.map((detalle) => (
              <div className="cabanas-grid__item" key={detalle}>
                {detalle}
              </div>
            ))}
          </div>
        </article>
      </main>
    </section>
  );
}

export default CabañaApart;