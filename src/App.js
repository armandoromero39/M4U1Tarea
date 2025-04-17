//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import NovedadesPage from "./pages/NovedadesPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ServiciosPage from './pages/ServiciosPage';
import GaleriaPage from './pages/GaleriaPage';
import PageTitle from './PageTitle';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<><PageTitle title="Home Page"/><HomePage/></>}/>
          <Route path="nosotros" element={<><PageTitle title="Nosotros"/><NosotrosPage/></>}/>
          <Route path="servicios" element={<><PageTitle title="Servicios"/><ServiciosPage/></>}/>
          <Route path="galeria" element={<><PageTitle title="Galería"/><GaleriaPage/></>}/>
          <Route path="novedades" element={<><PageTitle title="Novedades"/><NovedadesPage/></>}/>
          <Route path="contacto" element={<><PageTitle title="Contacto"/><ContactoPage/></>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
