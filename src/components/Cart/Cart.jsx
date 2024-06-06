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
    <div className="cart-container">
      <h1 className="cart-h1"> Tu carrito </h1>
      <div className="cart-titles">
        <p>Producto</p>
        <p>Modificar</p>
        <p>Precio</p>
      </div>
      <div className="cart-products-container">
        {cart.map((product) => (
          <div key={product.id} className="cart-product-item">
            <div className="cart-item-image-and-price">
              <img
                src={product.image}
                alt={product.name}
                className="cart-item__image"
              />
              <div className="cart-item__name-quantity-and-price">
                {product.quantity > 1 ? (
                  <h2 className="cart-item-h2">
                    {product.name} x{product.quantity}
                  </h2>
                ) : (
                  <h2 className="cart-item-h2">{product.name}</h2>
                )}
                <p className="price-per-unity">c/u AR${product.price}</p>
              </div>
            </div>

            <p className="product-price">
              AR$ {product.price * product.quantity}
            </p>
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
    </div>
  );
};

export default Cart;
