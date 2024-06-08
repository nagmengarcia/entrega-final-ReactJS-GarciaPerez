import { IoAddOutline } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";

const CartItemCounter = ({
  handleClickDecrement,
  handleClickIncrement,
  count,
  id,
}) => {
  return (
    <div className="cart-item-counter">
      <div className="cart-item__controls">
        <button
          className="cart-item__control-button"
          onClick={() => handleClickDecrement(id)}
        >
          <IoRemoveOutline size={24} color="#564E56" />
        </button>
        <p>{count}</p>
        <button
          className="cart-item__control-button"
          onClick={() => handleClickIncrement(id)}
        >
          <IoAddOutline size={24} color="#564E56" />
        </button>
      </div>
    </div>
  );
};

export default CartItemCounter;
