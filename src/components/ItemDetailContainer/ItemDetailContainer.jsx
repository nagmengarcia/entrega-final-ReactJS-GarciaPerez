import { useState, useEffect } from "react";
import getProducts from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

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

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
