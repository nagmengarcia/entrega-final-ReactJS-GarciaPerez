import { useState } from "react";
import Formulario from "./Formulario";

const Checkout = () => {
  const [datosForm, setDatosForm] = usestate({
    nombre: "",
    telefono: "",
    mail: "",
  });

  const handleChangeInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Formulario />
    </div>
  );
};

export default Checkout;
