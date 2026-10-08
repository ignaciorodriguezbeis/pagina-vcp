import './servicios.css';

const gruposServicios = [
    {
        titulo: 'Emergencias',
        descripcion: 'Números de atención inmediata en Argentina.',
        servicios: [
            { nombre: 'Policía', detalle: 'Emergencias policiales', telefono: '911' },
            { nombre: 'Bomberos', detalle: 'Incendios y rescates', telefono: '100' },
            { nombre: 'Emergencias médicas', detalle: 'Ambulancia', telefono: '107' },
            { nombre: 'Defensa Civil', detalle: 'Asistencia ante riesgos y emergencias', telefono: '103' },
        ],
    },
    {
        titulo: 'Salud',
        descripcion: 'Encontrá atención médica y farmacias en la ciudad.',
        servicios: [
            { nombre: 'Hospitales', busqueda: 'hospitales' },
            { nombre: 'Clínicas y centros médicos', busqueda: 'clínicas y centros médicos' },
            { nombre: 'Farmacias', busqueda: 'farmacias' },
            { nombre: 'Farmacias de turno', busqueda: 'farmacias de turno' },
        ],
    },
    {
        titulo: 'Servicios para tu estadía',
        descripcion: 'Ubicá lo que necesitás para moverte y resolver tu día.',
        servicios: [
            { nombre: 'Comisarías', busqueda: 'comisarías' },
            { nombre: 'Terminal de ómnibus', busqueda: 'terminal de ómnibus' },
            { nombre: 'Taxis y remises', busqueda: 'taxis y remises' },
            { nombre: 'Estaciones de servicio', busqueda: 'estaciones de servicio' },
            { nombre: 'Cajeros automáticos', busqueda: 'cajeros automáticos' },
            { nombre: 'Información turística', busqueda: 'información turística' },
        ],
    },
];

function crearEnlaceMapa(busqueda) {
    const consulta = `${busqueda} Villa Carlos Paz Córdoba`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(consulta)}`;
}

function Servicios() {
    return (
        <main className="servicios-page">
            <header className="servicios-header">
                <p className="servicios-eyebrow">Guía útil para visitantes</p>
                <h1>Servicios en Villa Carlos Paz</h1>
                <p>
                    Contactos de emergencia y lugares útiles para resolver lo que necesites
                    durante tu visita.
                </p>
            </header>

            <div className="servicios-aviso" role="note">
                <strong>Ante una emergencia:</strong> llamá al número correspondiente. Para
                hospitales, clínicas, farmacias y otros lugares, consultá el mapa antes de
                dirigirte para confirmar ubicación y horarios.
            </div>

            {gruposServicios.map((grupo) => (
                <section className="servicios-grupo" key={grupo.titulo}>
                    <div className="servicios-grupo__encabezado">
                        <h2>{grupo.titulo}</h2>
                        <p>{grupo.descripcion}</p>
                    </div>
                    <div className="servicios-grid">
                        {grupo.servicios.map((servicio) => (
                            <article className="servicio-card" key={servicio.nombre}>
                                <div>
                                    <h3>{servicio.nombre}</h3>
                                    <p>{servicio.detalle || `Lugares disponibles en Villa Carlos Paz`}</p>
                                </div>
                                {servicio.telefono ? (
                                    <a className="servicio-link servicio-link--llamar" href={`tel:${servicio.telefono}`}>
                                        Llamar al {servicio.telefono}
                                    </a>
                                ) : (
                                    <a
                                        className="servicio-link"
                                        href={crearEnlaceMapa(servicio.busqueda)}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`Buscar ${servicio.nombre} en Villa Carlos Paz en Google Maps`}
                                    >
                                        Ver en el mapa
                                    </a>
                                )}
                            </article>
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
}

export default Servicios;