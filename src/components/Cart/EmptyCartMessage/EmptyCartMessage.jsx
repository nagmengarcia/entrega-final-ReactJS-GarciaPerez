import { Link } from "react-router-dom";

const EmptyCartMessage = () => {
  return (
    <div className="empty-cart-message">
      <h1 className="empty-cart-title">
        Oh, no ! Parece que tu carrito se encuentra vacío 😞
      </h1>
      <img
        src="https://i.pinimg.com/originals/d9/e2/6e/d9e26e21fd798286ef10c6ec4c991af4.gif"
        width={420}
      />
      <Link to="/" className="primary-button">
        Regresar a la home
      </Link>
    </div>
  );
};

export default EmptyCartMessage;
