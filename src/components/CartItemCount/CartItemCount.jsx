import { useContext, useState } from "react";
import CartItemCounter from "./CartItemCounter";
import { CartContext } from "../../context/CartContext";
CartContext;

const CartItemCount = ({ productId, stock, itemCount }) => {
  const [count, setCount] = useState(itemCount);

  const { cart, deleteCartItemById, updateCartItemQuantity } =
    useContext(CartContext);

  const updateQuantity = (newQuantity) => {
    updateCartItemQuantity(productId, newQuantity);
  };

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      console.log(productId);
      updateCartItemQuantity(productId, count);
    }
  };
  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
      console.log(productId);
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
