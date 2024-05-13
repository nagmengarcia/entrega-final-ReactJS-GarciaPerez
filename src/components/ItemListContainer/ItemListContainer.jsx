import { useState, useEffect } from "react";
import getProducts from "../../data/data";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  //solo consumir api al principio
  useEffect(() => {
    getProducts()
      .then((res) => {
        if (idCategory) {
          const productsFilter = res.filter((p) => p.category === idCategory);
          setProducts(productsFilter);
        } else {
          setProducts(res);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Promesa terminada");
      });
  }, [idCategory]);

  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
