
import { Link } from 'react-router-dom';
import './Producto.css';

function Producto() {
  return (
    <div className="producto-container">
      <aside className="menu-lateral">
        <h2>MENU</h2>
        <ul>
          <li>
            <img src="/icons/peticion.png" alt="Petición" />
            <Link to="/peticion">PETICION</Link>
          </li>
          <li>
            <img src="/icons/queja.png" alt="Queja" />
            <Link to="/queja">QUEJA</Link>
          </li>
          <li>
            <img src="/icons/reclamo.png" alt="Reclamo" />
            <Link to="/reclamo">RECLAMO</Link>
          </li>
          <li>
            <img src="/icons/sugerencia.png" alt="Sugerencia" />
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
          <img src="/logo-acuepqrs.png" alt="Logo ACUEpqrs" />
        </div>
      </main>
    </div>
  );
}

export default Producto;
