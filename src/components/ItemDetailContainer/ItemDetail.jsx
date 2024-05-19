import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addProdToCart } = useContext(CartContext);

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count };
    addProdToCart(productCart);
  };

  return (
    <div className="item-detail-container">
      <img
        className="item-detail-container__image"
        src={product.image}
        alt={product.description}
      />
      <div className="item-detail-container__product-detail">
        <h1 className="item-detail-container__product-name">{product.name}</h1>
        <h2 className="item-detail-container__product-category">
          {product.category}
        </h2>
        <p className="item-detail-container__product-price">
          AR$ {product.price}
        </p>
        <p className="item-detail-container__product-description">
          {product.description === ""
            ? "No hay descripcion para este producto"
            : product.description}
        </p>
        <ItemCount stock={product.stock} addProduct={addProduct} />
      </div>
    </div>
  );
};

export default ItemDetail;
