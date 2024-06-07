import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import CartItemCount from "../CartItemCount/CartItemCount";

const CartItems = () => {
  const { cart, deleteCartItemById, updateCartItemQuantity } =
    useContext(CartContext);

  return (
    <div className="cart-products-container">
      {cart.map((product) => (
        <div key={product.id} className="cart-product-item">
          <div className="cart-item__image-name-and-price">
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
          <CartItemCount
            key={product.id}
            stock={product.stock}
            counterN={product.quantity}
          />
          <button
            className="delete-item-button"
            onClick={() => deleteCartItemById(product.id)}
          >
            <IoTrashOutline size={24} color="white" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
