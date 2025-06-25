import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Aquí está el Link
import './queja.css';

const Queja = () => {
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
        <Link className='item' to="/">🏚 Inicio</Link>
      </nav>
    <div className="queja-container">
      <div className="titulo">
        <h1>QUEJAS</h1>
      </div>
      <form className="queja-form" onSubmit={handleSubmit}>
        <input type="text" name="nombres" value={formData.nombres} placeholder="Nombres" onChange={handleChange} />
        <input type="text" name="apellidos" value={formData.apellidos} placeholder="Apellidos" onChange={handleChange} />
        <input type="text" name="tipoIdentificacion" value={formData.tipoIdentificacion} placeholder="Tipo Identificación" onChange={handleChange} />
        <input type="text" name="nIdentificacion" value={formData.nIdentificacion} placeholder="N° Identificación" onChange={handleChange} />
        <input type="text" name="telefonoCelular" value={formData.telefonoCelular} placeholder="Teléfono Celular" onChange={handleChange} />
        <input type="text" name="telefonoFijo" value={formData.telefonoFijo} placeholder="Teléfono Fijo" onChange={handleChange} />
        <input type="text" name="direccion" value={formData.direccion} placeholder="Dirección" onChange={handleChange} />
        <textarea name="hechos" value={formData.hechos} placeholder="Hechos" onChange={handleChange}></textarea>
        <textarea name="pretensiones" value={formData.pretensiones} placeholder="Pretensiones" onChange={handleChange}></textarea>
        <button type="submit">📄 Generar</button>
      </form>
    </div>
    </div>
  );
};

export default Queja;
