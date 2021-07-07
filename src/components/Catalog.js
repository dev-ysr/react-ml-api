import "./Catalog.css";
import ProductCard from "./ProductCard";
import { useContext, useEffect } from "react";
import ProductContext from "../context/Product/ProductContext";

function Catalog() {
  const { products, getProductsByTerm } = useContext(ProductContext);


  return (
    <div className="grid bg-primary row catalog">
      {
          products.map((product, i) => (
              <ProductCard key={product.id} 
              nombre={product.title}
              precio={product.price}
              moneda={product.currency_id}
              condicion={product.condition}
              stock={product.available_quantity}
              imgSrc={product.thumbnail}
              ></ProductCard>
          ))
      }
    </div>
  );
}

export default Catalog;
