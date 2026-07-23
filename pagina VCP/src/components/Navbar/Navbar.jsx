import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from './Login/login';
import catalogo from '../Catalogo/catalogo';
import hosteleria from '../Hosteleria/hosteleria';
import gastronomia from '../Gastronomia/gastronomia';
import espectaculos from '../Espectaculos/espectaculos';
import paisajes from '../Paisajes/paisajes';
import logo from '../../assets/img/cucu_logo.jpg';

function Navbar() {
    return (
        <nav >
            <section>
                <div>
                    <Link to="/"><img src={logo} alt="Logo" class="logo"></img></Link>
                    <Link to="/" class="logoname">VCP turismo</Link>
                </div>
                <Link to="/">Home</Link>
            </section>
            <div class="navbar">
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/hosteleria">hosteleria</Link>
                <Link to="/gastronomia">gastronomia</Link>
                <Link to="/espectaculos">espectáculos</Link>
                <Link to="/paisajes">Paisajes</Link>
            </div>

            <Login></Login>

        </nav>
    )
}

export default Navbar;

