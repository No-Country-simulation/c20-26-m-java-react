import LoginForm from './LoginForm';  // Componente del formulario
import './LoginPage.scss';  // Importar estilos

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Sección izquierda con el formulario */}
      <div className="login-form-container">
        <LoginForm />
      </div>

      {/* Sección derecha con la imagen y el texto */}
      <div className="login-promo-container">
        <img
          src="path/to/dog-image.png" // Cambia esto por la ruta correcta de la imagen del perro
          alt="Dog"
          className="dog-image"
        />
        <h2>Tu mascota, nuestro compromiso</h2>
      </div>
    </div>
  );
};

export default LoginPage;
