import React from 'react';
import './restaurantes.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import rest1 from '../../assets/img/restaurante.webp'

const restaurantes = [
  {
    id: 1,
    nombre: "Restaurante 1",
    descripcion: "Descripción del restaurante 1",
    imagen: "ruta/a/la/imagen1.jpg",
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "123-456-7890",
    direccion: "Calle Principal 123, Villa Carlos Paz",
  },
  {
    id: 2,
    nombre: "Restaurante 2",
    descripcion: "Descripción del restaurante 2",
    imagen: "ruta/a/la/imagen2.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "987-654-3210",
    direccion: "Avenida Secundaria 456, Villa Carlos Paz",
  },
  {
    id: 3,
    nombre: "Restaurante 3",
    descripcion: "Descripción del restaurante 3",
    imagen: "ruta/a/la/imagen3.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "555-123-4567",
    direccion: "Plaza Central 789, Villa Carlos Paz",

  }
];

function Restaurantes() {
  return (
    <body className='restaurantes'>
      <header style={{ backgroundImage: `url(${rest1})` }}>
        <p><a href="/inicio">Inicio</a> &gt; <a href="gastronomia">Gastronomia</a> &gt; Restaurantes </p>
        <h1>Restaurantes Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <h1>Restaurantes</h1>
        <section className="restaurantes-container">
          {restaurantes.map((restaurante) => (
            <div key={restaurante.id} className="restaurante-card">
              <img src={restaurante.imagen} alt={restaurante.nombre} />
              <h2>{restaurante.nombre}</h2>
              <p>{restaurante.descripcion}</p>
              <p><strong>Horario:</strong> {restaurante.horario}</p>
              <p><strong>Teléfono:</strong> {restaurante.telefono}</p>
              <p><strong>Dirección:</strong> {restaurante.direccion}</p>
            </div>
          ))}
        </section>

        <a className="cabañaPubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="cabañaPubli2">
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

export default Restaurantes;