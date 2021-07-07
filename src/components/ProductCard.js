import "./ProductCard.css";

function ProductCard({nombre, precio, moneda, condicion, stock, imgSrc}) {
  return (
    <div className="card col-12 col-sm-12 col-md-4">
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6>{precio} {moneda}</h6>
        <h6>{condicion}</h6>
        <h6>{stock}</h6>
      </div>
    </div>
  );
}

export default ProductCard;
