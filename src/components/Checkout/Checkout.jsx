import { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";

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
    // vemos una vez submiteado el pedido los datos de la orden
    //console.log(order);

    //ejecutamos la subida a firebase
    generateOrderInFirebase(order);

    // subimos nuestra orden a firebase
    const generateOrderInFirebase = (order) => {
      // creo una coleccion dentro de la Firestore Database
      const ordersRef = collection(db, "orders");
      addDoc(ordersRef, order).then((res) => console.log(res));
    };
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
