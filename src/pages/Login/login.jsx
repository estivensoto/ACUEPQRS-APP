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

const estilos = {
    formulario: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '100px auto',
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        textAlign: 'center',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
    },
    boton: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default Login;
