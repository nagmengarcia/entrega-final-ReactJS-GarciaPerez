import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./Cart.css";

const Cart = () => {
  const { cart, deleteCart, deleteCartItemById, totalPrice } =
    useContext(CartContext);

  // early return 👇
  if (cart.length === 0) {
    return (
      <div className="empty-cart-message">
        <h1 className="empty-cart-title">
          Oh, no ! Parece que tu carrito se encuentra vacío 😞
        </h1>
        <img
          src="https://i.pinimg.com/originals/d9/e2/6e/d9e26e21fd798286ef10c6ec4c991af4.gif"
          width={420}
        />
        <Link to="/" className="back-home-button">
          Regresar a la home
        </Link>
      </div>
    );
  }

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
            onClick={() => deleteCartItemById(product.id)}
          >
            <IoTrashOutline size={24} color="white" />
          </button>
        </div>
      ))}
      <p>Precio total: ${totalPrice().toLocaleString("es-ES")}</p>
      <button className="delete-cart-button" onClick={deleteCart}>
        Eliminar carrito
      </button>
      <Link to="/checkout" className="go-checkout">
        Ir a pagar
      </Link>
    </div>
  );
};

export default Cart;
