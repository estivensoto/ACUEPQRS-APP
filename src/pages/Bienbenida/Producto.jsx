import { Link } from 'react-router-dom';
import './Producto.css';
import peticion from '../../assets/peticion.png'; // Asegúrate de que la ruta sea correcta
import queja from '../../assets/queja.png'; // Asegúrate de que la ruta sea correcta
import reclamo from '../../assets/reclamo.png'; // Asegúrate de que la ruta sea correcta
import sugerencias from '../../assets/sugerencias.png'; // Asegúrate de que la ruta sea correcta
import asistente from '../../assets/asistente.png'; // Asegúrate de que la ruta sea correcta
import historial from '../../assets/historial.png'; // Asegúrate de que la ruta sea correcta
import menu2 from '../../assets/menu2.png';


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
            <img src={peticion} alt="peticion" />
            <Link to="/peticion">PETICION</Link>
          </li>
          <li>
            <img src={queja} alt="queja" />
            <Link to="/queja">QUEJA</Link>
          </li>
          <li>
            <img src={reclamo} alt="reclamo" />
            <Link to="/reclamo">RECLAMO</Link>
          </li>
          <li>
            <img src={sugerencias} alt="sugerencias" />
            <Link to="/sugerencia">SUGERENCIA</Link>
          </li>
          <li>
            <img src={asistente} alt="asistente" />
            <Link to="/asisten">TU ASISTENTE</Link>
          </li>
          <li>
            <img src={historial} alt="historial" />
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

      <img src={menu2} alt="" />
      </main>
    </div>
  );
}

export default Producto;
