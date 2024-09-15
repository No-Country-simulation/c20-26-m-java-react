import { useState } from 'react';
import './LoginForm.scss';  // Importar los estilos del formulario

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión
    console.log("Usuario:", username, "Contraseña:", password);
  };

  return (
    <div className="login-form custom-card card rounded-4 shadow-lg p-5">
      <h2>Inicia Sesión</h2>
      <p>¿Aún no tienes cuenta? | REGISTRATE</p>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">INICIAR SESIÓN</button>
      </form>

      <div className="google-login">
        <button className="google-button">
          <i className="bi bi-google"></i> Inicia Sesión con Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
