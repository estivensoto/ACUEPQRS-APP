import React from 'react';
import './historial.css';

const Historial = () => {
  
  const solicitudes = [
    {
      id: 1,
      tipo: 'Queja',
      fecha: '2025-06-24',
      estado: 'En proceso',
      descripcion: 'Demora en el suministro de agua en el barrio Las Palmas.',
    },
    {
      id: 2,
      tipo: 'Petición',
      fecha: '2025-06-22',
      estado: 'Resuelto',
      descripcion: 'Solicitud de revisión de factura elevada.',
    },
    {
      id: 3,
      tipo: 'Reclamo',
      fecha: '2025-06-20',
      estado: 'Pendiente',
      descripcion: 'Cobro indebido por reconexión del servicio.',
    },
  ];

  return (
    <div className="historial-container">
      <h1>🗂️ Historial de Solicitudes</h1>
      <table className="tabla-historial">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.tipo}</td>
              <td>{item.fecha}</td>
              <td>{item.estado}</td>
              <td>{item.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historial;
