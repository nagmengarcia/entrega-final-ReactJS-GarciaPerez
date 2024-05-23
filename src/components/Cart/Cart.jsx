import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";

import "./Cart.css";

const Cart = () => {
  const { cart, deleteCart, deleteItemById } = useContext(CartContext);
  return (
    <div className="cart-products-container">
      {cart.map((product) => (
        <div key={product.id} className="cart-product-item">
          <img
            src={product.image}
            alt={product.name}
            className="cart-product-item__image"
          />
          <div className="cart-product-item__name-and-quantity">
            <p className="cart-product-item__product-name">{product.name}</p>
            {product.quantity > 1 ? (
              <p className="cart-product-item__product-quantity">
                x{product.quantity}
              </p>
            ) : (
              <p className="cart-product-item__product-quantity"></p>
            )}
          </div>
          <p>AR$ {product.price * product.quantity}</p>
          <button
            className="delete-item-button"
            onClick={() => deleteItemById(product.id)}
          >
            <IoTrashOutline size={24} color="white" />
          </button>
        </div>
      ))}
      <button className="delete-cart-button" onClick={deleteCart}>
        Eliminar carrito
      </button>
    </div>
  );
};

export default Cart;
