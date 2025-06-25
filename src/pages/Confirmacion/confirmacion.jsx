import React from 'react';
import { useNavigate } from 'react-router-dom';
import './confirmacion.css';

const Confirmacion = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmacion-container">
      <h2>SOLICITUD DE PETICIÓN</h2>
      <div className="mensaje">
        <p><strong>Tu solicitud ha sido enviada exitosamente.</strong></p>
        <p>Muchas gracias, nos estaremos comunicando.</p>
        <button className="boton-regresar" onClick={() => navigate('/')}>REGRESAR</button>
      </div>
      <div className="imagen-esquina">
        <img className='img' src="/icons/Imagen1.jpg" alt="Decoración" />
      </div>
    </div>
  );
};

export default Confirmacion;
