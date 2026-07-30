import { Form, Link } from 'react-router-dom';
import './Navbar.css';
import Login from './Login/login';


import alojamientos from '../Alojamientos/alojamiento';
import gastronomia from '../Gastronomia/gastronomia';
import actvidades from '../Actividades/actividades.jsx';

import hosteleria from '../Alojamientos/hosteleria';
import cabañaApart from  '../Alojamientos/cabañaApart.jsx';
import campings  from '../Alojamientos/campings.jsx'
import alquileres from '../Alojamientos/alquileres.jsx'

import excursion from '../Actividades/excursion.jsx';
import espectaculos from '../Actividades/espectaculos.jsx';
import aventura from '../Actividades/aventura.jsx';
import deportes from '../Actividades/deportes.jsx';
import infantiles from '../Actividades/infantiles.jsx';

import restaurantes from '../Gastronomia/restaurantes.jsx';
import bares from '../Gastronomia/bares.jsx';
import heladerias from '../Gastronomia/heladerias.jsx';
import cafeterias from '../Gastronomia/cafeterias.jsx';
import cervecerias from '../Gastronomia/cervecerias.jsx';

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
                        <Link to="../alojamientos">Alojamientos</Link>
                        <ul>
                            <li>
                                <Link to="/hosteleria">Hostelería</Link>
                            </li>
                            <li>
                                <Link to="/cabañaApart">cabañas y apartamentos</Link>
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
                        <Link to="./actividades">Actividades</Link>
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

