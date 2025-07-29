import { Link } from 'react-router-dom';
import './Producto.css';

function Producto({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="producto-container">
      <aside className="menu-lateral">
        <h2>MENU</h2>
        <ul>
          <li>
            <img src={peticion} alt="Petición" />
            <Link to="/peticion">PETICION</Link>
          </li>
          <li>
            <img src={queja} alt="Queja" />
            <Link to="/queja">QUEJA</Link>
          </li>
          <li>
            <img src={reclamo} alt="Reclamo" />
            <Link to="/reclamo">RECLAMO</Link>
          </li>
          <li>
            <img src={sugerencias} alt="Sugerencia" />
            <Link to="/sugerencia">SUGERENCIA</Link>
          </li>
        </ul>
        <button
          type="button"
          className="cerrar-sesion-btn"
          onClick={handleLogout} // o directamente onClick={onLogout} si no usás handleLogout
        >
          CERRAR SESIÓN
        </button>

      </aside>

      <main className="contenido-principal">
        <p>
          <strong>
            Esta página está diseñada para facilitar la gestión de Peticiones, Quejas, Reclamos y Sugerencias (PQRS)
          </strong>{' '}
          relacionadas con el servicio de acueducto.
          Aquí podrás comunicarte directamente con nosotros, hacer seguimiento a tus solicitudes y contribuir a mejorar
          la calidad del servicio que prestamos a la comunidad.
        </p>

        <img src={menu2} alt="menu" className="menu-imagen" />

      </main>
    </div>
  );
}

export default Producto;
