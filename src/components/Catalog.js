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

  const [currentPage, setCurrentPage] = useState(0);

  const orderBy = (order) => {
    orderProductsBy(order);
  };

  const filterByCondition = (condition) => {
    filterProductsByCondition(condition);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
    }
  };

  const productsPagination = () => {
    return filteredProducts.slice(currentPage, currentPage + 5);
  };

  return (
    <div className="bg-primary container">
      <div className="row col-12 justify-content-around justify-content-md-start py-3">
        <div className="dropdown col-6 col-md-3">
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

        <div className="dropdown col-6 col-md-3">
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

      <div className="row bg-warning pt-3">
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

      <div className="row col-12 justify-content-around py-4">
        <button key="prev" onClick={prevPage} className="btn btn-success col-5">
          Anteriores
        </button>
        <button key="next" onClick={nextPage} className="btn btn-success col-5">
          Siguientes
        </button>
      </div>
    </div>
  );
}

export default Catalog;
