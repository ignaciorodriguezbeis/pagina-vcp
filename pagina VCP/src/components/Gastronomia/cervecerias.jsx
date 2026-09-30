import { Link } from 'react-router-dom';
import './cervecerias.css';

import Inicio from '../Inicio/Inicio';
import Gastronomia from './gastronomia';

import bear1 from '../../assets/img/bear.webp';

export const cervecerias = [
  {
    id: 1,
    nombre: "Cervecería 1",
    descripcion: "Descripción de la cervecería 1",
    imagen: "ruta/a/la/imagen1.jpg",
    horario: "Lunes a Domingo: 12:00 PM - 10:00 PM",
    telefono: "123-456-7890",
    direccion: "Calle Principal 123, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 2,
    nombre: "Cervecería 2",
    descripcion: "Descripción de la cervecería 2",
    imagen: "ruta/a/la/imagen2.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    telefono: "987-654-3210",
    direccion: "Avenida Secundaria 456, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 3,
    nombre: "Cervecería 3",
    descripcion: "Descripción de la cervecería 3",
    imagen: "ruta/a/la/imagen3.jpg",
    horario: "Lunes a Domingo: 1:00 PM - 9:00 PM",
    telefono: "555-123-4567",
    direccion: "Plaza Central 789, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 4,
    nombre: "Cervecería 4",
    descripcion: "Descripción de la cervecería 4",
    imagen: "ruta/a/la/imagen4.jpg",
    horario: "Lunes a Domingo: 10:00 AM - 8:00 PM",
    telefono: "444-987-6543",
    direccion: "Calle del Sol 321, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 5,
    nombre: "Cervecería 5",
    descripcion: "Descripción de la cervecería 5",
    imagen: "ruta/a/la/imagen5.jpg",
    horario: "Lunes a Domingo: 11:00 AM - 9:00 PM",
    telefono: "333-222-1111",
    direccion: "Avenida Principal 555, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 6,
    nombre: "Cervecería 6",
    descripcion: "Cervezas artesanales y picadas para compartir.",
    imagen: bear1,
    horario: "Lunes a Domingo: 5:00 PM - 1:00 AM",
    telefono: "(03541) 400-306",
    direccion: "Avenida San Martín 306, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 7,
    nombre: "Cervecería 7",
    descripcion: "Un espacio relajado para probar distintos estilos de cerveza.",
    imagen: bear1,
    horario: "Martes a Domingo: 6:00 PM - 2:00 AM",
    telefono: "(03541) 400-307",
    direccion: "Calle 9 de Julio 407, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 8,
    nombre: "Cervecería 8",
    descripcion: "Cervezas tiradas y opciones para cenar con amigos.",
    imagen: bear1,
    horario: "Lunes a Sábado: 5:00 PM - 1:00 AM",
    telefono: "(03541) 400-308",
    direccion: "Avenida Uruguay 508, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 9,
    nombre: "Cervecería 9",
    descripcion: "Variedad de cervezas y platos para picar.",
    imagen: bear1,
    horario: "Miércoles a Lunes: 6:00 PM - 2:00 AM",
    telefono: "(03541) 400-309",
    direccion: "Calle Las Heras 609, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 10,
    nombre: "Cervecería 10",
    descripcion: "Una propuesta informal con bebidas artesanales.",
    imagen: bear1,
    horario: "Lunes a Domingo: 4:00 PM - 12:00 AM",
    telefono: "(03541) 400-310",
    direccion: "Avenida Cárcano 710, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 11,
    nombre: "Cervecería 11",
    descripcion: "Ideal para reunirse y descubrir nuevos sabores.",
    imagen: bear1,
    horario: "Jueves a Martes: 5:00 PM - 2:00 AM",
    telefono: "(03541) 400-311",
    direccion: "Calle Libertad 811, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 12,
    nombre: "Cervecería 12",
    descripcion: "Cervezas seleccionadas y clásicos para acompañar.",
    imagen: bear1,
    horario: "Lunes a Sábado: 6:00 PM - 1:00 AM",
    telefono: "(03541) 400-312",
    direccion: "Avenida General Paz 912, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 13,
    nombre: "Cervecería 13",
    descripcion: "Ambiente distendido, cerveza fría y picadas variadas.",
    imagen: bear1,
    horario: "Lunes a Domingo: 5:00 PM - 1:00 AM",
    telefono: "(03541) 400-313",
    direccion: "Calle Alberdi 1013, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 14,
    nombre: "Cervecería 14",
    descripcion: "Una carta de cervezas para disfrutar en buena compañía.",
    imagen: bear1,
    horario: "Martes a Domingo: 4:00 PM - 12:00 AM",
    telefono: "(03541) 400-314",
    direccion: "Avenida Libertad 1114, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 15,
    nombre: "Cervecería 15",
    descripcion: "Cervezas artesanales con alternativas saladas para compartir.",
    imagen: bear1,
    horario: "Miércoles a Lunes: 5:00 PM - 2:00 AM",
    telefono: "(03541) 400-315",
    direccion: "Calle Moreno 1215, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 16,
    nombre: "Cervecería 16",
    descripcion: "Un punto de encuentro para probar cerveza local.",
    imagen: bear1,
    horario: "Lunes a Domingo: 6:00 PM - 1:00 AM",
    telefono: "(03541) 400-316",
    direccion: "Avenida San Martín 1316, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 17,
    nombre: "Cervecería 17",
    descripcion: "Sabores clásicos y especiales en un ambiente acogedor.",
    imagen: bear1,
    horario: "Jueves a Martes: 5:00 PM - 1:00 AM",
    telefono: "(03541) 400-317",
    direccion: "Calle Sarmiento 1417, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 18,
    nombre: "Cervecería 18",
    descripcion: "Cervezas variadas y platos sencillos para una salida casual.",
    imagen: bear1,
    horario: "Lunes a Sábado: 6:00 PM - 2:00 AM",
    telefono: "(03541) 400-318",
    direccion: "Avenida Uruguay 1518, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 19,
    nombre: "Cervecería 19",
    descripcion: "Un lugar para disfrutar una pinta y compartir una picada.",
    imagen: bear1,
    horario: "Martes a Domingo: 5:00 PM - 12:00 AM",
    telefono: "(03541) 400-319",
    direccion: "Calle Belgrano 1619, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 20,
    nombre: "Cervecería 20",
    descripcion: "Propuesta cervecera con opciones para compartir en grupo.",
    imagen: bear1,
    horario: "Lunes a Domingo: 4:00 PM - 1:00 AM",
    telefono: "(03541) 400-320",
    direccion: "Avenida Cárcano 1720, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 21,
    nombre: "Cervecería 21",
    descripcion: "Cervezas de distintos estilos para acompañar la noche.",
    imagen: bear1,
    horario: "Miércoles a Lunes: 6:00 PM - 2:00 AM",
    telefono: "(03541) 400-321",
    direccion: "Calle José Hernández 1821, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 22,
    nombre: "Cervecería 22",
    descripcion: "Un espacio casual con cervezas y comidas para picar.",
    imagen: bear1,
    horario: "Lunes a Sábado: 5:00 PM - 12:00 AM",
    telefono: "(03541) 400-322",
    direccion: "Avenida General Paz 1922, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 23,
    nombre: "Cervecería 23",
    descripcion: "Una carta variada para compartir entre amigos.",
    imagen: bear1,
    horario: "Martes a Domingo: 5:00 PM - 1:00 AM",
    telefono: "(03541) 400-323",
    direccion: "Calle Los Andes 2023, Villa Carlos Paz",
    delivery: "Disponible",
  },
  {
    id: 24,
    nombre: "Cervecería 24",
    descripcion: "Cervezas artesanales y un ambiente ideal para relajarse.",
    imagen: bear1,
    horario: "Lunes a Domingo: 6:00 PM - 2:00 AM",
    telefono: "(03541) 400-324",
    direccion: "Calle 9 de Julio 2124, Villa Carlos Paz",
    delivery: "No disponible",
  },
  {
    id: 25,
    nombre: "Cervecería 25",
    descripcion: "Pintas, picadas y opciones para cerrar el día.",
    imagen: bear1,
    horario: "Miércoles a Lunes: 5:00 PM - 1:00 AM",
    telefono: "(03541) 400-325",
    direccion: "Avenida San Martín 2225, Villa Carlos Paz",
    delivery: "Disponible",
  },
];

function Cervecerias() {
  return (
    <body className='cervecerias'>
      <header style={{ backgroundImage: `url(${bear1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/gastronomia">Gastronomia</Link> &gt; Cervecerias </p>
        <h1>Cervecerias y panaderias en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <section className="cervecerias-list">
          {cervecerias.map((cerveceria) => (
            <div key={cerveceria.id} className="cerveceria-card">
              <img src={cerveceria.imagen} alt={cerveceria.nombre} />
              <h2>{cerveceria.nombre}</h2>
              <p>{cerveceria.descripcion}</p>
              <p><strong>Horario:</strong> {cerveceria.horario}</p>
              <p><strong>Teléfono:</strong> {cerveceria.telefono}</p>
              <p><strong>Dirección:</strong> {cerveceria.direccion}</p>
              <p><strong>Delivery:</strong> {cerveceria.delivery}</p>
            </div>
          ))}
        </section>

        <a className="beerPubli1" href="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="beerPubli2" href="/publicidad">
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


export default Cervecerias;