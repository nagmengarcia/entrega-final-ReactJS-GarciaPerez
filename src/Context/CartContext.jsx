import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProdToCart = (newProduct) => {
    setCart([...cart, newProduct]);
  };

  const totalCartItemAmount = () => {
    const totalItemAmount = cart.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    return totalItemAmount;
  };

  const deleteCart = () => {
    setCart([]);
  };

  // funcion para detectar productos duplicados al agregar al carrito
  // funcion para eliminar un producto especifico

  return (
    // creamos nuestro componente con el metodo de contexto llamado .Provider , queremos que se comporte como proveedor de contexto de funciones por ejemplo
    <CartContext.Provider
      value={{ cart, addProdToCart, totalCartItemAmount, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
