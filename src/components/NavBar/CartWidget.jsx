import { useContext, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import "./CartWidget.css";

const CartWidget = () => {
  const { totalCartItemAmount } = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  // const addition =() =>{
  //     setCounter(counter+1)
  // }

  return (
    <Link to="/cart" className="nav-bar__cart">
      <IoCartOutline size={24} color="white" />
      <p className="counter">{counter}</p>
    </Link>
  );
};

export default CartWidget;
