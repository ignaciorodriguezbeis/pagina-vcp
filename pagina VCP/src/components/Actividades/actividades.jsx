import { Link } from 'react-router-dom';
import './actividades.css';





function actividades() {
    return (
        <section class="actividades">
            <h1>Actividades</h1>
            <p>En esta sección encontrarás información sobre las actividades que puedes realizar en Villa Carlos Paz. Desde excursiones y paseos por la ciudad hasta deportes acuáticos y actividades al aire libre, hay algo para todos los gustos. Explora nuestras recomendaciones y planifica tu itinerario para aprovechar al máximo tu visita a esta hermosa ciudad.</p>

            <div class="actividades-catalogo">

                <div className="actividades-catalogo-item">
                    <button type="button" onClick={() => navigate('/espectaculos')}>
                    </button>
                </div>

                <div className="actividades-catalogo-item">
                    <button type="button" onClick={() => navigate('/excursiones')}>
                    </button>
                </div>

                <div className="actividades-catalogo-item">
                    <button type="button" onClick={() => navigate('/paseos')}>
                    </button>
                </div>

                <div className="actividades-catalogo-item">
                    <button type="button" onClick={() => navigate('/deportes')}>
                    </button>
                </div>

                <div className="actividades-catalogo-item">
                    <button type="button" onClick={() => navigate('/actividades-al-aire-libre')}>
                    </button>
                </div>

                <div className="actividades-catalogo-item">
                    <button type="button" onClick={() => navigate('/centros-comerciales')}>
                    </button>
                </div>


            </div>
        </section>
    )
}




return actividades;