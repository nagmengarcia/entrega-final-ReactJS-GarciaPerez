import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import useLoader from "../../hooks/useLoader";
import heroImage from "../../assets/hero-image.jpg";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  // hooks ⏬
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  const { cargando, mostrarLoader, ocultarLoader, pantallaCarga } = useLoader();

  useEffect(() => {
    const gettingDocs = (calledDoc) => {
      mostrarLoader();
      getDocs(calledDoc)
        .then((productsFromDataBase) => {
          const data = productsFromDataBase.docs.map((product) => {
            return { id: product.id, ...product.data() };
          });
          setProducts(data);
        })
        .catch((error) => console.error(error))
        .finally(() => ocultarLoader());
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

    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  return (
    <div className="item-list-container">
      <div>
        {idCategory ? (
          <div className="categories-container">
            Productos{" > "}
            <span className="categories-container__span">
              {capitalizeFirstLetter(idCategory)}
            </span>
          </div>
        ) : (
          <div className="landing-container">
            <img className="hero-image" src={heroImage} />
            <h1 className="welcome-message">Bienvenidos/as 🥊💥</h1>
          </div>
        )}
      </div>
      {cargando ? pantallaCarga : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
