import { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mail: "",
  });

  const { cart, totalPrice } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // le damos formato a los datos que vamos a subir a firebase
    // los datos del comprador :
    const order = {
      customer: { ...formData },
      products: { ...cart },
      total: totalPrice(),
    };
    console.log(order);
  };

  return (
    <div>
      <Form
        formData={formData}
        handleChangeInput={handleChangeInput}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};

export default Checkout;
