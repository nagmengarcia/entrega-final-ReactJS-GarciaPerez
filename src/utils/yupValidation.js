import { string, mixed, object } from "yup";

let userSchema = object({
  nombre: string().required(),
  telefono: mixed().required(),
  mail: string().email().required(),
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
