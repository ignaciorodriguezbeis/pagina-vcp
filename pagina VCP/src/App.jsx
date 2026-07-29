import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Inicio from './components/Inicio/Inicio';
import Footer from './components/Footer/Footer';

import Actividades from './components/Actividades/actividades';
import Excursion from './components/Actividades/excursion';
import Espectaculos from './components/Actividades/espectaculos';
import Aventura from './components/Actividades/aventura';
import Deportes from './components/Actividades/deportes';
import Infantiles from './components/Actividades/infantiles';

import Alojamiento from './components/Alojamientos/alojamiento';
import Hosteleria from './components/Alojamientos/hosteleria';
import CabañaApart from './components/Alojamientos/cabañaApart';
import Campings from './components/Alojamientos/campings';
import Alquileres from './components/Alojamientos/alquileres';

import Gastronomia from './components/Gastronomia/gastronomia';
import Restaurantes from './components/Gastronomia/restaurantes';
import Bares from './components/Gastronomia/bares';
import Heladerias from './components/Gastronomia/heladerias';
import Cafeterias from './components/Gastronomia/cafeterias';
import Cervecerias from './components/Gastronomia/cervecerias';

import Login from './components/Navbar/Login/login';

import './App.css';

function App() {
  return (
    <HashRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/excursion" element={<Excursion />} />
        <Route path="/espectaculos" element={<Espectaculos />} />
        <Route path="/aventura" element={<Aventura />} />
        <Route path="/deportes" element={<Deportes />} />
        <Route path="/infantil" element={<Infantiles />} />

        <Route path="/alojamientos" element={<Alojamiento />} />
        <Route path="/hosteleria" element={<Hosteleria />} />
        <Route path="/cabañaApart" element={<CabañaApart />} />
        <Route path="/campings" element={<Campings />} />
        <Route path="/alquileres" element={<Alquileres />} />

        <Route path="/gastronomia" element={<Gastronomia />} />
        <Route path="/restaurantes" element={<Restaurantes />} />
        <Route path="/bares" element={<Bares />} />
        <Route path="/heladerias" element={<Heladerias />} />
        <Route path="/cafeterias" element={<Cafeterias />} />
        <Route path="/cervecerias" element={<Cervecerias />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Inicio />} />

      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
