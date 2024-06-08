import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItemCount from "../CartItemCount/CartItemCount";
import CartItemsContainer from "./CartItemsContainer";
import EmptyCartMessage from "./EmptyCartMessage";
import "./Cart.css";
import { BiPointer } from "react-icons/bi";

const Cart = () => {
  const { cart, deleteCart, totalPrice, updateCartItemQuantity } =
    useContext(CartContext);

  // early return 👇
  if (cart.length === 0) {
    return <EmptyCartMessage />;
  }

  return (
    <div className="cart-container">
      <div className="cart-h1-and-delete-button">
        <h1 className="cart-h1"> Tu carrito </h1>
        <button className="delete-cart-button" onClick={deleteCart}>
          Eliminar carrito
        </button>
      </div>
      <div className="cart-titles">
        <p className="p-one">PRODUCTO</p>
        <p className="p-two">MODIFICAR</p>
        <p className="p-three">PRECIO</p>
      </div>
      <CartItemsContainer />
      <p className="total-price">
        Precio total: ${totalPrice().toLocaleString("es-ES")}
      </p>

      <Link to="/checkout" className="primary-button left-button">
        Ir a pagar
      </Link>
    </div>
  );
};

export default Cart;
