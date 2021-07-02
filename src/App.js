import './App.css';
import SearchBar from './components/SearchBar'
import Catalog from './components/Catalog'

function App() {
  return (
    <div className="container bg-dark vh-100">
        <SearchBar></SearchBar>

        <Catalog></Catalog>
    </div>
  );
}

export default App;
