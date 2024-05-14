import { useState, useEffect } from "react";
import getProducts from "../../data/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (idProduct) => {
  const [product, setProduct] = useState({});
  const { idProducto } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        const prodFind = res.find((p) => p.id === idProducto);
        setProduct(prodFind);
      })
      .catch((error) => console.error(error))
      .finally();
  }, []);

  return (
    <div>
      <img src={product.image} alt={product.description} />
      <div>
        <p>{product.name}</p>
        <p>AR$ {product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
