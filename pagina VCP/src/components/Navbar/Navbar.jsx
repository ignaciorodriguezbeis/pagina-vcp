import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from './Login/login';

function Navbar() {
    return (
        <nav >
            <section>
                <div>
                    <Link to="/" className="logo">VCP turismo</Link>
                </div>
                <Link to="/">Home</Link>
            </section>
            <div className="navbar">
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/catalogo">hosteleria</Link>
                <Link to="/catalogo">gastronomia</Link>
                <Link to="/paisajes">Paisajes</Link>
            </div>

            <Login></Login>

        </nav>
    )
}

export default Navbar;

