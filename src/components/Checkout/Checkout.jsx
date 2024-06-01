import { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";
import validateForm from "../../utils/yupValidation.js";

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mail: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    // le damos formato a los datos que vamos a subir a firebase
    // los datos del comprador :
    const order = {
      customer: { ...formData },
      products: { ...cart },
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };
    try {
      //validamos el form
      const formResponse = await validateForm(formData);
      if (formResponse.status === "success") {
        //ejecutamos la subida a firebase
        generateOrderInFirebase(order);
      } else {
        console.error(formResponse.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // subimos nuestra orden a firebase
  const generateOrderInFirebase = (order) => {
    // creo una coleccion dentro de la Firestore Database
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order)
      .then((res) => setOrderId(res.id))
      .catch((error) => console.error(error))
      .finally(() => {
        //reducir el stock, importantisimo el orden antes de borrar el carrito
        updateStock();
        //luego de que se subio la orden vaciamos el carrito
        deleteCart();
      });
  };

  const updateStock = () => {
    cart.map((cartProduct) => {
      // declaramos y guardamos la cantidad para luego restarla en el stock
      let quantity = cartProduct.quantity;
      //borramos el campo quantity ya que nuestros objetos en la db no poseen esta key
      delete cartProduct.quantity;

      const productRef = doc(db, "products", cartProduct.id);
      setDoc(productRef, {
        ...cartProduct,
        stock: cartProduct.stock - quantity,
      })
        .then(() => console.log("Stock actulizado correctamente"))
        .catch((error) => console.error(error));
    });
  };

  return (
    <div>
      {orderId ? (
        <div>
          <h2> Orden generada con exito!</h2>
          <p> Guarda el id de tu orden: {orderId}</p>
        </div>
      ) : (
        <Form
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default Checkout;
