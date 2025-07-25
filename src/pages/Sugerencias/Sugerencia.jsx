import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // IMPORTA Link aquí
import './sugerencia.css';
import sugerencias from '../../assets/sugerencias.png'; // Ajusta la ruta según tu estructura de carpetas

const Sugerencia = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    tipoIdentificacion: '',
    nIdentificacion: '',
    telefonoCelular: '',
    telefonoFijo: '',
    direccion: '',
    hechos: '',
    pretensiones: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/confirmacion');
  };

  return (
    <div>
      <nav style={{ textAlign: 'center', margin: '20px' }}>
        <Link className="iten" to="/">🏚 Inicio</Link>{' '}
      </nav>
      <div className="sugerencia-container">
        <div className='titulo'><h1 className='tt'>SUGERENCIAS</h1>
        <img className='logo' src={sugerencias} alt="" />
        </div>
        <form className="reclamo-form" onSubmit={handleSubmit}>
          <input type="text" name="nombres" placeholder="Nombres" onChange={handleChange} required />
          <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} required />
          <input type="text" name="tipoIdentificacion" placeholder="Tipo Identificación" onChange={handleChange} required />
          <input type="text" name="nIdentificacion" placeholder="N° Identificación" onChange={handleChange} required />
          <input type="text" name="telefonoCelular" placeholder="Teléfono Celular" onChange={handleChange} />
          <input type="text" name="telefonoFijo" placeholder="Teléfono Fijo" onChange={handleChange} />
          <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
          <textarea name="hechos" placeholder="Hechos" onChange={handleChange}></textarea>
          <textarea name="pretensiones" placeholder="Pretensiones" onChange={handleChange}></textarea>
          <button type="submit">📄 Generar</button>
        </form>
      </div>
    </div>
  );
};

export default Sugerencia;
