import { Link } from 'react-router-dom';
import './Producto.css';
import peticion from '../../assets/peticion.png';
import queja from '../../assets/queja.png';
import reclamo from '../../assets/reclamo.png';
import sugerencias from '../../assets/sugerencias.png';
import logo from '../../assets/logo.jpg';


function Producto() {
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
      </aside>

      <main className="contenido-principal">
        <p>
          <strong>Esta página está diseñada para facilitar la gestión de Peticiones, Quejas, Reclamos y Sugerencias (PQRS)</strong> relacionadas con el servicio de acueducto.
          Aquí podrás comunicarte directamente con nosotros, hacer seguimiento a tus solicitudes y contribuir a mejorar la calidad del servicio que prestamos a la comunidad.
        </p>
        <div className="logo-acue">
          <img src={logo} alt="Logo ACUEpqrs" />
        </div>
      </main>
      <div>
        <Link className='boton' to="/login">Cerrar Sesion</Link>
      </div>
    </div>
  );
}

export default Producto;