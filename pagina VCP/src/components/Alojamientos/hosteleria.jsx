import { Link } from 'react-router-dom';

import './hosteleria.css';
import hote1 from '../../assets/img/hotel-postal.webp';
import hote2 from '../../assets/img/vcp-postal.webp';
import hote3 from '../../assets/img/hotel-ventana.png';

export const hoteles = [
    {
        titulo: 'Hotel Postal',
        descripcion: 'Hotel clásico en el centro con habitaciones amplias, desayuno incluido y excelente acceso a comercios y actividades del pueblo.',
        direccion: 'Av. 1° de Mayo 1234, Villa Carlos Paz',
        telefono: '+54 3541 42-5678',
        precio: 'Desde $5,000 por noche',
        imagen: hote1,
    },
    {
        titulo: 'Los Pinos Suites',
        descripcion: 'Estilo boutique con ambiente tranquilo, desayuno continental y una terraza ideal para descansar luego de recorrer la ciudad.',
        direccion: 'Calle Los Pinos 894, Villa Carlos Paz',
        telefono: '+54 3541 42-1188',
        precio: 'Desde $6,800 por noche',
        imagen: hote2,
    },
    {
        titulo: 'Lago Vista Hotel',
        descripcion: 'A pocas cuadras del lago, ofrece habitaciones con vista panorámica, pileta y atención personalizada para familias y parejas.',
        direccion: 'Av. del Lago 9101, Villa Carlos Paz',
        telefono: '+54 3541 42-2020',
        precio: 'Desde $7,900 por noche',
        imagen: hote3,
    },
    {
        titulo: 'Cumbres del Valle',
        descripcion: 'Hotel de diseño moderno con spa, restaurante gourmet y suites con balcón sobre las sierras y el paisaje cercano.',
        direccion: 'Calle de las Cumbres 2345, Villa Carlos Paz',
        telefono: '+54 3541 42-3300',
        precio: 'Desde $8,600 por noche',
        imagen: hote1,
    },
    {
        titulo: 'Mirador del Lago',
        descripcion: 'Ubicado en una zona residencial tranquila, combina vistas al lago, servicio de habitaciones y un ambiente muy relajante.',
        direccion: 'Bv. del Lago 6789, Villa Carlos Paz',
        telefono: '+54 3541 42-4400',
        precio: 'Desde $6,400 por noche',
        imagen: hote2,
    },
    {
        titulo: 'Parque Sol Hotel',
        descripcion: 'Perfecto para familias, con amplias habitaciones, jardín, juegos infantiles y un sector de parrilla para compartir.',
        direccion: 'Ruta 20 y Av. del Sol 150, Villa Carlos Paz',
        telefono: '+54 3541 42-5560',
        precio: 'Desde $5,600 por noche',
        imagen: hote3,
    },
    {
        titulo: 'Sierra Azul Lodge',
        descripcion: 'Lodge acogedor con vista a las montañas, desayuno casero, chimenea y una propuesta muy íntima para escapadas.',
        direccion: 'Camino Las Sierras 765, Villa Carlos Paz',
        telefono: '+54 3541 42-7711',
        precio: 'Desde $7,100 por noche',
        imagen: hote1,
    },
    {
        titulo: 'Villa Costanera',
        descripcion: 'A pocos metros de la costanera, combina comodidad moderna, estacionamiento propio y un servicio muy atento.',
        direccion: 'Costanera Sur 1140, Villa Carlos Paz',
        telefono: '+54 3541 42-8899',
        precio: 'Desde $6,900 por noche',
        imagen: hote2,
    },
    {
        titulo: 'Río de Luz Hotel',
        descripcion: 'Hotel familiar con ambientes luminosos, piscina climatizada y opciones para estadías largas o fines de semana.',
        direccion: 'Ruta 38 km 7, Villa Carlos Paz',
        telefono: '+54 3541 42-9012',
        precio: 'Desde $5,900 por noche',
        imagen: hote3,
    },
    {
        titulo: 'Horizonte Hotel',
        descripcion: 'Diseñado para quienes buscan tranquilidad y servicios premium, con terraza panorámica y spa de uso compartido.',
        direccion: 'Avenida Horizonte 333, Villa Carlos Paz',
        telefono: '+54 3541 42-1015',
        precio: 'Desde $9,200 por noche',
        imagen: hote1,
    },
    {
        titulo: 'Alma del Valle',
        descripcion: 'Estadía relajante rodeada de naturaleza, ideal para parejas y grupos pequeños que buscan una experiencia más íntima.',
        direccion: 'Calle Alma 540, Villa Carlos Paz',
        telefono: '+54 3541 42-1214',
        precio: 'Desde $7,400 por noche',
        imagen: hote2,
    },
    {
        titulo: 'Nido de Montaña',
        descripcion: 'Hotel con identidad campestre, balcones con vista, desayuno regional y una propuesta muy cálida para descansar.',
        direccion: 'Cerro Nido 980, Villa Carlos Paz',
        telefono: '+54 3541 42-1348',
        precio: 'Desde $6,700 por noche',
        imagen: hote3,
    },
    {
        titulo: 'Hotel Cumbres del Valle',
        descripcion: 'Este hotel boutique ofrece una experiencia exclusiva con spa, restaurante gourmet y habitaciones con vistas a las sierras.',
        direccion: 'Calle de las Cumbres 2345, Villa Carlos Paz',
        telefono: '+54 3541 42-3000',
        precio: 'Desde $7,200 por noche',
        imagen: hote1,
    },
    {
        titulo: 'Hotel Mirador del Lago',
        descripcion: 'Con una ubicación privilegiada, este hotel ofrece habitaciones con balcón privado y vistas al lago San Roque.',
        direccion: 'Av. del Lago 6789, Villa Carlos Paz',
        telefono: '+54 3541 42-4000',
        precio: 'Desde $5,800 por noche',
        imagen: hote2,
    },
    {
        titulo: 'Hotel Vista del Lago',
        descripcion: 'Ubicado a orillas del lago San Roque, este hotel ofrece vistas panorámicas y actividades acuáticas para toda la familia.',
        direccion: 'Av. del Lago 1111, Villa Carlos Paz',
        telefono: '+54 3541 42-5000',
        precio: 'Desde $6,200 por noche',
        imagen: hote3,
    },
    {
        titulo: 'Hotel Cumbres del Valle',
        descripcion: 'Este hotel boutique ofrece una experiencia exclusiva con spa, restaurante gourmet y habitaciones con vistas a las sierras.',
        direccion: 'Calle de las Cumbres 2345, Villa Carlos Paz',
        telefono: '+54 3541 42-3000',
        precio: 'Desde $7,200 por noche',
        imagen: hote1,
    },
    {
        titulo: 'Hotel Mirador del Lago',
        descripcion: 'Con una ubicación privilegiada, este hotel ofrece habitaciones con balcón privado y vistas al lago San Roque.',
        direccion: 'Av. del Lago 6789, Villa Carlos Paz',
        telefono: '+54 3541 42-4000',
        precio: 'Desde $5,800 por noche',
        imagen: hote2,
    },
    {
        titulo: 'Hotel Vista del Lago',
        descripcion: 'Ubicado a orillas del lago San Roque, este hotel ofrece vistas panorámicas y actividades acuáticas para toda la familia.',
        direccion: 'Av. del Lago 1111, Villa Carlos Paz',
        telefono: '+54 3541 42-5000',
        precio: 'Desde $6,200 por noche',
        imagen: hote3,
    },
      {
        titulo: 'Hotel Mirador del Lago',
        descripcion: 'Con una ubicación privilegiada, este hotel ofrece habitaciones con balcón privado y vistas al lago San Roque.',
        direccion: 'Av. del Lago 6789, Villa Carlos Paz',
        telefono: '+54 3541 42-4000',
        precio: 'Desde $5,800 por noche',
        imagen: hote2,
    },
    {
        titulo: 'Hotel Vista del Lago',
        descripcion: 'Ubicado a orillas del lago San Roque, este hotel ofrece vistas panorámicas y actividades acuáticas para toda la familia.',
        direccion: 'Av. del Lago 1111, Villa Carlos Paz',
        telefono: '+54 3541 42-5000',
        precio: 'Desde $6,200 por noche',
        imagen: hote3,
    },
];

