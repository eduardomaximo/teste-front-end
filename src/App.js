import { useState, useEffect } from "react";
import "./App.css";
import NewProduct from "./components/NewProduct";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  async function onNewProductHandler(newProduct) {
    const response = await fetch("http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setProducts([...products, data]);
    alert(`Produto ${newProduct.nome} foi adicionado com sucesso.`);
  }

  return (
    <div className="App">
      <NewProduct onNewProduct={onNewProductHandler} />
      {products && <ProductsList products={products} />}
    </div>
  );
}

export default App;
