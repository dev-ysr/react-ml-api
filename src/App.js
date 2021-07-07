import "./App.css";
import SearchBar from "./components/SearchBar";
import Catalog from "./components/Catalog";
import { ProductState } from "./context/Product/ProductState";

function App() {
  return (
    <ProductState>
      <div className="container bg-dark vh-100">
        <SearchBar></SearchBar>

        <Catalog></Catalog>
      </div>
    </ProductState>
  );
}

export default App;
