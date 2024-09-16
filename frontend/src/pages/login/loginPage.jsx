import LoginForm from './LoginForm';  // Componente del formulario
import './loginPage.scss';  // Importar estilos

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
          src="../../assets/images/Image.png" // Cambia esto por la ruta correcta de la imagen del perro
          alt="Dog"
          className="dog-image"
        />
        <h2>Tu mascota, nuestro compromiso</h2>
      </div>
    </div>
  );
};

export default LoginPage;
