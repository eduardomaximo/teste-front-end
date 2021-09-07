import React from "react";
import EditProduct from "./EditProduct";
import Product from "./Product";
import RemoveProduct from "./RemoveProduct";

const ProductsList = (props) => {
  return (
    <ul>
      {props.products.map((product) => {
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
