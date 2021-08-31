import { useState, useEffect } from "react";
import "./App.css";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="App">
      {products && <ProductsList products={products} />}
    </div>
  );
}

export default App;
