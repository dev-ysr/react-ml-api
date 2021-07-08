import "./SearchBar.css";
import { useContext } from "react";
import ProductContext from "../context/Product/ProductContext";

function SearchBar() {
  const { getProductsByTerm } = useContext(ProductContext);

  const searchProduct = async (e) => {
    e.preventDefault();

    const term = document.querySelector("#search-input").value;
    getProductsByTerm(term);
  };

  return (
    <div className="container-search my-3">
      <div className="search">
        <form onSubmit={searchProduct}>
          <input
            id="search-input"
            type="text"
            className="search-input"
            placeholder="Search..."
            name=""
          />
        </form>
        <a href="/#" className="search-icon">
          <i className="fa fa-search"></i>
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
