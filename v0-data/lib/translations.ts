export type Language = 'es' | 'en'

export const translations = {
  es: {
    nav: {
      places: 'Lugares',
      food: 'Gastronomía',
      stay: 'Alojamiento',
      events: 'Eventos',
      getHere: 'Cómo llegar',
      gallery: 'Galería',
      cta: 'Planificá tu viaje',
    },
    hero: {
      eyebrow: 'Sierras de Córdoba · Argentina',
      title: 'Villa Carlos Paz',
      subtitle:
        'Un rincón serrano donde el lago, las montañas y la calidez de su gente te invitan a quedarte un poco más.',
      primaryCta: 'Descubrí la ciudad',
      secondaryCta: 'Ver galería',
      stat1: 'Habitantes',
      stat1Value: '+95.000',
      stat2: 'Sobre el nivel del mar',
      stat2Value: '642 m',
      stat3: 'Días de sol al año',
      stat3Value: '+300',
    },
    places: {
      eyebrow: 'Lugares para visitar',
      title: 'Íconos que no te podés perder',
      subtitle:
        'Desde el famoso Reloj Cucú hasta las vistas panorámicas de la aerosilla, cada rincón tiene su encanto.',
      items: [
        {
          name: 'Reloj Cucú',
          desc: 'El símbolo de la ciudad: un reloj de estilo alpino que canta cada hora y encanta a chicos y grandes.',
        },
        {
          name: 'Lago San Roque',
          desc: 'Deportes náuticos, paseos en lancha y atardeceres inolvidables sobre el espejo de agua.',
        },
        {
          name: 'Aerosilla al Cerro de la Cruz',
          desc: 'Subí en aerosilla y disfrutá de una vista panorámica de 360° de toda la ciudad y las sierras.',
        },
        {
          name: 'Costanera y La Cascada',
          desc: 'Un paseo verde junto al río, ideal para caminar, andar en bici o tomar unos mates.',
        },
      ],
    },
    food: {
      eyebrow: 'Gastronomía',
      title: 'Sabores de las sierras',
      subtitle:
        'La cocina cordobesa se vive alrededor del fuego. Asados, empanadas y dulces regionales para disfrutar sin apuro.',
      dishes: [
        { name: 'Asado a la parrilla', tag: 'Clásico' },
        { name: 'Empanadas cordobesas', tag: 'Con pasas y azúcar' },
        { name: 'Locro criollo', tag: 'Tradicional' },
        { name: 'Alfajores y dulces regionales', tag: 'Para llevar' },
      ],
      cardTitle: 'Comé como un local',
      cardText:
        'Buscá las parrillas junto al lago para el atardecer, y no te vayas sin probar un chivito serrano acompañado de un buen malbec.',
    },
    stay: {
      eyebrow: 'Dónde alojarse',
      title: 'Descansá entre montañas',
      subtitle:
        'Desde cabañas acogedoras hasta hoteles con vista al lago, hay una opción para cada estilo de viaje.',
      options: [
        {
          name: 'Cabañas serranas',
          desc: 'Madera, naturaleza y tranquilidad. Perfectas para familias y parejas.',
          price: 'Desde $45.000 / noche',
        },
        {
          name: 'Hoteles con vista al lago',
          desc: 'Comodidad, piscina y desayuno frente al San Roque.',
          price: 'Desde $70.000 / noche',
        },
        {
          name: 'Hostels y apart',
          desc: 'Opciones económicas y céntricas, ideales para viajeros jóvenes.',
          price: 'Desde $25.000 / noche',
        },
      ],
      cta: 'Consultar disponibilidad',
    },
    events: {
      eyebrow: 'Eventos y festivales',
      title: 'La ciudad que nunca duerme en verano',
      subtitle:
        'Capital del teatro y el espectáculo, Villa Carlos Paz vibra con obras, música en vivo y festivales todo el año.',
      list: [
        {
          date: 'Ene — Feb',
          name: 'Temporada de Teatro',
          desc: 'Las mejores obras y comedias del país en las salas de la Av. San Martín.',
        },
        {
          date: 'Febrero',
          name: 'Carnaval Serrano',
          desc: 'Comparsas, murgas y color en las calles junto al lago.',
        },
        {
          date: 'Julio',
          name: 'Vacaciones de invierno',
          desc: 'Espectáculos infantiles y agenda cultural para toda la familia.',
        },
        {
          date: 'Todo el año',
          name: 'Ferias y música en vivo',
          desc: 'Artesanos, food trucks y bandas locales en la costanera.',
        },
      ],
    },
    getHere: {
      eyebrow: 'Cómo llegar',
      title: 'Llegar es muy fácil',
      subtitle:
        'A solo 36 km de la ciudad de Córdoba, Villa Carlos Paz está muy bien conectada.',
      ways: [
        {
          mode: 'En auto',
          desc: 'Por la autopista Justiniano Posse (RN 20), a 40 minutos del centro de Córdoba.',
        },
        {
          mode: 'En avión',
          desc: 'Aeropuerto Internacional de Córdoba (COR) a 45 km, con vuelos desde todo el país.',
        },
        {
          mode: 'En colectivo',
          desc: 'Servicios frecuentes desde la Terminal de Córdoba y las principales ciudades.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'Postales de Villa Carlos Paz',
      subtitle: 'Un vistazo a los paisajes que te esperan.',
    },
    footer: {
      tagline: 'Turismo Villa Carlos Paz',
      description:
        'Guía turística de Villa Carlos Paz, en el corazón de las Sierras de Córdoba, Argentina.',
      explore: 'Explorar',
      contact: 'Contacto',
      newsletter: 'Recibí novedades y eventos de la ciudad.',
      emailPlaceholder: 'Tu correo electrónico',
      subscribe: 'Suscribirme',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      places: 'Places',
      food: 'Food',
      stay: 'Stay',
      events: 'Events',
      getHere: 'Getting here',
      gallery: 'Gallery',
      cta: 'Plan your trip',
    },
    hero: {
      eyebrow: 'Sierras de Córdoba · Argentina',
      title: 'Villa Carlos Paz',
      subtitle:
        'A mountain gem where the lake, the sierras and the warmth of its people invite you to stay a little longer.',
      primaryCta: 'Discover the city',
      secondaryCta: 'View gallery',
      stat1: 'Residents',
      stat1Value: '+95,000',
      stat2: 'Above sea level',
      stat2Value: '642 m',
      stat3: 'Sunny days a year',
      stat3Value: '+300',
    },
    places: {
      eyebrow: 'Places to visit',
      title: 'Icons you cannot miss',
      subtitle:
        'From the famous Cuckoo Clock to the panoramic chairlift views, every corner has its charm.',
      items: [
        {
          name: 'The Cuckoo Clock',
          desc: 'The city symbol: an Alpine-style clock that sings every hour and delights all ages.',
        },
        {
          name: 'Lake San Roque',
          desc: 'Water sports, boat rides and unforgettable sunsets over the shimmering water.',
        },
        {
          name: 'Chairlift to Cerro de la Cruz',
          desc: 'Ride the chairlift and enjoy a 360° panoramic view of the whole city and the sierras.',
        },
        {
          name: 'Riverwalk & The Waterfall',
          desc: 'A green riverside path, perfect for walking, cycling or sharing some mate.',
        },
      ],
    },
    food: {
      eyebrow: 'Gastronomy',
      title: 'Flavors of the sierras',
      subtitle:
        'Córdoba cuisine happens around the fire. Barbecue, empanadas and regional sweets to enjoy slowly.',
      dishes: [
        { name: 'Grilled asado', tag: 'Classic' },
        { name: 'Córdoba-style empanadas', tag: 'With raisins & sugar' },
        { name: 'Criollo locro stew', tag: 'Traditional' },
        { name: 'Alfajores & regional sweets', tag: 'To go' },
      ],
      cardTitle: 'Eat like a local',
      cardText:
        'Head to the lakeside grills at sunset, and do not leave without trying a mountain chivito paired with a good Malbec.',
    },
    stay: {
      eyebrow: 'Where to stay',
      title: 'Rest among the mountains',
      subtitle:
        'From cozy cabins to lake-view hotels, there is an option for every travel style.',
      options: [
        {
          name: 'Mountain cabins',
          desc: 'Wood, nature and quiet. Perfect for families and couples.',
          price: 'From $45,000 / night',
        },
        {
          name: 'Lake-view hotels',
          desc: 'Comfort, pool and breakfast facing San Roque lake.',
          price: 'From $70,000 / night',
        },
        {
          name: 'Hostels & aparts',
          desc: 'Budget-friendly, central options, ideal for young travelers.',
          price: 'From $25,000 / night',
        },
      ],
      cta: 'Check availability',
    },
    events: {
      eyebrow: 'Events & festivals',
      title: 'A city that never sleeps in summer',
      subtitle:
        'Capital of theater and live shows, Villa Carlos Paz buzzes with plays, live music and festivals all year.',
      list: [
        {
          date: 'Jan — Feb',
          name: 'Theater Season',
          desc: 'The best plays and comedies in the country on Av. San Martín.',
        },
        {
          date: 'February',
          name: 'Mountain Carnival',
          desc: 'Parades, drums and color in the streets by the lake.',
        },
        {
          date: 'July',
          name: 'Winter holidays',
          desc: "Children's shows and a cultural agenda for the whole family.",
        },
        {
          date: 'All year',
          name: 'Fairs & live music',
          desc: 'Artisans, food trucks and local bands on the riverwalk.',
        },
      ],
    },
    getHere: {
      eyebrow: 'Getting here',
      title: 'Getting here is easy',
      subtitle:
        'Just 36 km from the city of Córdoba, Villa Carlos Paz is very well connected.',
      ways: [
        {
          mode: 'By car',
          desc: 'Via the Justiniano Posse highway (RN 20), 40 minutes from downtown Córdoba.',
        },
        {
          mode: 'By plane',
          desc: 'Córdoba International Airport (COR), 45 km away, with flights nationwide.',
        },
        {
          mode: 'By bus',
          desc: 'Frequent services from the Córdoba terminal and major cities.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Postcards of Villa Carlos Paz',
      subtitle: 'A glimpse of the landscapes waiting for you.',
    },
    footer: {
      tagline: 'Villa Carlos Paz Tourism',
      description:
        'Travel guide to Villa Carlos Paz, in the heart of the Sierras de Córdoba, Argentina.',
      explore: 'Explore',
      contact: 'Contact',
      newsletter: 'Get city news and events.',
      emailPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
      rights: 'All rights reserved.',
    },
  },
} as const

export type Translation = (typeof translations)['es']
