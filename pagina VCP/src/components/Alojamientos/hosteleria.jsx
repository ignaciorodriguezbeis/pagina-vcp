import { Link } from 'react-router-dom';

import './hosteleria.css';
import Inicio from '../Inicio/Inicio';
import Alojamiento from './alojamiento';

import hote1 from '../../assets/img/hotel-postal.webp';

function Hoteleria() {
    return (
        <main className='hoteleria'>
            <header style={{ backgroundImage: `url(${hote1})` }}>
                <p><a href="/inicio">inicio</a> &gt; <a href="/alojamiento">alojamiento</a> &gt; hoteleria</p>
                <h1>Hoteleria Villa Carlos Paz</h1>
                <p>hoteles para todos los gustos y actividades yD</p>
            </header>

            <body>

            </body>
        </main>
    );
}

export default Hoteleria;