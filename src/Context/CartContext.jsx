import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProdToCart = (newProduct) => {
    const condition = isInCart(newProduct.id);
    if (condition) {
      const modifiedProducts = cart.map((cartProduct) => {
        if (
          cartProduct.id === newProduct.id &&
          newProduct.stock >= cartProduct.quantity + newProduct.quantity
        ) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + newProduct.quantity,
          };
        } else if (
          cartProduct.id === newProduct.id &&
          newProduct.stock < cartProduct.quantity + newProduct.quantity
        ) {
          alert("Llegaste al máximo de stock para este producto");
          return {
            ...cartProduct,
            quantity: newProduct.stock,
          };
        } else {
          return cartProduct;
        }
      });
      setCart(modifiedProducts);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const updateCartItemQuantity = (productKey, newQuantity) => {
    const newProds = cart.map((p) => {
      p.id === productKey ? { ...p, quantity: newQuantity } : cart;
    });
    setCart(newProds);
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
  const deleteCartItemById = (productId) => {
    const filteredProduct = cart.filter((product) => product.id !== productId);
    setCart(filteredProduct);
  };

  const isInCart = (productId) => {
    const checker = cart.some((cartProduct) => cartProduct.id === productId);
    return checker;
  };

  const totalPrice = () => {
    const finalPrice = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return finalPrice;
  };

  return (
    // creamos nuestro componente con el metodo de contexto llamado .Provider , queremos que se comporte como proveedor de contexto de funciones por ejemplo
    <CartContext.Provider
      value={{
        cart,
        addProdToCart,
        totalCartItemAmount,
        deleteCart,
        deleteCartItemById,
        totalPrice,
        isInCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
