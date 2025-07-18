import { Link } from 'react-router-dom';
import './Producto.css';
import peticion from '../../assets/peticion.png';
import queja from '../../assets/queja.png';
import reclamo from '../../assets/reclamo.png';
import sugerencias from '../../assets/sugerencias.png';
import asistente from '../../assets/asistente.png';
import historial from '../../assets/historial.png';
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
        <div className="texto-info">
          <p>
            <strong>
              Esta página está diseñada para facilitar la gestión de Peticiones, Quejas, Reclamos y Sugerencias (PQRS)
            </strong>{' '}
            relacionadas con el servicio de acueducto.
            Aquí podrás comunicarte directamente con nosotros, hacer seguimiento a tus solicitudes y contribuir a mejorar
            la calidad del servicio que prestamos a la comunidad.
          </p>
        </div>

        <img className="logo2" src={menu2} alt="Logo ACUEPqrs" />
      </main>
    </div>
  );
}

export default Producto;
