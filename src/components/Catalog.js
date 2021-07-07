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
              <ProductCard key={i} nombre={product.title}></ProductCard>
          ))
      }
    </div>
  );
}

export default Catalog;
