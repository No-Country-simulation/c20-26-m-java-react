import { useEffect, useState } from "react";
import "./header.scss";
import HEADERLOGO from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../constants/serchData";

const Header = () => {
    const [menuUser, setMenuUser] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dataLog = useSelector((state) => state.indexR);
    const [dataObj, setDataObj] = useState(null);

    useEffect(() => {
        const result = searchData(dataLog.index);
        setDataObj(result);
    }, [dataLog]);
    
    const handleClickUser = () => {
        setMenuUser(!menuUser);
    };

    const closeSession = () => {
        
        dispatch({ type: "RESET_INDEX" });
        navigate("/");
    };

    return (
        <div className="headerWrapper">
            <div className="logoContainer">
                <img className="m-4" src={HEADERLOGO} alt="Logo" />
            </div>
            {dataObj && (
                <div className="loginContainer" onClick={handleClickUser}>
                    <img
                        src={dataObj.photo}
                        alt="userPhoto"
                    />
                    {menuUser && (
                        <div className="menuUser">
                            <p onClick={() => navigate("/user")}>Perfil</p>
                            <p onClick={closeSession}>Cerrar Sesión</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;
