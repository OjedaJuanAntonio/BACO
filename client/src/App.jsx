import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { VentaPage } from './pages/VentaPage';
import { VentaCard } from './components/ventaCard';
import { DetalleVentaForm } from './pages/DetalleVentaForm';
import { GestionPage } from './pages/GestionPage';
import { GestionFormPage } from './pages/GestionFromPage';
import { RegistroVentaPage } from './pages/RegistroVentaPage';
import {DetalleVentaPage} from './pages/DetalleVentaPage'

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/producto" />} />
        <Route path="/producto" element={<GestionPage />} />
        <Route path="/producto/registrar" element={<GestionFormPage />} />
        <Route path="/producto/:id" element={<GestionFormPage />} />
        <Route path="/venta" element={<VentaPage />} />
        <Route path="/venta/:id" element={<VentaCard />} />
        <Route path="/venta/:id/agregar-detalle" element={<DetalleVentaForm />} />
        <Route path="/venta/nueva" element={<RegistroVentaPage />} />
        <Route path="/venta/nueva/agregar-detalle" element={<DetalleVentaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
