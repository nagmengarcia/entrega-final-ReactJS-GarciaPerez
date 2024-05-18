import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to={`/detalle/${product.id}`} className="card-item">
      <img className="card-item__img" src={product.image} />
      <p className="card-item__product-title">{product.name}</p>
      <p className="card-item__product-price">
        AR$ {product.price.toLocaleString("es-ES")}
      </p>
    </Link>
  );
};

export default Item;
