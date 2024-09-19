import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DATASERVICES } from "../../constants/services";
import { useDispatch, useSelector } from "react-redux";
import CardAdd from "../../components/cardAdd/cardAdd";
import { addTypeService } from "../../redux/reducers/regUser";

const RegisterService = () => {
    const BD = DATASERVICES;
    const dataUsr = useSelector((state) => state.regUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [formValues, setFormValues] = useState({
        type: "",
        textInfo: "",
        price: "",
        availability: "",
    });

    const handleReset = () => {
        setFormValues({
            type: "",
            textInfo: "",
            price: "",
            availability: "",
        });
    };

    const handleBtnYes = () => {
        // Save to the database
        handleReset();
        setShowPopup(false);
    };

    const handleBtnNo = () => {
        setShowPopup(false);
        console.log(dataUsr);
        BD.push(dataUsr);
        dispatch({
            type: "SET_INDEX",
            payload: { index: BD.length - 1, typeUser: "service" },
        });
        navigate("/user");
    };

    // Handle changes in the inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTypeService(formValues));
        setShowPopup(true);
    };

    return (
        <div
            style={{
                marginTop: "25px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="row">
                    <div
                        className="col-auto"
                        style={{
                            position: "absolute",
                            top: "3rem",
                            left: "40px",
                        }}
                    >
                        <i
                            className="bi bi-chevron-left"
                            onClick={() => navigate("/login")}
                            style={{ fontSize: "35px" }}
                        ></i>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center pt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="card rounded-4 shadow-lg p-3">
                                    <div className="card-body">
                                        <h4 className="mb-5">
                                            Registro de Servicio
                                        </h4>
                                        <div className="row g-3">
                                            <div className="col-md-6 mb-2">
                                                <select
                                                    name="type"
                                                    value={formValues.type}
                                                    onChange={handleChange}
                                                    className="form-select rounded-pill"
                                                >
                                                    <option value="" disabled>
                                                        Tipo de Servicio
                                                    </option>
                                                    <option value="guarderia">
                                                        Guardería
                                                    </option>
                                                    <option value="paseador">
                                                        Paseador
                                                    </option>
                                                    <option value="veterinaria">
                                                        Veterinaria
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <input
                                                    type="number"
                                                    name="price"
                                                    value={formValues.price}
                                                    onChange={handleChange}
                                                    className="form-control rounded-pill"
                                                    placeholder="Precio"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <select
                                                    name="availability"
                                                    value={
                                                        formValues.availability
                                                    }
                                                    onChange={handleChange}
                                                    className="form-select rounded-pill"
                                                >
                                                    <option value="" disabled>
                                                        Disponibilidad
                                                    </option>
                                                    <option value="mañana">
                                                        Mañana
                                                    </option>
                                                    <option value="tarde">
                                                        Tarde
                                                    </option>
                                                    <option value="noche">
                                                        Noche
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <input
                                                    type="text"
                                                    name="textInfo"
                                                    value={formValues.textInfo}
                                                    onChange={handleChange}
                                                    className="form-control rounded-pill"
                                                    placeholder="Descripción"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-warning w-100 rounded-pill mt-4"
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {showPopup && (
                <CardAdd
                    txt={"usuario"}
                    event1={handleBtnYes}
                    event2={handleBtnNo}
                />
            )}
        </div>
    );
};

export default RegisterService;
