import { useState, useEffect } from "react";
import getProducts from "../../data/data";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import useLoader from "../../hooks/useLoader";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  const { cargando, mostrarLoader, ocultarLoader, pantallaCarga } = useLoader();

  //solo consumir api al principio
  useEffect(() => {
    mostrarLoader();
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
        ocultarLoader();
      });
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2 className="saludo">{saludo}</h2>
      {cargando ? pantallaCarga : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
