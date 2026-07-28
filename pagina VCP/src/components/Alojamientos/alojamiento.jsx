
import { Form, Link } from 'react-router-dom';

import "./alojamiento.css";

function Alojamiento() {
    return (
        <div className="alojamiento-container">
            <h1>Alojamientos</h1>
            <div className="alojamiento-list">
                <div className="alojamiento-item">
                    <h2>Hotel</h2>  
                        <p>Descripción del hotel...</p>
                </div>  
                <div className="alojamiento-item">
                    <h2>Hostal</h2>
                        <p>Descripción del hostal...</p>
                </div>
                <div className="alojamiento-item">
                    <h2>Departamento</h2>   
                        <p>Descripción del departamento...</p>
                </div>
                <div className="alojamiento-item">  
                    <h2>Casa</h2>
                        <p>Descripción de la casa...</p>
                </div>
            </div>
        </div>
    );
}

export default Alojamiento;