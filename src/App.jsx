import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login/login.jsx';
import Producto from './pages/Bienbenida/Producto.jsx';
import Peticion from './pages/Peticion/Peticion.jsx';
import Queja from './pages/Queja/Queja.jsx';
import Reclamo from './pages/Reclamo/Reclamo.jsx';
import Sugerencia from './pages/Sugerencias/Sugerencia.jsx';
import Confirmacion from './pages/Confirmacion/confirmacion.jsx';
import Asisten from './Asisten'; // <-- Asegurate que exista el archivo

function App() {
  const [autenticado, setAutenticado] = useState(false);

  const handleLogin = () => {
    setAutenticado(true);
  };

  const handleLogout = () => {
    setAutenticado(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        {!autenticado ? (
          <Route path="*" element={<Login onLogin={handleLogin} />} />
        ) : (
          <>
            <Route path="/" element={<Producto onLogout={handleLogout} />} />
            <Route path="/peticion" element={<Peticion />} />
            <Route path="/queja" element={<Queja />} />
            <Route path="/reclamo" element={<Reclamo />} />
            <Route path="/sugerencia" element={<Sugerencia />} />
            <Route path="/confirmacion" element={<Confirmacion />} />
            <Route path="/asisten" element={<Asisten />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
