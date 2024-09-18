<<<<<<< HEAD
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
=======
import * as Yup from "yup";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Pet = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    species: "",
    race: "",
    gender: "",
    age: "",
    vaccinated: "",
    detalle: "",
    behavior: "",
    file: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({}); // Para saber qué campos fueron tocados
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  // Validación con Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    species: Yup.string().required(),
    race: Yup.string().required(),
    gender: Yup.string().required(),
    age: Yup.string().required(),
    vaccinated: Yup.string().required(),
    detalle: Yup.string(),
    behavior: Yup.string().required(),
  });

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Manejo del evento onBlur para marcar los campos como tocados
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });

    // Validar el campo individualmente al perder el foco
    validationSchema
      .validateAt(name, formValues)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: undefined });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      });
  };

  // Manejo del submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validar el formulario completo
      await validationSchema.validate(formValues, { abortEarly: false });
      setFormErrors({});
      console.log(formValues); // Aquí puedes hacer lo que desees con los valores del formulario
    } catch (err) {
      const errors = {};
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setFormErrors(errors);
    }
  };

  // Manejo de cambio en la imagen
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormValues({ ...formValues, file });
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Componente de input personalizado
  const CustomInput = ({ label, name, type = "text", as, children, ...props }) => {
    const InputComponent = as || "input";
    const hasError = !!formErrors[name] && touchedFields[name]; // Verifica si el campo tiene error y si fue tocado

    return (
      <div className="inputContainer">
        <InputComponent
          name={name}
          type={type}
          value={formValues[name]}
          onChange={handleChange}
          onBlur={handleBlur} // Controla cuando el usuario abandona el campo
          style={{
            border: hasError ? "2px solid red" : "1px solid black", // Borde rojo si hay error
            padding: "0.375rem 0.75rem",
            borderRadius: "8px"
          }}
          placeholder={label}
          className={`form-control ${props.className} rounded-pill`}
          {...props}
        >
          {children}
        </InputComponent>
      </div>
    );
  };

  CustomInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    as: PropTypes.elementType,
    children: PropTypes
  };

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-auto" style={{ position: "absolute", top: "3rem", left: "40px" }}>
          <i className="bi bi-chevron-left" onClick={() => navigate('/login')} style={{ fontSize: "35px" }}></i>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card rounded-4 shadow-lg p-3">
                <div className="card-body">
                  <h4 className="mb-4">Registro de Mascota</h4>
                  <div className="mb-5 d-flex flex-column align-items-center">
                    {preview ? (
                      <img
                        src={preview}
                        className="rounded-circle mb-2"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        alt="Vista previa"
                      />
                    ) : (
                      <div
                        className="rounded-circle bg-secondary d-flex justify-content-center align-items-center mb-2"
                        style={{ width: '100px', height: '100px' }}
                      >
                        <i className="bi bi-person-circle mb-5" style={{ fontSize: '48px', color: '#fff' }}></i>
                      </div>
                    )}
                    <label
                      htmlFor="file"
                      className="btn btn-outline-primary rounded-pill"
                    >
                      {preview ? "Cambiar foto" : "Subir foto"}
                    </label>
                    <input
                      id="file"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Nombre" name="name" />
                    </div>
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Especie" name="species" />
                    </div>
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Raza" name="race" />
                    </div>
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Género" name="gender" as="select">
                        <option value="" disabled>
                          Género
                        </option>
                        <option value="femenino">Femenino/a</option>
                        <option value="masculino">Masculino/a</option>
                      </CustomInput>
                    </div>
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Edad" name="age" />
                    </div>
                    <div className="col-md-6 mb-2">
                      <CustomInput label="¿Vacunado?" name="vaccinated" as="select">
                        <option value="" disabled>
                          ¿Vacunado?
                        </option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                      </CustomInput>
                    </div>
                    <div className="col-md-6">
                      <CustomInput label="Detalle" name="detalle" />
                    </div>
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Comportamiento" name="behavior" as="select">
                        <option value="" disabled>
                          Comportamiento
                        </option>
                        <option value="bueno">Bueno</option>
                        <option value="regular">Regular</option>
                        <option value="malo">Malo</option>
                      </CustomInput>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-warning w-100 rounded-pill mt-4">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
>>>>>>> origin/frontend-agus
};

export default Pet;
