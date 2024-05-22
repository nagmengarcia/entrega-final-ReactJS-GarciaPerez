import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (productId) => {
    const checker = cart.some((cartProduct) => cartProduct.id === productId);
    return checker;
  };

  const addProdToCart = (newProduct) => {
    const checker = isInCart(newProduct);

    if (checker) {
      const filteredCart = cart.map((cartProduct) => {
        if (cartProduct.id === newProduct.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + newProduct.quantity,
          };
        } else {
          return cartProduct;
        }
      });
      setCart(filteredCart);
    } else {
      setCart([...cart, newProduct]);
    }
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
