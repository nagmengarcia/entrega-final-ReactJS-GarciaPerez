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
          --
        </button>
        <p>{count}</p>
        <button
          className="item-count__control-button"
          onClick={handleClickIncrement}
        >
          +
        </button>
      </div>
      <button className="item-count__submit-button" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
