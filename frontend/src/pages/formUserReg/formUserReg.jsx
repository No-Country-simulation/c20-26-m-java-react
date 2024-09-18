import React, { useState } from "react";
import "./formUserReg.scss";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaRegEyeSlash, FaPencilAlt } from "react-icons/fa";
import FormButton from "../../components/ux/formButton/formButton";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    image: Yup.mixed().required("Se requiere una imagen"),
    name: Yup.string().required("Campo obligatorio"),
    dni: Yup.string()
        .required("Campo obligatorio")
        .matches(/^\d{8}$/, "Debe contener 8 números"),
    classUser: Yup.string().required("Campo obligatorio"),
    phone: Yup.string()
        .required("Campo obligatorio")
        .min(10, 'Minimo 10 numeros')
        .matches(/^\d*$/, 'Solo números'),
    email: Yup.string().email("Correo inválido").required("Campo obligatorio"),
    city: Yup.string().required("Campo obligatorio"),
    password: Yup.string()
        .required("Campo obligatorio")
        .matches(/^(?=.*[0-9])/, "Al menos un número"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
        .required("Campo obligatorio"),
});

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    if (props.as === "select") {
        return (
            <div className="inputContainer">
                <Field {...field} {...props} className="field">
                    {props.children}
                </Field>
                <ErrorMessage
                    name={props.name}
                    component="p"
                    className="error-message"
                />
            </div>
        );
    }

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
                className="field"
            />
            <ErrorMessage
                name={props.name}
                component="p"
                className="error-message"
            />
        </div>
    );
};

const FormUserReg = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();
    
    const hanldeFormSubmit = (values) => {
        if(values.classUser === "usuarioComun"){
            navigate('/pet')
        }
    }

    return (
        <Formik
            initialValues={{
                image: null,
                name: "",
                dni: "",
                classUser: "",
                phone: "",
                email: "",
                city: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                hanldeFormSubmit(values);
            }}
        >
            {({ setFieldValue }) => (
                <Form className="formUsrWrapper">
                    <div className="uploadImg">
                        {preview ? (
                            <img src={preview} alt="Vista previa" />
                        ) : (
                            <div className="placeholder"></div> // Placeholder en caso de no haber imagen
                        )}

                        <label htmlFor="image">
                            <div className="editIcon">
                                <FaPencilAlt />{" "}
                            </div>
                        </label>

                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/jpeg, image/png"
                            onChange={(event) => {
                                const file = event.currentTarget.files[0];
                                setFieldValue("image", file);

                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setPreview(reader.result);
                                    };
                                    reader.readAsDataURL(file);
                                } else {
                                    setPreview(null);
                                }
                            }}
                        />
                    </div>
                    <div className="formInputs">
                        <div className="col1">
                            <CustomInput label="Nombre" name="name" />
                            <CustomInput label="DNI" name="dni" />
                            <CustomInput
                                label="Tipo de usuario"
                                name="classUser"
                                as="select"
                            >
                                <option value="" disabled>
                                    Tipo de usuario
                                </option>
                                <option value="usuarioComun">Dueño</option>
                                <option value="servicios">
                                    Prestador de Servicios
                                </option>
                            </CustomInput>
                            <CustomInput label="Teléfono" name="phone" type="tel" />
                        </div>
                        <div className="col2">
                            <CustomInput label="Correo" name="email" />
                            <CustomInput label="Ciudad" name="city" />
                            <div className="passwordContainer">
                                <CustomInput
                                    type={showPassword ? "text" : "password"}
                                    label="Contraseña"
                                    name="password"
                                />
                                {showPassword ? (
                                    <FaRegEyeSlash
                                        className="statusPassword"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                ) : (
                                    <FaRegEye
                                        className="statusPassword"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                )}
                            </div>
                            <div className="passwordContainer">
                                <CustomInput
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    label="Confirmar contraseña"
                                    name="confirmPassword"
                                />
                                {showConfirmPassword ? (
                                    <FaRegEyeSlash
                                        className="statusPassword"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                    />
                                ) : (
                                    <FaRegEye
                                        className="statusPassword"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="userFormBtnContainer">
                        <FormButton txt="Enviar" />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormUserReg;