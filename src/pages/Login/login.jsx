import { useState } from 'react';
import './login.css';


function Login({ onLogin }) {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [error, setError] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (usuario === 'admin' && clave === '1234') {
            onLogin();
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="contenedor-principal">
            <div className="texto-bienvenida">
                <img className="imagen-inferior" src='/imagenes/logo.jpg' alt="Decoración" />
                <h1 className='titulo1'>
                    Bienvenido a nuestro canal oficial de PQRS!<br />
                    Tu opinión es fundamental para mejorar cada día.<br />
                    <span>Estamos aquí para escucharte y responderte con transparencia y compromiso.</span>
                </h1>
            </div>

            <form onSubmit={manejarEnvio} className="formulario-login">
                <h2>Iniciar Sesión</h2>
                <div className='inicio'>
                    <input
                        type="text"
                        placeholder="Email - Número de teléfono"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        required
                    />
                    <button type="submit">Iniciar Sesión</button>
                    {error && <p>{error}</p>}
                </div>
                <div className="footer-links">
                    <a href="#">Términos de Servicios</a>
                    <a href="#">Política de privacidad</a>
                </div>
            </form>




        </div>
    );
}

export default Login;
// Este componente Login permite a los usuarios iniciar sesión con un usuario y una contraseña.