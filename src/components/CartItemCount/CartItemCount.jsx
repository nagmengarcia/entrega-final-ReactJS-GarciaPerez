import { useContext, useState } from "react";
import CartItemCounter from "./CartItemCounter";
import { CartContext } from "../../context/CartContext";
import { update } from "firebase/database";

const CartItemCount = ({ id, stock, quantity }) => {
  const { incrementQuantity, decrementQuantity } = useContext(CartContext);

  const handleClickDecrement = (id) => {
    decrementQuantity(id);
  };

  const handleClickIncrement = (id) => {
    incrementQuantity(id);
  };

  return (
    <CartItemCounter
      handleClickDecrement={handleClickDecrement}
      handleClickIncrement={handleClickIncrement}
      count={quantity}
      id={id}
    />
  );
};

export default CartItemCount;
