import { useContext, useState } from "react";
import CartItemCounter from "./CartItemCounter";
import { CartContext } from "../../context/CartContext";
import { update } from "firebase/database";

const CartItemCount = ({ id, stock, quantity }) => {
  const [count, setCount] = useState(quantity);

  const { cart, updateQuantity } = useContext(CartContext);

  const handleClickDecrement = (id) => {
    if (count > 1) {
      setCount(count - 1);
      console.log(id);
      updateQuantity(id, count);
      // hasta el productId funciona bien: lo llama.
    }
  };
  const handleClickIncrement = (id) => {
    if (count < stock) {
      setCount(count + 1);
      console.log(id);

      updateQuantity(id, count);
    }
  };

  return (
    <CartItemCounter
      handleClickDecrement={handleClickDecrement}
      handleClickIncrement={handleClickIncrement}
      count={count}
      id={id}
    />
  );
};

export default CartItemCount;
