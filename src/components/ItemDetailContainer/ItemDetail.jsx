import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addProdToCart, isInCart, cart } = useContext(CartContext);
  const { show, showItemCount, showLinkToCart } = useComponentSwap();

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

        {/* {
        if( isInCart(product.id) === true ){
          return (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          )
       }else {
        return (
        <button>
          <Link to="/cart">Ir al carrito</Link>
        </button>
        )
       }
      } */}
      </div>
    </div>
  );
};

export default ItemDetail;
