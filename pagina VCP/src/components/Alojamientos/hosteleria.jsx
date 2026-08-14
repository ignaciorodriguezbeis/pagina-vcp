import { Link } from 'react-router-dom';

import './hosteleria.css';
import hote1 from '../../assets/img/hotel-postal.webp';
import hote2 from '../../assets/img/vcp-postal.webp';
import hote3 from '../../assets/img/hotel-ventana.png';

const hoteles = [
    {
        titulo: 'Hotel Postal',
        descripcion: 'Ubicado en el corazón de Villa Carlos Paz, el Hotel Postal ofrece comodidades y servicios de calidad para garantizar una estancia inolvidable.',
        direccion: 'Av. 1° de Mayo 1234, Villa Carlos Paz',
        telefono: '+54 3541 42-5678',
        precio: 'Desde $5,000 por noche',
        imagen: hote1,
    },
    {
        titulo: 'Hotel Portal de las Sierras',
        descripcion: 'Hotel 3 estrellas frente al lago, con pileta climatizada y desayuno buffet incluido.',
        direccion: 'Av. Costanera 5678, Villa Carlos Paz',
        telefono: '+54 3541 42-1000',
        precio: 'Desde $48,000 / noche',
        imagen: hote2,
    },
    {
        titulo: 'Hotel Sierras del Lago',
        descripcion: 'Ubicado a orillas del lago San Roque, este hotel ofrece vistas panorámicas y actividades acuáticas para toda la familia.',
        direccion: 'Av. del Lago 9101, Villa Carlos Paz',
        telefono: '+54 3541 42-2000',
        precio: 'Desde $6,500 por noche',
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
    }
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