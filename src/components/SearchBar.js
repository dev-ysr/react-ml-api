import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="d-flex justify-content-center px-5">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          name=""
        />
        <a href="/#" className="search-icon">
          <i className="fa fa-search"></i>
        </a>
      </div>
    </div>
  );
}

export default SearchBar;
