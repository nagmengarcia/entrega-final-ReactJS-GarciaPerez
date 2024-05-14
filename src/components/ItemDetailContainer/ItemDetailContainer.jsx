import { useState, useEffect } from "react";
import getProducts from "../../data/data";
import useLoader from "../../hooks/useLoader";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = (idProduct) => {
  const [product, setProduct] = useState({});
  const { idProducto } = useParams();
  const { cargando, mostrarLoader, ocultarLoader, pantallaCarga } = useLoader();

  useEffect(() => {
    mostrarLoader();
    getProducts()
      .then((res) => {
        const prodFind = res.find((p) => p.id === idProducto);
        setProduct(prodFind);
      })
      .catch((error) => console.error(error))
      .finally(() => ocultarLoader());
  }, []);

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
      </div>
    </div>
  );
};

export default ItemDetailContainer;
