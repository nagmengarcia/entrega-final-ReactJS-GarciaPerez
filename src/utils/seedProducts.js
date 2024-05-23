import db from "../db/db.js";
import { addDoc } from "firebase/firestore";

const products = [];
const seedProducts = () => {
  products.map(({ id, ...rest }) => {
    addDoc(collection(db, "products"), rest);
  });
};
seedProducts();
