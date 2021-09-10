import { useState, useEffect } from "react";
import "./App.css";
import NewProduct from "./components/NewProduct";
import ProductsList from "./components/ProductsList";

import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import SortBy from "./components/SortBy";

function App() {
  const [products, setProducts] = useState(null);
  const [updateProducts, setUpdateProducts] = useState(true);

  const loginStatus = useSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts([...data]);
      });
    setUpdateProducts(false);
  }, [updateProducts]);

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
    setUpdateProducts(true);
    alert(`Produtc ${newProduct.name} added.`);
  }

  return (
    <div>
      <LoginForm />
      {loginStatus && <NewProduct onNewProduct={onNewProductHandler} />}
      {loginStatus && <SortBy />}
      {products && loginStatus && (
        <ProductsList
          products={products}
          setUpdateProducts={setUpdateProducts}
        />
      )}
    </div>
  );
}

export default App;
