import { useState } from "react";
import * as Yup from "yup";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const RegisterService = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    serviceType: "",
    description: "",
    price: "",
    availability: "",
    file: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  
  // Validación con Yup
  const validationSchema = Yup.object().shape({
    serviceType: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.number().required().positive("Debe ser un valor positivo"),
    availability: Yup.string().required(),
    file: Yup.mixed().nullable(),
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
      await validationSchema.validate(formValues, { abortEarly: false });
      setFormErrors({});
      console.log(formValues);
    } catch (err) {
      const errors = {};
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setFormErrors(errors);
    }
  };

  // Componente de input personalizado
  const CustomInput = ({ label, name, type = "text", as, children, ...props }) => {
    const hasError = !!formErrors[name] && touchedFields[name];
    const InputComponent = as || "input";

    return (
      <div className="inputContainer">
        <InputComponent
          name={name}
          type={type}
          value={formValues[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            border: hasError ? "2px solid red" : "1px solid black",
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
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    as: PropTypes.elementType,
    className: PropTypes.string,
    children: ProcessingInstruction
  };

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-auto" style={{ position: "absolute", top: "3rem", left: "40px" }}>
          <i className="bi bi-chevron-left" onClick={() => navigate('/login')} style={{ fontSize: "35px" }}></i>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card rounded-4 shadow-lg p-3">
                <div className="card-body">
                  <h4 className="mb-5">Registro de Servicio</h4>
                  <div className="row g-3">
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Tipo de Servicio" name="serviceType" as="select">
                        <option value="" disabled>Tipo de Servicio</option>
                        <option value="guarderia">Guardería</option>
                        <option value="paseador">Paseador</option>
                        <option value="veterinaria">Veterinaria</option>
                      </CustomInput>
                    </div>
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Precio" name="price" type="number" />
                    </div>
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Disponibilidad" name="availability" as="select">
                        <option value="" disabled>Disponibilidad</option>
                        <option value="mañana">Mañana</option>
                        <option value="tarde">Tarde</option>
                        <option value="noche">Noche</option>
                      </CustomInput>
                    </div>
                    <div className="col-md-6 mb-2">
                      <CustomInput label="Descripción" name="description"/>
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
  );
};

export default RegisterService;
