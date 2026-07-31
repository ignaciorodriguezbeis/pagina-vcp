import { Link } from 'react-router-dom';

import './gastronomia.css';

import Inicio from '../Inicio/Inicio';

import gast1 from '../../assets/img/gastronomia.jpg';

function Gastronomia() {
    return (
        <main className='gastronomia'>
            <header style={{ backgroundImage: `url(${gast1})` }}>
                <p><a href="/inicio">inicio</a> &gt; Gastronomia </p>
                <h1>Gastronomia de Villa Carlos Paz</h1>
                <p>Bienvenido a la sección de gastronomía de VCP Turismo. Aquí encontrarás información sobre los mejores restaurantes, bares y lugares para disfrutar de la deliciosa comida local en Villa Carlos Paz. Explora nuestras recomendaciones y descubre los sabores únicos que esta ciudad tiene para ofrecer.</p>
            </header>

            <body>
 
            </body>
        </main>
    );
}

export default Gastronomia;