
// Componente del formulario
import LoginForm from "./loginForm";

import "./loginPage.scss"; // Importar estilos

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-form-container">
                <LoginForm />
            </div>
            <div className="login-promo-container "></div>
        </div>
    );
};

export default LoginPage;
