import { IoBagRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalCartItemAmount } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <IoBagRemoveOutline size={24} color="white" />
      <p className="cart-widget__counter">{totalCartItemAmount()}</p>
    </Link>
  );
};

export default CartWidget;
