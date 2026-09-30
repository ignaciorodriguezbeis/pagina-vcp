import { Link } from 'react-router-dom';
import './cafeterias.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import cafe1 from '../../assets/img/cafePan.jpg';

export const cafeterias = [
  {
    id: 1,
    nombre: "Cafetería 1",
    descripcion: "Descripción de la cafetería 1",
    imagen: "ruta/a/la/imagen1.jpg",
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "123-456-7890",
    direccion: "Calle Principal 123, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 2,
    nombre: "Cafetería 2",
    descripcion: "Descripción de la cafetería 2",
    imagen: "ruta/a/la/imagen2.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "987-654-3210",
    direccion: "Avenida Secundaria 456, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 3,
    nombre: "Cafetería 3",
    descripcion: "Descripción de la cafetería 3",
    imagen: "ruta/a/la/imagen3.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "555-123-4567",
    direccion: "Plaza Central 789, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 4,
    nombre: "Cafetería 4",
    descripcion: "Descripción de la cafetería 4",
    imagen: "ruta/a/la/imagen4.jpg",
    horario: "Lunes a Domingo: 10:00 AM - 8:00 PM",
    telefono: "444-987-6543",
    direccion: "Calle del Sol 321, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 5,
    nombre: "Cafetería 5",
    descripcion: "Café recién preparado y opciones dulces para acompañar.",
    imagen: cafe1,
    horario: "Lunes a Domingo: 8:00 AM - 8:00 PM",
    telefono: "(03541) 400-205",
    direccion: "Avenida San Martín 205, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 6,
    nombre: "Cafetería 6",
    descripcion: "Panadería artesanal con desayunos y meriendas.",
    imagen: cafe1,
    horario: "Lunes a Sábado: 7:00 AM - 7:00 PM",
    telefono: "(03541) 400-206",
    direccion: "Calle 9 de Julio 306, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 7,
    nombre: "Cafetería 7",
    descripcion: "Un espacio tranquilo para disfrutar café y pastelería.",
    imagen: cafe1,
    horario: "Martes a Domingo: 9:00 AM - 9:00 PM",
    telefono: "(03541) 400-207",
    direccion: "Avenida Uruguay 407, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 8,
    nombre: "Cafetería 8",
    descripcion: "Especialidades de café y productos de panificación.",
    imagen: cafe1,
    horario: "Lunes a Domingo: 7:30 AM - 8:30 PM",
    telefono: "(03541) 400-208",
    direccion: "Calle Las Heras 508, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 9,
    nombre: "Cafetería 9",
    descripcion: "Desayunos, meriendas y algo rico para llevar.",
    imagen: cafe1,
    horario: "Lunes a Sábado: 8:00 AM - 7:00 PM",
    telefono: "(03541) 400-209",
    direccion: "Avenida Cárcano 609, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 10,
    nombre: "Cafetería 10",
    descripcion: "Cafetería familiar con tortas y bebidas calientes.",
    imagen: cafe1,
    horario: "Lunes a Domingo: 9:00 AM - 10:00 PM",
    telefono: "(03541) 400-210",
    direccion: "Calle Libertad 710, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 11,
    nombre: "Cafetería 11",
    descripcion: "Pan recién horneado y una carta variada de cafetería.",
    imagen: cafe1,
    horario: "Lunes a Domingo: 7:00 AM - 8:00 PM",
    telefono: "(03541) 400-211",
    direccion: "Avenida General Paz 811, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 12,
    nombre: "Cafetería 12",
    descripcion: "Un rincón acogedor para una pausa con café y algo dulce.",
    imagen: cafe1,
    horario: "Miércoles a Lunes: 8:00 AM - 9:00 PM",
    telefono: "(03541) 400-212",
    direccion: "Calle Alberdi 912, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 13,
    nombre: "Cafetería 13",
    descripcion: "Opciones de desayuno y pastelería para compartir.",
    imagen: cafe1,
    horario: "Lunes a Sábado: 7:30 AM - 6:30 PM",
    telefono: "(03541) 400-213",
    direccion: "Avenida Libertad 1013, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 14,
    nombre: "Cafetería 14",
    descripcion: "Café, licuados y productos de panadería artesanal.",
    imagen: cafe1,
    horario: "Martes a Domingo: 8:00 AM - 8:00 PM",
    telefono: "(03541) 400-214",
    direccion: "Calle Moreno 1114, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 15,
    nombre: "Cafetería 15",
    descripcion: "Meriendas caseras en un ambiente relajado.",
    imagen: cafe1,
    horario: "Lunes a Domingo: 9:00 AM - 9:00 PM",
    telefono: "(03541) 400-215",
    direccion: "Avenida San Martín 1215, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 16,
    nombre: "Cafetería 16",
    descripcion: "Variedad de cafés y alternativas para desayunar.",
    imagen: cafe1,
    horario: "Lunes a Sábado: 7:00 AM - 8:00 PM",
    telefono: "(03541) 400-216",
    direccion: "Calle Sarmiento 1316, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 17,
    nombre: "Cafetería 17",
    descripcion: "Pastelería, infusiones y opciones para llevar.",
    imagen: cafe1,
    horario: "Lunes a Domingo: 8:00 AM - 8:30 PM",
    telefono: "(03541) 400-217",
    direccion: "Avenida Uruguay 1417, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 18,
    nombre: "Cafetería 18",
    descripcion: "Un lugar cómodo para reunirse con café y algo rico.",
    imagen: cafe1,
    horario: "Miércoles a Lunes: 9:00 AM - 10:00 PM",
    telefono: "(03541) 400-218",
    direccion: "Calle Belgrano 1518, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 19,
    nombre: "Cafetería 19",
    descripcion: "Panadería y cafetería con productos para toda la familia.",
    imagen: cafe1,
    horario: "Lunes a Sábado: 7:00 AM - 7:00 PM",
    telefono: "(03541) 400-219",
    direccion: "Avenida Cárcano 1619, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 20,
    nombre: "Cafetería 20",
    descripcion: "Desayunos completos y una selección de cosas dulces.",
    imagen: cafe1,
    horario: "Lunes a Domingo: 8:00 AM - 9:00 PM",
    telefono: "(03541) 400-220",
    direccion: "Calle José Hernández 1720, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 21,
    nombre: "Cafetería 21",
    descripcion: "Café de especialidad y pastelería para la merienda.",
    imagen: cafe1,
    horario: "Martes a Domingo: 9:00 AM - 8:00 PM",
    telefono: "(03541) 400-221",
    direccion: "Avenida General Paz 1821, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 22,
    nombre: "Cafetería 22",
    descripcion: "Una propuesta sencilla de cafetería y panificados.",
    imagen: cafe1,
    horario: "Lunes a Sábado: 7:30 AM - 7:30 PM",
    telefono: "(03541) 400-222",
    direccion: "Calle Los Andes 1922, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 23,
    nombre: "Cafetería 23",
    descripcion: "Meriendas, café y opciones saladas para compartir.",
    imagen: cafe1,
    horario: "Lunes a Domingo: 8:00 AM - 10:00 PM",
    telefono: "(03541) 400-223",
    direccion: "Calle 9 de Julio 2023, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 24,
    nombre: "Cafetería 24",
    descripcion: "Panificados frescos y bebidas para disfrutar a toda hora.",
    imagen: cafe1,
    horario: "Lunes a Domingo: 7:00 AM - 9:00 PM",
    telefono: "(03541) 400-224",
    direccion: "Avenida San Martín 2124, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 25,
    nombre: "Cafetería 25",
    descripcion: "Café y pastelería en un ambiente ideal para hacer una pausa.",
    imagen: cafe1,
    horario: "Martes a Domingo: 8:00 AM - 9:00 PM",
    telefono: "(03541) 400-225",
    direccion: "Calle Las Heras 2225, Villa Carlos Paz",
    delivery: "Disponible",
  }
];

function Cafeterias() {
  return (
    <body className='cafeterias'>
      <header style={{ backgroundImage: `url(${cafe1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/gastronomia">Gastronomia</Link> &gt; Cafeterias </p>
        <h1>Cafeterias y panaderias en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <section className="cafeterias-list">
          {cafeterias.map((cafeteria) => (
            <div key={cafeteria.id} className="cafeteria-card">
              <img src={cafeteria.imagen} alt={cafeteria.nombre} />
              <h2>{cafeteria.nombre}</h2>
              <p>{cafeteria.descripcion}</p>
              <p><strong>Horario:</strong> {cafeteria.horario}</p>
              <p><strong>Teléfono:</strong> {cafeteria.telefono}</p>
              <p><strong>Dirección:</strong> {cafeteria.direccion}</p>
              <p><strong>Delivery:</strong> {cafeteria.delivery}</p>
            </div>
          ))}
        </section>

        <a className="cafePubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="cafePubli2">
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



export default Cafeterias; 