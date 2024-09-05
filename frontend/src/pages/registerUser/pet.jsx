import { Formik, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';



const Pet = () => {

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obligatorio"),
    species: Yup.string().required("Campo obligatorio"),
    race: Yup.string().required("Campo obligatorio"),
    gender: Yup.string().required("Campo obligatorio"),
    age: Yup.string()
        .email("Correo inválido")
        .required("Campo obligatorio"),
    vaccinated: Yup.string().required("Campo obligatorio"),
    description: Yup.string(),
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
                className={props.className}
            />
            <ErrorMessage
                name={props.name}
                component="p"
                className="error-message"
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
                      <h4 className="mb-4">Registro de Usuario</h4>
                      <div className="mb-4">
                        <img src="../public/pet.jpg" alt="Usuario" className="rounded-circle" style={{ width: '100px', height: '100px' }} />
                      </div>
                      <form>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <CustomInput label="Nombre" name="name" className="form-control rounded-pill"/>
                          </div>
                          <div className="col-md-6">
                            <CustomInput label="Especie" name="species" className="form-control rounded-pill" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput label="Raza" name="race" className="form-control rounded-pill" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput name="gender" label="Genero" className="form-control rounded-pill" placeholder="Celular" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput name="age" label="Edad" className="form-control rounded-pill" placeholder="E-mail" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput
                              label="vaccinated"
                              name="vaccinated"
                              as="select"
                              className="form-control rounded-pill "
                            >
                              <option value="" disabled>
                                Tipo de usuario
                              </option>
                              <option value="vaccinated">Dueño de Mascota</option>
                              <option value="prestadorServicio">Prestador de servicios</option>
                            </CustomInput>
                          </div>
                          
                          <div className="col-md-6">
                            <CustomInput name="userName" label="description" className="form-control rounded-pill" placeholder="Nombre de usuario" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput name="password" label="behavior" className="form-control rounded-pill" placeholder="Contraseña" />
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

export default Pet;
