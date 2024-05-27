import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import useLoader from "../../hooks/useLoader";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  const { cargando, mostrarLoader, ocultarLoader, pantallaCarga } = useLoader();

  const gettingDocs = (calledDoc) => {
    getDocs(calledDoc)
      .then((productsFromDataBase) => {
        const data = productsFromDataBase.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setProducts(data);
      })
      .catch((error) => console.error(error));
  };

  const getProducts = () => {
    const productsRef = collection(db, "products");
    gettingDocs(productsRef);
  };

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", idCategory));
    gettingDocs(q);
  };
  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }

    // mostrarLoader();
    // getProducts();
    // .then((res) => {
    //   if (idCategory) {
    //     const productsFilter = res.filter((p) => p.category === idCategory);
    //     setProducts(productsFilter);
    //   } else {
    //     setProducts(res);
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    // })
    // .finally(() => {
    //   console.log("Promesa terminada");
    //   ocultarLoader();
    // });
  }, [idCategory]);

  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  return (
    <div className="item-list-container">
      <h1 className="saludo">
        {idCategory
          ? `Productos> ${capitalizeFirstLetter(idCategory)}`
          : "Bienvenidos a Cultura Visitante."}
      </h1>
      {cargando ? pantallaCarga : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
