import "./ProductCard.css";

function ProductCard({nombre}) {
  return (
    <div className="card col-12 col-sm-12 col-md-4">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
