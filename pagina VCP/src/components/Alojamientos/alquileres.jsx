import React from 'react';

import './alquileres.css';

import Inicio from '../Inicio/Inicio';
import Alojamiento from './alojamiento';

import alqui1 from '../../assets/img/lagocentro.jpg';

function Alquileres() {
  return (
    <body className='alquileres'>
      <header style={{ backgroundImage: `url(${alqui1})` }}>
        <p><a href="/inicio">inicio</a> &gt; <a href="/alojamiento">alojamiento</a> &gt; alquileres</p>
        <h1>alquileres</h1>
        <p>opciones temporarias para vacaciones o estadías largas</p>
      </header>

      <main>
        <h2>alquileres temporarios</h2>
        <section>
          <div>
            <h3>Casa en Barrio San Martín</h3>
            <p>Casa amplia con patio, parrilla y tres habitaciones para grupos familiares.</p>
            <h4>dirección: Barrio San Martín, Villa Carlos Paz</h4>
            <p>teléfono: +54 3541 42-6666</p>
            <h5>precio: Desde $18,000 por noche</h5>
            <img src={alqui1} alt="Casa en Barrio San Martín" />
          </div>

          <div>
            <h3>Departamento céntrico</h3>
            <p>Departamento cómodo y bien ubicado para estadías cortas o largas.</p>
            <h4>dirección: Avenida Libertad 1234, Villa Carlos Paz</h4>
            <p>teléfono: +54 3541 42-7777</p>
            <h5>precio: Desde $15,000 por noche</h5>
            <img src={alqui1} alt="Departamento céntrico" />
          </div>
        </section>

        <a className="alquiPubli1" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="alquiPubli2" to="/publicidad">
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
        </a>
      </main>
    </body>
  );
}

export default Alquileres;