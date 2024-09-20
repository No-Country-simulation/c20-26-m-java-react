import { useState } from "react";
import "./loginForm.scss"; // Importar los estilos del formulario
import { useDispatch } from "react-redux";
import { DATASERVICES } from "../../constants/services";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const BD = DATASERVICES;

    const [infoLogin, setInfoLogin] = useState({
        username: "",
        password: "",
    });

    const compareLog = () => {
        for (let i = 0; i < BD.length; i++) {
            if (
                BD[i].mail === infoLogin.username &&
                BD[i].pass === infoLogin.password
            ) {
                dispatch({ type: "SET_INDEX", payload: { index: i, typeUser: BD[i].typeUser} });
                return;
            }
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Lógica de inicio de sesión
        compareLog();
    };

    return (
        <div className="login-form custom-card card rounded-4 shadow-lg p-5">
            <h2>Inicia Sesión</h2>
            <p>¿Aún no tienes cuenta? | <a href="/register" >REGISTRATE</a></p>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Mail"
                    onChange={(e) =>
                        setInfoLogin({ ...infoLogin, username: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) =>
                        setInfoLogin({ ...infoLogin, password: e.target.value })
                    }
                    required
                />
                <button type="submit" className="login-button">
                    INICIAR SESIÓN
                </button>
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
