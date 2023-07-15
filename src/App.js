import './App.css';
import ProductEntryForm from './components/ProductEntryForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container is-fluid">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Product Entry
      </h1>
      <div className="container is-fluid grid grid-cols-3">
        
          <ProductEntryForm/>
          <ProductList/>
      </div>
    </div>
  );
}

export default App;
