import axios from "axios";
import "./SearchBar.css";
import { useContext } from "react";
import ProductContext from "../context/Product/ProductContext";

function SearchBar() {
  const { getProductsByTerm } = useContext(ProductContext);

  const searchProduct = async (e) => {
    e.preventDefault();

    const term = document.querySelector("#search-input").value;
    getProductsByTerm(term);

    // const res = await axios.get('http://localhost:4000/api/search?query='+term)
    // console.log(res.data);
  };

  return (
    <div className="container-search d-flex justify-content-center px-5">
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
