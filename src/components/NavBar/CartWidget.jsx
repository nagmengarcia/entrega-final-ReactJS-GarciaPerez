import { IoBagRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalCartItemAmount } = useContext(CartContext);

  const quantity = totalCartItemAmount();

  return (
    <Link to="/cart" className="cart-widget">
      <IoBagRemoveOutline size={24} color="white" />
      <p
        className={
          quantity >= 1
            ? "cart-widget__counter cart-widget__shown"
            : "cart-widget__counter cart-widget__hidden"
        }
      >
        {quantity >= 1 && quantity}
      </p>
    </Link>
  );
};

export default CartWidget;
