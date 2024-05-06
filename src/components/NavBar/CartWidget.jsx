import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css";
const CartWidget = () => {
  const [counter, setCounter] = useState(0);

  // const addition =() =>{
  //     setCounter(counter+1)
  // }

  return (
    <div className="nav-bar__cart">
      <IoCartOutline size={24} color="white" />
      <p className="counter">{counter}</p>
    </div>
  );
};

export default CartWidget;
