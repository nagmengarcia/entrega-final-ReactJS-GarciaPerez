import { useState, useEffect } from "react";
import getProducts from "../../data/data";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  //solo consumir api al principio
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Promesa terminada");
      });
  }, []);

  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
