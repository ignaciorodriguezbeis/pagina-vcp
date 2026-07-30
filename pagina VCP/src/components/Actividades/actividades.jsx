import { Link } from 'react-router-dom';
import './actividades.css';
import Inicio from '../Inicio/Inicio';
import activ1 from '../../assets/img/deportes.webp'

function Actividades() {
    return (
        <main className='actividades'>
            <header style={{ backgroundImage: `url(${activ1})` }}>
                <p><a href="/inicio">inicio</a> &gt; Actividades</p>
                <h1>Actividades</h1>
                <p>Excursiones, espectáculos y aventura</p>
            </header>
        
            <body>
                    
            </body>
        </main>

    );
}

export default Actividades;