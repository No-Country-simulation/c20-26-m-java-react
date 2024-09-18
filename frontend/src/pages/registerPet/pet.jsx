import React, { useState } from "react";
import PropTypes from "prop-types";
import CardAdd from "../../components/cardAdd/cardAdd";
import { useNavigate } from "react-router-dom";

const Pet = () => {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        species: "",
        breed: "",
        gender: "",
        age: "",
        vaccinated: "",
        detalle: "",
        behavior: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
        console.log(formData);
    };

    const handleBtnYes = () => {
        //Guardar en la base de datos y/o localStorage
        setShowPopup(false);
        navigate(0);
    };
    
    const handleBtnNo = () => {
        setShowPopup(false);
        navigate("/user");
    }

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
            <form onSubmit={handleSubmit} className="">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card rounded-4 shadow-lg p-5">
                                    <div className="card-body text-center">
                                        <div className="d-flex justify-content-start align-items-center mb-4">
                                            <i
                                                className="bi bi-caret-left-fill"
                                                style={{
                                                    fontSize: "24px",
                                                    cursor: "pointer",
                                                }}
                                            ></i>
                                            <h4 className="col ms-3">
                                                Registro de Mascota
                                            </h4>
                                        </div>
                                        <div className="mb-4">
                                            <img
                                                src="../assets/pet.jpg"
                                                alt="Usuario"
                                                className="rounded-circle"
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                }}
                                            />
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input
                                                    label="Nombre"
                                                    name="name"
                                                    placeholder="Nombre"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    label="Especie"
                                                    name="species"
                                                    placeholder="Especie"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    label="Raza"
                                                    name="breed"
                                                    placeholder="Raza"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <select
                                                    name="gender"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                    value={formData.gender}
                                                >
                                                    <option value="" disabled>
                                                        Genero
                                                    </option>
                                                    <option value="femenino">
                                                        Femenino/a
                                                    </option>
                                                    <option value="masculino">
                                                        Masculino/a
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    label="Edad"
                                                    type="number"
                                                    name="age"
                                                    placeholder="Edad"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <select
                                                    name="vaccinated"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                    value={formData.vaccinated}
                                                >
                                                    <option value="" disabled>
                                                        Se encuentra vacunado?
                                                    </option>
                                                    <option value="si">
                                                        Si
                                                    </option>
                                                    <option value="no">
                                                        No
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    label="Detalle"
                                                    placeholder="Detalles"
                                                    name="detalle"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <select
                                                    name="behavior"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                    value={formData.behavior}
                                                >
                                                    <option value="" disabled>
                                                        Comportamiento
                                                    </option>
                                                    <option value="bueno">
                                                        Bueno
                                                    </option>
                                                    <option value="regular">
                                                        Regular
                                                    </option>
                                                    <option value="malo">
                                                        Malo
                                                    </option>
                                                </select>
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

export default Pet;
