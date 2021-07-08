import "./Catalog.css";
import ProductCard from "./ProductCard";
import { useContext, useState } from "react";
import ProductContext from "../context/Product/ProductContext";

function Catalog() {
  const {
    orderProductsBy,
    conditions,
    filterProductsByCondition,
    filteredProducts,
  } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(0)

  const orderBy = (order) => {
    orderProductsBy(order);
  };

  const filterByCondition = (condition) => {
    filterProductsByCondition(condition);
  };

  const nextPage = () =>{
    setCurrentPage(currentPage + 5);
  }

  const prevPage = () =>{
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
    }
  }

  const productsPagination = () => {
    return filteredProducts.slice(currentPage, currentPage + 5);
  };

  return (
    <div className="grid bg-primary row catalog">
      <div className="row">
        <div className="col-12">
        <button key="prev" onClick={prevPage}>Anteriores</button>
        <button key="next" onClick={nextPage}>Siguientes</button>
        </div>
      </div>
      

      <div className="row">
        <div className="col-12">
        <div className="dropdown">
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
          <button onClick={() => orderBy("asc")} className="dropdown-item">
            Precio ascendente
          </button>
          <button onClick={() => orderBy("des")} className="dropdown-item">
            Precio descendente
          </button>
        </div>
      </div>

      <div className="dropdown mx-2">
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
          {conditions.map((condition) => (
            <button
              onClick={() => filterByCondition(condition)}
              className="dropdown-item"
            >
              {condition}
            </button>
          ))}
        </div>
      </div>
        </div>
      </div>

      {productsPagination().map((product, i) => (
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
