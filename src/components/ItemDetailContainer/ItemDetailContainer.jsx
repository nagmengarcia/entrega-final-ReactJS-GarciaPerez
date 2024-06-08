import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";
import { BsDatabaseX } from "react-icons/bs";
import { LuSearchX } from "react-icons/lu";
import useLoader from "../../hooks/useLoader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();
  const { cargando, mostrarLoader, ocultarLoader, pantallaCarga } = useLoader();

  const [productExistence, setProductExistence] = useState();

  const getProduct = async () => {
    try {
      mostrarLoader();
      const productRef = doc(db, "products", idProduct);
      const productFromDataBase = await getDoc(productRef);
      if (productFromDataBase.exists()) {
        const data = {
          id: productFromDataBase.id,
          ...productFromDataBase.data(),
        };
        setProduct(data);
        setProductExistence("exists");
      } else {
        setProductExistence("dont-exists");
      }
    } catch (error) {
      setProductExistence("error");
    } finally {
      ocultarLoader();
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);

  const ItemDetailContainerStatements = () => {
    switch (productExistence) {
      case "exists":
        return <ItemDetail product={product} />;
      case "dont-exists":
        return (
          <div className="product-not-found">
            <LuSearchX size={64} color="#564E56" />
            <p className="product-not-found-message">
              Lo siento, el producto que buscas no existe
            </p>
            <Link to="/" className="back-home">
              Volver a la home
            </Link>
          </div>
        );
      case "error":
        return (
          <div className="product-not-found">
            <BsDatabaseX size={64} color="#564E56" />
            <p className="product-not-found-message">
              Error comunicandose con la base de datos, intentalo nuevamente mas
              tarde.
            </p>
            <Link to="/" className="back-home">
              Volver a la home
            </Link>
          </div>
        );
      default:
        return pantallaCarga;
    }
  };

  return <div className="item-detail">{ItemDetailContainerStatements()}</div>;
};

export default ItemDetailContainer;
