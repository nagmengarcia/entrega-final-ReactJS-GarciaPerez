import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItemCount from "../CartItemCount/CartItemCount";
import CartItems from "./CartItems";
import EmptyCartMessage from "./EmptyCartMessage/EmptyCartMessage";

import "./Cart.css";

const Cart = ({ product, count }) => {
  const { cart, deleteCart, totalPrice, updateCartItemQuantity } =
    useContext(CartContext);

  // early return 👇
  if (cart.length === 0) {
    return <EmptyCartMessage />;
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
