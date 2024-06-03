import { string, mixed, object } from "yup";

let userSchema = object({
  nombre: string("El nombre debe contener solo letras").required(
    "Nombre es un campo requerido"
  ),
  telefono: mixed().required("Telefono es un campo requerido"),
  mail: string()
    .email("Este campo debe de ser de tipo email")
    .required("Email es un campo requerido"),
});

const validateForm = async (formData) => {
  try {
    await userSchema.validate(formData);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
