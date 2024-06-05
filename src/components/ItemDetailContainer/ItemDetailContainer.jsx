import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

import { SyncLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  const [productExistence, setProductExistence] = useState("loading");

  const getProduct = async () => {
    try {
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
        setProductExistence("dont exist");
      }
    } catch (error) {
      console.log("Error fetching product: " + error.message);
    } finally {
      // Aquí puedes hacer algo independientemente del resultado
      console.log();
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);

  return (
    <div className="item-detail">
      {productExistence === "exists" ? (
        <ItemDetail product={product} />
      ) : productExistence === "loading" ? (
        <div className="spinner-container">
          <SyncLoader color="#2462E9" className="spinner" />
        </div>
      ) : (
        <div className="product-not-found">
          <p className="product-not-found-message">
            Lo siento, el producto que buscas no existe
          </p>
          <Link to="/" className="back-home">
            Volver a la home
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
