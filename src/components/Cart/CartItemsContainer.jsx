import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import CartItemCount from "../CartItemCount/CartItemCount";

const CartItemsContainer = () => {
  const { cart, deleteCartItemById } = useContext(CartContext);
  return (
    <div className="cart-products-container">
      {cart.map((product) => (
        <div key={product.id} className="cart-product-item">
          <div className="cart-item__image-name-and-price">
            <img
              className="cart-item__image"
              src={product.image}
              alt={product.name}
            />
            <div className="cart-item__name-quantity-and-price">
              {product.quantity > 1 ? (
                <h2 className="cart-item__product-name">
                  {product.name} x{product.quantity}
                </h2>
              ) : (
                <h2 className="cart-item__product-name">{product.name}</h2>
              )}
              <p className="price-per-unity">c/u AR${product.price}</p>
            </div>
          </div>
          <div className="cart-item-second-half">
            <div className="cart-item-count-container">
              <CartItemCount
                id={product.id}
                stock={product.stock}
                quantity={product.quantity}
              />
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
        </div>
      ))}
    </div>
  );
};

export default CartItemsContainer;
