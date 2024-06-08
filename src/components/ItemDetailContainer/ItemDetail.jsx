import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addProdToCart, isInCart, cart } = useContext(CartContext);

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count };
    addProdToCart(productCart);
  };

  return (
    <div className="item-detail-container">
      <img
        className="item-detail-container__image"
        src={product.image}
        alt={product.name}
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
        <div>
          {isInCart(product.id) === true ? (
            <div className="button-container">
              <Link to="/cart" className="primary-button">
                IR AL CARRITO
              </Link>
            </div>
          ) : (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
