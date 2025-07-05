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
            <Link to="/peticion">PETICION</Link>
          </li>
          <li>
            <Link to="/queja">QUEJA</Link>
          </li>
          <li>
            <Link to="/reclamo">RECLAMO</Link>
          </li>
          <li>
            <Link to="/sugerencia">SUGERENCIA</Link>
          </li>
          <li>
            <Link to="/asisten">TU ASISTENTE</Link>
          </li>
          <li>
            <Link to="/historial">HISTORIAL</Link>
          </li>
        </ul>
        <button
          type="button"
          className="cerrar-sesion-btn"
          onClick={handleLogout}
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
      </main>
    </div>
  );
}

export default Producto;
