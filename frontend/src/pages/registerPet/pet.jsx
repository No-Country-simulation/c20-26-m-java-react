import { Formik, Field, useField } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';


const Pet = () => {

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
                      <h4 className="col ms-3">Registro de Mascota</h4>
                    </div>
                      <div className="mb-4">
                        <img src="../assets/pet.jpg" alt="Usuario" className="rounded-circle" style={{ width: '100px', height: '100px' }} />
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
                            <CustomInput
                              label="gender"
                              name="classUser"
                              as="select"
                              className="form-control rounded-pill "
                            >
                              <option value="" disabled>
                                Genero
                              </option>
                              <option value="femenino">Femenino/a</option>
                              <option value="masculino">Masculinno/a</option>
                            </CustomInput>
                          </div>
                          <div className="col-md-6">
                            <CustomInput label="Edad" name="age" className="form-control rounded-pill" placeholder="E-mail" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput
                              label="Se encuentra vacunado?"
                              name="classUser"
                              as="select"
                              className="form-control rounded-pill "
                            >
                              <option value="" disabled>
                                Se encuentra vacunado?
                              </option>
                              <option className="" value="si">Si</option>
                              <option value="no">No</option>
                            </CustomInput>
                          </div>
                          <div className="col-md-6">
                            <CustomInput label="Detalle" name="detalle" className="form-control rounded-pill" placeholder="Nombre de usuario" />
                          </div>
                          <div className="col-md-6">
                            <CustomInput
                              label="Comportamiento"
                              name="classUser"
                              as="select"
                              className="form-control rounded-pill "
                            >
                              <option value="" disabled>
                                Comportamiento
                              </option>
                              <option value="si">Bueno</option>
                              <option value="no">Regular</option>
                              <option value="no">Malo</option>
                            </CustomInput>
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
