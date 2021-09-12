import React from "react";
import EditProduct from "./EditProduct";
import Product from "./Product";
import RemoveProduct from "./RemoveProduct";
import { useSelector } from "react-redux";

const ProductsList = (props) => {
  const sortBy = useSelector((state) => state.sorter.sortBy);

  const compareProducts = (a, b) => {
    if (sortBy === "name") {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      if (a.name === b.name) {
        return 0;
      }
    }
    if (sortBy === "price") {
      return a.price - b.price;
    }
    if (sortBy === "fabrication") {
      let x = new Date(a.fabricationDate);
      let y = new Date(b.fabricationDate);

      return x - y;
    }
    if (sortBy === "expiration") {
      let x = new Date(a.goodThrough);
      let y = new Date(b.goodThrough);

      return x - y;
    }
    if (sortBy === "perishable") {
    }
  };

  console.log("Antes", props.products);
  const sortedProducts = props.products.sort(compareProducts);
  console.log("Depois", props.products);

  return (
    <ul>
      {sortedProducts.map((product) => {
        return (
          <div key={product.id}>
            <Product
              id={product.id}
              name={product.name}
              fabricationDate={product.fabricationDate}
              goodThrough={product.goodThrough}
              perishable={product.perishable}
              price={product.price}
            />
            <EditProduct
              id={product.id}
              name={product.name}
              fabricationDate={product.fabricationDate}
              goodThrough={product.goodThrough}
              perishable={product.perishable}
              price={product.price}
              setUpdateProducts={props.setUpdateProducts}
            />
            <RemoveProduct
              idToRemove={product.id}
              nameToRemove={product.name}
              setUpdateProducts={props.setUpdateProducts}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default ProductsList;
