import { useState, useEffect } from "react";
import Counter from "./Counter";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleClickIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleAddToCart = () => {
    addProduct(count);
  };

  return (
    <Counter
      handleAddToCart={handleAddToCart}
      handleClickDecrement={handleClickDecrement}
      handleClickIncrement={handleClickIncrement}
      count={count}
    />
  );
};

export default ItemCount;
