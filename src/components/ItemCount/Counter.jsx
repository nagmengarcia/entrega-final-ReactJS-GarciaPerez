import { IoAddOutline } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";

const Counter = ({
  handleAddToCart,
  handleClickDecrement,
  handleClickIncrement,
  count,
}) => {
  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button
          className="item-count__control-button"
          onClick={handleClickDecrement}
        >
          <IoRemoveOutline size={24} color="#564E56" />
        </button>
        <p>{count}</p>
        <button
          className="item-count__control-button"
          onClick={handleClickIncrement}
        >
          <IoAddOutline size={24} color="#564E56" />
        </button>
      </div>
      <button className="item-count__submit-button" onClick={handleAddToCart}>
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};

export default Counter;
