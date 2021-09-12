import React from "react";
import EditProduct from "./EditProduct";
import Product from "./Product";
import RemoveProduct from "./RemoveProduct";
import Sorter from "./Sorter";

const ProductsList = (props) => {
  const compareProducts = (a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    if (a.name === b.name) {
      return 0;
    }
  };

  console.log("Antes", props.products);
  const sortedProducts = props.products.sort(compareProducts);
  console.log("Depois", props.products);

  return (
    <ul>
      <Sorter>
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
      </Sorter>
    </ul>
  );
};

export default ProductsList;