function Hoteleria() {
    return (
        <body className='hoteleria'>
            <header style={{ backgroundImage: `url(${hote1})` }}>
                <p>
                    <Link to="/inicio">inicio</Link> &gt; <Link to="/alojamientos">alojamiento</Link> &gt; hoteleria
                </p>
                <h1>Hoteleria Villa Carlos Paz</h1>
                <p>hoteles para todos los gustos y actividades</p>
            </header>

            <main>
                <h2>catálogo de hoteles</h2>
                <section>
                    {hoteles.map((hotel) => (
                        <article key={hotel.titulo}>
                            <img src={hotel.imagen} alt={hotel.titulo} />
                            <h3>{hotel.titulo}</h3>
                            <p>{hotel.descripcion}</p>
                            <h4>dirección: {hotel.direccion}</h4>
                            <p>teléfono: {hotel.telefono}</p>
                            <h5>precio: {hotel.precio}</h5>
                        </article>
                    ))}
                </section>

                <a className="hostPubli1" href="/publicidad">
                    <div>
                        <h5>publicidad</h5>
                        <h6>espacio publicitario</h6>
                        <p>tu marca acá anuncia con nosotros</p>
                    </div>
                </a>

                <a className="hostPubli2" href="/publicidad">
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

export default Hoteleria;