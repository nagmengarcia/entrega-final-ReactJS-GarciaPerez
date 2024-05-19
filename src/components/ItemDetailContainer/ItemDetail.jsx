import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ product }) => {
  const { addProdToCart } = useContext(CartContext);

  const addProd = (count) => {
    const prodCart = { product, quantity: count };
    addProdToCart(prodCart);
  };

  return (
    <div className="i-d-c">
      <img
        className="i-d-c-image"
        src={product.image}
        alt={product.description}
      />
      <div className="i-d-c-detailsContainer">
        <p className="i-d-c-productName">{product.name}</p>
        <p className="i-d-c-productPrice">AR$ {product.price}</p>
        <p className="i-d-c-productDescription">
          {product.description === ""
            ? "No hay descripcion para este producto"
            : product.description}
        </p>
        <ItemCount stock={product.stock} addProd={addProd} />
      </div>
    </div>
  );
};

export default ItemDetail;
