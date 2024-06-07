import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItemCount from "../CartItemCount/CartItemCount";
import CartItems from "./CartItems";

import "./Cart.css";

const Cart = ({ product, count }) => {
  const { cart, deleteCart, totalPrice, updateCartItemQuantity } =
    useContext(CartContext);

  // early return 👇
  if (cart.length === 0) {
    return (
      <div className="empty-cart-message">
        <h1 className="empty-cart-title">
          Oh, no ! Parece que tu carrito se encuentra vacío 😞
        </h1>
        <img
          src="https://i.pinimg.com/originals/d9/e2/6e/d9e26e21fd798286ef10c6ec4c991af4.gif"
          width={420}
        />
        <Link to="/" className="back-home-button">
          Regresar a la home
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-h1"> Tu carrito </h1>
      <div className="cart-titles">
        <p className="p-one">PRODUCTO</p>
        <p className="p-two">MODIFICAR</p>
        <p className="p-three">PRECIO</p>
      </div>
      <CartItems />
      <p>Precio total: ${totalPrice().toLocaleString("es-ES")}</p>
      <button className="delete-cart-button" onClick={deleteCart}>
        Eliminar carrito
      </button>
      <Link to="/checkout" className="go-checkout">
        Ir a pagar
      </Link>
    </div>
  );
};

export default Cart;
