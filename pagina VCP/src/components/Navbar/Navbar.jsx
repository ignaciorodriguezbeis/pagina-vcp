import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from './Login/login';
import catalogo from '../Catalogo/catalogo';

import hosteleria from '../Alojamientos/hosteleria';
import alojamientos from '../Alojamientos/alojamiento';

import gastronomia from '../Gastronomia/gastronomia';
import espectaculos from '../Espectaculos/espectaculos';
import paisajes from '../Paisajes/paisajes';
import logo from '../../assets/img/cucu_logo.jpg';

function Navbar() {
    return (
        <nav >
            <section>
                <div>
                    <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
                    <Link to="/" className="logoname"><span>VCP</span> turismo</Link>
                </div>

            </section>
            <div className="navbar">
                <ul className="list-container">
                    <li className="list-header">
                        <Link to="/alojamientos">Alojamientos</Link>
                        <ul>
                            <li>
                                <Link to="/hosteleria">Hostelería</Link>
                            </li>
                            <li>
                                <Link to="/cabaña-apart">cabañas y apartamentos</Link>
                            </li>
                            <li>
                                <Link to="/campings">campings</Link>
                            </li>
                            <li>
                                <Link to="/alquileres">alquileres temporarios</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="list-container">
                    <li className="list-header">
                        <Link to="/actividades">Qué hacer</Link>
                        <ul>
                            <li>
                                <Link to="/excursion">excursiones</Link>
                            </li>
                            <li>
                                <Link to="/espectaculos">espectáculos</Link>
                            </li>
                            <li>
                                <Link to="/aventura">aventura</Link>
                            </li>
                            <li>
                                <Link to="/deportes">deportes</Link>
                            </li>
                            <li>
                                <Link to="/infantil">infantiles</Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-container">
                    <li className="list-header">
                        <Link to="/gastronomia">Gastronomía</Link>
                        <ul>
                            <li>
                                <Link to="/restaurantes">restaurantes</Link>
                            </li>
                            <li>
                                <Link to="/bares">bares</Link>
                            </li>
                            <li>
                                <Link to="/heladerias">heladerías</Link>
                            </li>
                            <li>
                                <Link to="/cafeterias">cafeterías</Link>
                            </li>
                            <li>
                                <Link to="/cervecerias">cervecerías</Link>
                            </li>
                        </ul>
                    </li> 
                </ul>
                <ul className="list-container">
                    <li className="list-header">
                        <Link to="/otros">Otros</Link>
                        
                    </li>
                </ul>
            </div>

            <div className="login-container">
                <Link to="/login" className="login">Anuncía tu negocio</Link>
            </div>

        </nav>
    )
}

export default Navbar;

