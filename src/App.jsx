
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar'

import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
         
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
