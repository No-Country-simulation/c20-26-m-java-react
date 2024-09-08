import React from "react";
import "./formRegister.scss";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import FormButton from "../ux/formButton/formButton";

const FormRegister = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Campo obligatorio"),
        dni: Yup.string().required("Campo obligatorio"),
        classUser: Yup.string().required("Campo obligatorio"),
        phone: Yup.string().required("Campo obligatorio"),
        email: Yup.string()
            .email("Correo inválido")
            .required("Campo obligatorio"),
        city: Yup.string().required("Campo obligatorio"),
        userName: Yup.string().required("Campo obligatorio"),
        password: Yup.string().required("Campo obligatorio"),
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
                <Form className="formWrapper">
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
                        <option value="dueño">Dueño</option>
                        <option value="veterinario">Veterinario</option>
                        <option value="peluquero">Peluquero</option>
                        <option value="paseador">Paseador</option>
                    </CustomInput>
                    <CustomInput label="Teléfono" name="phone" />
                    <CustomInput label="Correo" name="email" />
                    <CustomInput label="Ciudad" name="city" />
                    <CustomInput
                        label="Nombre de usuario"
                        name="userName"
                        />
                    <CustomInput label="Contraseña" name="password" />
                    <FormButton txt="Enviar" />
                </Form>
            )}
        </Formik>
    );
};

export default FormRegister;
