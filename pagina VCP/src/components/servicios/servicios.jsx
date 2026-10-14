import './servicios.css';

const gruposServicios = [
    {
        titulo: 'Emergencias',
        descripcion: 'Números de atención inmediata en Argentina.',
        servicios: [
            { nombre: 'Policía', detalle: 'Emergencias policiales', telefono: '911', direccion: 'Atención en Villa Carlos Paz, Córdoba' },
            { nombre: 'Bomberos', detalle: 'Incendios y rescates', telefono: '100', direccion: 'Atención en Villa Carlos Paz, Córdoba' },
            { nombre: 'Emergencias médicas', detalle: 'Ambulancia', telefono: '107', direccion: 'Atención en Villa Carlos Paz, Córdoba' },
            { nombre: 'Defensa Civil', detalle: 'Asistencia ante riesgos y emergencias', telefono: '103', direccion: 'Atención en Villa Carlos Paz, Córdoba' },
        ],
    },
    {
        titulo: 'Salud',
        descripcion: 'Encontrá atención médica y farmacias en la ciudad.',
        servicios: [
            { nombre: 'Hospitales', busqueda: 'hospitales', telefono: '0000-000001', direccion: 'Dirección ficticia 101, Villa Carlos Paz' },
            { nombre: 'Clínicas y centros médicos', busqueda: 'clínicas y centros médicos', telefono: '0000-000002', direccion: 'Dirección ficticia 202, Villa Carlos Paz' },
            { nombre: 'Farmacias', busqueda: 'farmacias', telefono: '0000-000003', direccion: 'Dirección ficticia 303, Villa Carlos Paz' },
            { nombre: 'Farmacias de turno', busqueda: 'farmacias de turno', telefono: '0000-000004', direccion: 'Dirección ficticia 404, Villa Carlos Paz' },
        ],
    },
    {
        titulo: 'Servicios para tu estadía',
        descripcion: 'Ubicá lo que necesitás para moverte y resolver tu día.',
        servicios: [
            { nombre: 'Comisarías', busqueda: 'comisarías', telefono: '0000-000005', direccion: 'Dirección ficticia 505, Villa Carlos Paz' },
            { nombre: 'Terminal de ómnibus', busqueda: 'terminal de ómnibus', telefono: '0000-000006', direccion: 'Dirección ficticia 606, Villa Carlos Paz' },
            { nombre: 'Taxis y remises', busqueda: 'taxis y remises', telefono: '0000-000007', direccion: 'Dirección ficticia 707, Villa Carlos Paz' },
            { nombre: 'Estaciones de servicio', busqueda: 'estaciones de servicio', telefono: '0000-000008', direccion: 'Dirección ficticia 808, Villa Carlos Paz' },
            { nombre: 'Cajeros automáticos', busqueda: 'cajeros automáticos', telefono: '0000-000009', direccion: 'Dirección ficticia 909, Villa Carlos Paz' },
            { nombre: 'Información turística', busqueda: 'información turística', telefono: '0000-000010', direccion: 'Dirección ficticia 1001, Villa Carlos Paz' },
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
                hospitales, clínicas, farmacias y otros lugares, los teléfonos y direcciones
                mostrados son ficticios. Consultá el mapa para confirmar la información real.
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
                                    <p>
                                        <strong>{grupo.titulo === 'Emergencias' ? 'Teléfono:' : 'Teléfono:'}</strong>{' '}
                                        {servicio.telefono || 'Consultar con el establecimiento'}
                                    </p>
                                    <p>
                                        <strong>{grupo.titulo === 'Emergencias' ? 'Cobertura:' : 'Dirección:'}</strong>{' '}
                                        {servicio.direccion ? (
                                            servicio.direccion
                                        ) : (
                                            <a
                                                href={crearEnlaceMapa(servicio.busqueda)}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Ver ubicaciones en el mapa
                                            </a>
                                        )}
                                    </p>
                                </div>
                                {grupo.titulo === 'Emergencias' ? (
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