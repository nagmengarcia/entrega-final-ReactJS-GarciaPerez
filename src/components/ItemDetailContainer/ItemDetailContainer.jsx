import { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  // const getProduct = () => {
  //   const productRef = doc(db, "products", idProduct);
  //   getDoc(productRef)
  //     .then((productFromDataBase) => {
  //       const data = {
  //         id: productFromDataBase.id,
  //         ...productFromDataBase.data(),
  //       };
  //       setProduct(data);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     })
  //     .finally();
  // };
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
      } else {
        alert("No such document!");
      }
    } catch (error) {
      alert("Error fetching product: " + error.message);
    } finally {
      // Aquí puedes hacer algo independientemente del resultado
      console.log("Fetch attempt finished");
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
