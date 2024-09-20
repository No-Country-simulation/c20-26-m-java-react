import React, { useState } from "react";
import "./pet.scss";
import CardAdd from "../../components/cardAdd/cardAdd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa";
import { addPet } from "../../redux/reducers/regUser";
import { DATASERVICES } from "../../constants/services";

const Pet = () => {
    const BD = DATASERVICES;
    const dataUsr = useSelector((state) => state.regUser);
    const [showPopup, setShowPopup] = useState(false);
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        imgPet: null,
        name: "",
        species: "",
        breed: "",
        gender: "",
        age: "",
        vacs: "",
        details: "",
        behavior: "",
    });

    const handleReset = () => {
        setFormData({
            imgPet: null,
            name: "",
            species: "",
            breed: "",
            gender: "",
            age: "",
            vacs: "",
            details: "",
            behavior: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPet(formData));
        setShowPopup(true);
    };

    const handleBtnYes = () => {
        //Guardar en la base de datos
        handleReset();
        setShowPopup(false);
    };

    const handleBtnNo = () => {
        setShowPopup(false);
        BD.push(dataUsr);
        dispatch({
            type: "SET_INDEX",
            payload: { index: BD.length - 1, typeUser: "normal" },
        });
        navigate("/user");
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imgUrl = URL.createObjectURL(file);
            setFormData((prevData) => ({ ...prevData, imgPet: imgUrl }));
        }
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
                                        <div className="uploadImg">
                                            {preview ? (
                                                <img
                                                    src={preview}
                                                    alt="Vista previa"
                                                />
                                            ) : (
                                                <div className="placeholder"></div> // Placeholder en caso de no haber imgPetn
                                            )}

                                            <label htmlFor="imgPet">
                                                <div className="editIcon">
                                                    <FaPencilAlt />{" "}
                                                </div>
                                            </label>

                                            <input
                                                id="imgPet"
                                                name="imgPet"
                                                type="file"
                                                accept="photo/jpeg, photo/png"
                                                onChange={(event) => {
                                                    const file =
                                                        event.currentTarget
                                                            .files[0];
                                                    handleImageChange(event);
                                                    if (file) {
                                                        const reader =
                                                            new FileReader();
                                                        reader.onloadend =
                                                            () => {
                                                                setPreview(
                                                                    reader.result
                                                                );
                                                            };
                                                        reader.readAsDataURL(
                                                            file
                                                        );
                                                    } else {
                                                        setPreview(null);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input
                                                    label="Nombre"
                                                    name="name"
                                                    placeholder="Nombre"
                                                    value={formData.name}
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    label="Especie"
                                                    name="species"
                                                    placeholder="Especie"
                                                    value={formData.species}
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    label="Raza"
                                                    name="breed"
                                                    placeholder="Raza"
                                                    value={formData.breed}
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
                                                    value={formData.age}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <select
                                                    name="vacs"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                    value={formData.vacs}
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
                                                    name="details"
                                                    className="form-control rounded-pill"
                                                    onChange={handleChange}
                                                    value={formData.details}
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
                    txt={"mascota"}
                    event1={handleBtnYes}
                    event2={handleBtnNo}
                />
            )}
        </div>
    );
};

export default Pet;
