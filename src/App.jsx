import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/Login/login.jsx';
import Producto from './pages/Bienbenida/Producto.jsx';
import Peticion from './pages/Peticion/Peticion.jsx';
import Queja from './pages/Queja/Queja.jsx';
import Reclamo from './pages/Reclamo/Reclamo.jsx';
import Sugerencia from './pages/Sugerencias/Sugerencia.jsx';
import Confirmacion from './pages/Confirmacion/confirmacion.jsx';

function App() {
  const [autenticado, setAutenticado] = useState(false);

  const handleLogin = () => {
    console.log("🔥 handleLogin en App ejecutado");
    setAutenticado(true);
  };

  if (!autenticado) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Producto />} />
        <Route path="peticion" element={<Peticion />} />
        <Route path="/queja" element={<Queja />} />
        <Route path="/reclamo" element={<Reclamo />} />
        <Route path="/sugerencia" element={<Sugerencia />} />
        <Route path="/confirmacion" element={<Confirmacion />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
