import { Formik, Field, useField } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';



const Register = () => {

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
                className={props.className}
            />
        </div>
    );
  };

  CustomInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
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
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    > 
      {() => (
        <form className="">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card rounded-4 shadow-lg p-5">
                    <div className="card-body text-center">
                    <div className="d-flex justify-content-start align-items-center mb-4">
                      <i className="bi bi-caret-left-fill" style={{ fontSize: '24px', cursor: 'pointer' }}></i>
                      <h4 className="col ms-3">Registro de Usuario</h4>
                    </div>
                      <div className="mb-4">
                        <img src="../public/perfil.jpg" alt="Usuario" className="rounded-circle" style={{ width: '100px', height: '100px' }} />
                      </div>
                      <form>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <CustomInput label="Nombre" name="name" className="form-control rounded-pill"/>
                          </div>
                          <div className="col-md-6">
                            <CustomInput label="DNI" name="dni" className="form-control rounded-pill" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput
                              label="Tipo de usuario"
                              name="classUser"
                              as="select"
                              className="form-control rounded-pill "
                            >
                              <option value="" disabled>
                                Tipo de usuario
                              </option>
                              <option className="" value="dueñoMascota">Dueño de Mascota</option>
                              <option value="prestadorServicio">Prestador de servicios</option>
                            </CustomInput>
                          </div>
                          <div className="col-md-6">
                            <CustomInput name="phone" label="Telefono" className="form-control rounded-pill" placeholder="Celular" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput name="email" label="correo" className="form-control rounded-pill" placeholder="E-mail" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput name="city" label="Ciudad" className="form-control rounded-pill" placeholder="Ciudad" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput name="userName" label="Nombre de usuario" className="form-control rounded-pill" placeholder="Nombre de usuario" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput name="password" label="Contraseña" className="form-control rounded-pill" placeholder="Contraseña" />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-warning w-100 rounded-pill mt-4">Enviar</button>
                      </form>
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
