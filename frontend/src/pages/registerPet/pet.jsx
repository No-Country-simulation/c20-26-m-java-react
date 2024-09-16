import { Formik, Field, useField } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const Pet = () => {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    species: Yup.string().required("Campo obligatorio"),
    race: Yup.string().required("Campo obligatorio"),
    gender: Yup.string().required("Campo obligatorio"),
    age: Yup.string().required("Campo obligatorio"),
    vaccinated: Yup.string().required("Campo obligatorio"),
    detalle: Yup.string(),
    behavior: Yup.string().required("Campo obligatorio"),
  });

  const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
      <div className="inputContainer">
        <Field
          {...field}
          {...props}
          type={props.type || "text"}
          style={{
            border: hasError ? "2px solid red" : "1px solid black",
          }}
          placeholder={label}
          className={`form-control ${props.className} rounded-pill`}
        />
      </div>
    );
  };

  CustomInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  return (
    <Formik
      initialValues={{
        name: "",
        species: "",
        race: "",
        gender: "",
        age: "",
        vaccinated: "",
        detalle: "",
        behavior: "",
        file: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue }) => (
        <form className="text-center">
          <div className="row">
            <div className="col-auto" style={{ position: "absolute", top: "3rem", left: "40px" }}>
              <i className="bi bi-chevron-left" onClick={()=>navigate('/login')} style={{ fontSize: "35px" }}></i>
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
                          onChange={(event) => {
                            const file = event.target.files[0];
                            setFieldValue("file", file);
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setPreview(reader.result);
                            };
                            if (file) {
                              reader.readAsDataURL(file);
                            }
                          }}
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
                          <CustomInput
                            label="Género"
                            name="gender"
                            as="select"
                          >
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
                          <CustomInput
                            label="¿Vacunado?"
                            name="vaccinated"
                            as="select"
                          >
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
                          <CustomInput
                            label="Comportamiento"
                            name="behavior"
                            as="select"
                          >
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
      )}
    </Formik>
  );
};

export default Pet;
