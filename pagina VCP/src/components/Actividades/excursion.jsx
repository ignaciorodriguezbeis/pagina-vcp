import { Link } from 'react-router-dom';
import './excursion.css';

import excur1 from '../../assets/img/embudo.png'

export const excursiones = [
  {
    titulo: 'Aerosilla al Cerro de la Cruz',
    descripcion: 'Ascenso panorámico con la mejor vista del lago y la ciudad. Apto todo público.',
    direccion: 'Cerro de la Cruz, Villa Carlos Paz',
    telefono: '+54 3541 42-1111',
    precio: 'Entradas desde $9.500',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 6:00 PM',
  },
  {
    titulo: 'Paseo en Catamarán por el Lago',
    descripcion: 'Recorrido guiado de 1 hora por el lago San Roque con salidas cada 45 minutos.',
    direccion: 'Puerto de Villa Carlos Paz',
    telefono: '+54 3541 42-2222',
    precio: 'Desde $8.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 10:00 AM - 5:00 PM',
  },
  {
    titulo: 'Parque Temático de Aventura',
    descripcion: 'Diversión para toda la familia con tirolesas, puentes colgantes y actividades al aire libre.',
    direccion: 'Ruta 14, Villa Carlos Paz',
    telefono: '+54 3541 42-3333',
    precio: 'Entradas desde $7.500',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 7:00 PM',
  },
  {
    titulo: 'Tour en Bicicleta por el Centro Histórico',
    descripcion: 'Recorrido guiado en bicicleta por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-4444',
    precio: 'Desde $6.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Visita Guiada al Parque Nacional',
    descripcion: 'Recorrido informativo por las principales zonas del parque nacional con guía especializado.',
    direccion: 'Parque Nacional, Villa Carlos Paz',
    telefono: '+54 3541 42-5555',
    precio: 'Desde $5.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 5:00 PM',
  },
  {
    titulo: 'Tour en Motos por el Centro Histórico',
    descripcion: 'Recorrido guiado en motos por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-6666',
    precio: 'Desde $8.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 4:00 PM',
  },
  {
    titulo: 'Tour en Patineta por el Centro Histórico',
    descripcion: 'Recorrido guiado en patineta por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-7777',
    precio: 'Desde $6.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Tour en Skate por el Centro Histórico',
    descripcion: 'Recorrido guiado en skate por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-8888',
    precio: 'Desde $6.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Tour en Ruta por el Centro Histórico',
    descripcion: 'Recorrido guiado en ruta por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-9999',
    precio: 'Desde $5.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 4:00 PM',
  },
  {
    titulo: 'Tour en Bicicleta por el Centro Histórico',
    descripcion: 'Recorrido guiado en bicicleta por los principales sitios históricos de Villa Carlos Paz.',
    direccion: 'Centro Histórico, Villa Carlos Paz',
    telefono: '+54 3541 42-0000',
    precio: 'Desde $5.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 4:00 PM',
  },
  {
    titulo: 'Caminata al Cerro de la Cruz',
    descripcion: 'Sendero guiado hasta uno de los miradores más conocidos de la ciudad, con tiempo para disfrutar el paisaje.',
    direccion: 'Base del Cerro de la Cruz, Villa Carlos Paz',
    telefono: '+54 3541 42-1313',
    precio: 'Desde $4.500',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 5:00 PM',
  },
  {
    titulo: 'Circuito de Miradores Serranos',
    descripcion: 'Visita guiada por distintos puntos panorámicos de las sierras y el valle de Punilla.',
    direccion: 'Centro de Villa Carlos Paz',
    telefono: '+54 3541 42-1414',
    precio: 'Desde $9.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 4:00 PM',
  },
  {
    titulo: 'Paseo por la Costanera del Lago',
    descripcion: 'Recorrido tranquilo junto al lago San Roque con paradas para tomar fotografías y conocer la zona.',
    direccion: 'Costanera del Lago San Roque, Villa Carlos Paz',
    telefono: '+54 3541 42-1515',
    precio: 'Desde $3.500',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 6:00 PM',
  },
  {
    titulo: 'Excursión al Dique San Roque',
    descripcion: 'Conoce la historia y el entorno del dique en una salida guiada con vistas al lago y las sierras.',
    direccion: 'Dique San Roque, Córdoba',
    telefono: '+54 3541 42-1616',
    precio: 'Desde $7.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 5:00 PM',
  },
  {
    titulo: 'Tour de Capillas y Patrimonio Local',
    descripcion: 'Recorrido cultural por capillas y sitios históricos de Villa Carlos Paz y sus alrededores.',
    direccion: 'Punto de encuentro en el centro, Villa Carlos Paz',
    telefono: '+54 3541 42-1717',
    precio: 'Desde $6.500',
    imagen: excur1,
    horarios: 'Martes a Domingo: 10:00 AM - 4:00 PM',
  },
  {
    titulo: 'Excursión a la Cascada de los Chorrillos',
    descripcion: 'Caminata por senderos serranos hasta una cascada natural, acompañada por un guía.',
    direccion: 'Reserva Natural Los Chorrillos, Tanti',
    telefono: '+54 3541 42-1818',
    precio: 'Desde $8.500',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 3:00 PM',
  },
  {
    titulo: 'Recorrido por Tanti y sus Arroyos',
    descripcion: 'Paseo por el pueblo de Tanti con paradas en sus arroyos y rincones naturales.',
    direccion: 'Centro de Tanti, Córdoba',
    telefono: '+54 3541 42-1919',
    precio: 'Desde $7.500',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 4:00 PM',
  },
  {
    titulo: 'Tour de Villa Carlos Paz en Minibús',
    descripcion: 'Conoce los principales barrios, atractivos y puntos panorámicos de la ciudad en un recorrido guiado.',
    direccion: 'Terminal de Ómnibus, Villa Carlos Paz',
    telefono: '+54 3541 42-2020',
    precio: 'Desde $6.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 10:00 AM - 5:00 PM',
  },
  {
    titulo: 'Paseo Fotográfico por las Sierras',
    descripcion: 'Salida guiada para descubrir paisajes serranos y aprender a capturarlos en fotografías.',
    direccion: 'Punto de encuentro en el centro, Villa Carlos Paz',
    telefono: '+54 3541 42-2121',
    precio: 'Desde $5.500',
    imagen: excur1,
    horarios: 'Sábados y Domingos: 7:00 AM - 11:00 AM',
  },
  {
    titulo: 'Excursión al Cerro de la Banderita',
    descripcion: 'Ascenso guiado por senderos de montaña hasta un mirador con vistas del valle de Punilla.',
    direccion: 'La Falda, Córdoba',
    telefono: '+54 3541 42-2323',
    precio: 'Desde $10.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 7:00 AM - 2:00 PM',
  },
  {
    titulo: 'Recorrido por el Camino de las Cien Curvas',
    descripcion: 'Paseo panorámico por el camino serrano con paradas para apreciar el lago y las montañas.',
    direccion: 'Camino de las Cien Curvas, Villa Carlos Paz',
    telefono: '+54 3541 42-2424',
    precio: 'Desde $8.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 5:00 PM',
  },
  {
    titulo: 'Excursión al Valle de Punilla',
    descripcion: 'Visita guiada por localidades y paisajes destacados del valle, con paradas en puntos de interés.',
    direccion: 'Salida desde Villa Carlos Paz',
    telefono: '+54 3541 42-2525',
    precio: 'Desde $12.000',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 8:00 AM - 6:00 PM',
  },
  {
    titulo: 'Paseo en Kayak por el Lago San Roque',
    descripcion: 'Recorrido guiado en kayak por sectores tranquilos del lago, con equipo incluido.',
    direccion: 'Costa del Lago San Roque, Villa Carlos Paz',
    telefono: '+54 3541 42-2626',
    precio: 'Desde $9.500',
    imagen: excur1,
    horarios: 'Lunes a Domingo: 9:00 AM - 5:00 PM',
  },
  {
    titulo: 'Sendero Interpretativo de Flora Serrana',
    descripcion: 'Caminata de baja dificultad para conocer plantas nativas y ecosistemas de las sierras.',
    direccion: 'Reserva Natural cercana a Villa Carlos Paz',
    telefono: '+54 3541 42-2727',
    precio: 'Desde $5.000',
    imagen: excur1,
    horarios: 'Miércoles a Domingo: 9:00 AM - 1:00 PM',
  },
];

function Excursion() {
  return (
    <body className='excursion'>
      <header style={{ backgroundImage: `url(${excur1})` }}>
        <p><Link to="/inicio">Inicio</Link> &gt; <Link to="/actividades">Actividades</Link> &gt; Excursion </p>
        <h1>Excursion en Villa Carlos Paz</h1>
        <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
      </header>

      <main>
        <h2>Excursiones</h2>
        <section className="excursion-grid">
          {excursiones.map((excursion) => (
            <article className="excursion-card" key={excursion.titulo}>
              <img src={excursion.imagen} alt={excursion.titulo} />
              <h3>{excursion.titulo}</h3>
              <p>{excursion.descripcion}</p>
              <p>horarios: {excursion.horarios}</p>
              <h4>dirección: {excursion.direccion}</h4>
              <p>teléfono: {excursion.telefono}</p>
              <h5>precio: {excursion.precio}</h5>
            </article>
          ))}
        </section>

        <a className="excurPubli1" to="/publicidad">
          <div>
            <h5>publicidad</h5>
            <h6>espacio publicitario</h6>
            <p>tu marca acá anuncia con nosotros</p>
          </div>
        </a>

        <a className="excurPubli2" to="/publicidad">
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

export default Excursion;