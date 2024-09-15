import { Formik, Field, useField } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';
import { useState } from "react";

const Register = () => {
  const [preview, setPreview] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    dni: Yup.string().required(),
    classUser: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string()
        .email("Correo inválido")
        .required(),
    city: Yup.string().required(),
    userName: Yup.string().required(),
    password: Yup.string().required(),
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
        dni: "",
        classUser: "",
        phone: "",
        email: "",
        city: "",
        userName: "",
        password: "",
        file: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue }) => (
        <form className="text-center">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="card rounded-4 shadow-lg p-5">
                    <div className="card-body">
                      <h4 className="mb-4">Registro de Usuario</h4>
                      <div className="mb-4 d-flex flex-column align-items-center">
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
                        <div className="col-md-6">
                          <CustomInput label="Nombre" name="name" />
                        </div>
                        <div className="col-md-6">
                          <CustomInput label="DNI" name="dni" />
                        </div>
                        <div className="col-md-6">
                          <CustomInput
                            label="Tipo de usuario"
                            name="classUser"
                            as="select"
                          >
                            <option value="" disabled>
                              Tipo de usuario
                            </option>
                            <option className="" value="dueñoMascota">Dueño de Mascota</option>
                            <option value="prestadorServicio">Prestador de servicios</option>
                          </CustomInput>
                        </div>
                        <div className="col-md-6">
                          <CustomInput name="phone" label="Telefono" />
                        </div>
                        <div className="col-md-6">
                          <CustomInput name="email" label="Correo" />
                        </div>
                        <div className="col-md-6">
                          <CustomInput name="city" label="Ciudad" />
                        </div>
                        <div className="col-md-6">
                          <CustomInput name="userName" label="Nombre de usuario" />
                        </div>
                        <div className="col-md-6">
                          <CustomInput name="password" label="Contraseña" />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-warning w-100 rounded-pill mt-4">Enviar</button>
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

export default Register;
