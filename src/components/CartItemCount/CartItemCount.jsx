import { useState } from "react";
import CartItemCounter from "./CartItemCounter";

const CartItemCount = ({ stock, updateProductQuantity, counterN }) => {
  const [count, setCount] = useState(counterN);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      updateProductQuantity(count);
    }
  };
  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
      updateProductQuantity(count);
    }
  };

  return (
    <CartItemCounter
      handleClickDecrement={handleClickDecrement}
      handleClickIncrement={handleClickIncrement}
      count={count}
    />
  );
};

export default CartItemCount;
