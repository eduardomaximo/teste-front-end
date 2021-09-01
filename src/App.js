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
        console.log(data);
      });
  }, []);

  async function onNewProductHandler(product) {
    const response = await fetch("http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setProducts(...products, data);
    console.log(products);
  }

  const deteleMethod = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  async function onDeleteHandler(props) {
    const response = await fetch(
      "http://localhost:8000/products" + props.products.id,
      { deteleMethod }
    );

    const data = await response.json();
    console.log(data);
  }

  async function onEditHandler(props) {
    const response = await fetch(
      "http://localhost:8000/products/" + props.products.id,
      {
        method: "PUT",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <NewProduct onNewProduct={onNewProductHandler} />
      {products && (
        <ProductsList
          products={products}
          onDelete={onDeleteHandler}
          onEdit={onEditHandler}
        />
      )}
    </div>
  );
}

export default App;
