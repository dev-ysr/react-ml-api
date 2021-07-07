import "./Catalog.css";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import ProductContext from "../context/Product/ProductContext";

function Catalog() {
  const { products, orderProductsBy, conditions } = useContext(ProductContext);

  const orderBy = (order) => {
    orderProductsBy(order);
    
  };

  return (
    <div className="grid bg-primary row catalog">
      <div className="dropdown my-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Ordenar por
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button onClick={() => orderBy("asc")} className="dropdown-item">Precio ascendente</button>
          <button onClick={() => orderBy("des")} className="dropdown-item">Precio descendente</button>
        </div>
      </div>

      <div className="dropdown my-3 mx-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filtrar por condición
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

         {conditions.map(condition => (
          <button onClick={() => orderBy("asc")} className="dropdown-item">{condition}</button>
         ))}
          
        </div>
      </div>

      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          nombre={product.title}
          precio={product.price}
          moneda={product.currency_id}
          condicion={product.condition}
          stock={product.available_quantity}
          imgSrc={product.thumbnail}
        ></ProductCard>
      ))}
    </div>
  );
}

export default Catalog;
