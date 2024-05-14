const ItemDetail = ({ product }) => {
  return (
    <div className="i-d-c">
      <img
        className="i-d-c-image"
        src={product.image}
        alt={product.description}
      />
      <div className="i-d-c-detailsContainer">
        <p className="i-d-c-productName">{product.name}</p>
        <p className="i-d-c-productPrice">AR$ {product.price}</p>
        <p className="i-d-c-productDescription">
          {product.description === ""
            ? "No hay descripcion para este producto"
            : product.description}
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
