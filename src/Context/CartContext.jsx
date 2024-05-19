import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProdToCart = (newProd) => {
    setCart([...cart, newProd]);
  };

  const totalCartItemAmount = () => {
    const totalItemAmount = cart.reduce((acc, prod) => acc + prod.quantity, 0);
    return totalItemAmount;
  };

  const deleteCart = () => {
    setCart([]);
  };

  // funcion para detectar productos duplicados al agregar al carrito
  // funcion para eliminar un producto especifico

  return (
    <CartContext.Provider
      value={(cart, addProdToCart, totalCartItemAmount, deleteCart)}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
