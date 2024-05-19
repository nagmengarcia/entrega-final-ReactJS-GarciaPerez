import json from "./data.json";
// obtengo json de productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    // simulo retraso de red
    setTimeout(() => {
      resolve(json);
      reject("Error consumiendo la Api");
    }, 1000);
  });
};

export default getProducts;
