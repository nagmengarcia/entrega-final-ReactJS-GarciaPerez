import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItemCount from "../CartItemCount/CartItemCount";
import CartItemsContainer from "./CartItemsContainer";
import EmptyCartMessage from "./EmptyCartMessage";
import "./Cart.css";
import { BiPointer } from "react-icons/bi";

const Cart = () => {
  const { cart, deleteCart, totalPrice } = useContext(CartContext);

  // early return 👇
  if (cart.length === 0) {
    return <EmptyCartMessage />;
  }

  return (
    <div className="cart-container">
      <div className="cart-h1-container">
        <h1 className="cart-h1"> Tu carrito </h1>
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
      <div className="cart-button-group">
        <button className="delete-cart-button" onClick={deleteCart}>
          Eliminar carrito
        </button>
        <Link to="/checkout" className="primary-button left-button">
          Ir a pagar
        </Link>
      </div>
    </div>
  );
};

export default Cart;
