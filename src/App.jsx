
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Inicio from './components/Inicio/Inicio';
import Footer from './components/Footer/Footer';
import Paisajes from './components/Paisajes/Paisajes';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/paisajes" element={<Paisajes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
