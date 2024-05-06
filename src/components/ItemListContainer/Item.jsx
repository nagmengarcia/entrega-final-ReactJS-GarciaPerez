const Item = ({ product }) => {
  return (
    <div className="card-item">
      <img className="card-item__img" src={product.image} />
      <p className="card-item__product-title">{product.name}</p>
      <p className="card-item__product-price">${product.price}</p>
    </div>
  );
};

export default Item;
