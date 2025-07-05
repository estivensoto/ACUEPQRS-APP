import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Asisten.css';

function Asisten() {
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setMensaje('');
  };

  return (
    <div className="asisten-container">
      
      {/* 🔙 Botón de regreso al inicio */}
      <nav style={{ textAlign: 'center', margin: '20px' }}>
        <Link className="iten" to="/">🏚 Inicio</Link>
      </nav>

      <header className="asisten-header">
        <h1>Tu Asistente Virtual</h1>
        <p>Estamos aquí para ayudarte. ¿En qué podemos asistirte hoy?</p>
      </header>

      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <ul>
          <li><strong>¿Cómo puedo hacer una queja?</strong> — Puedes dirigirte al menú lateral y seleccionar "QUEJA".</li>
          <li><strong>¿Dónde reviso el estado de mi solicitud?</strong> — Recibirás una notificación por correo o puedes consultarlo directamente en nuestra plataforma.</li>
          <li><strong>¿Puedo modificar una petición enviada?</strong> — Sí, siempre y cuando aún no esté en proceso.</li>
        </ul>
      </section>

      <section className="contacto-section">
        <h2>¿No encontraste lo que buscabas?</h2>
        <p>Envíanos tu duda y te responderemos lo más pronto posible.</p>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Escribe tu mensaje aquí..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
        {enviado && <p className="mensaje-exito">✅ Tu mensaje ha sido enviado. ¡Gracias por contactarnos!</p>}
      </section>
    </div>
  );
}

export default Asisten;
