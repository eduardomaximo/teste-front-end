import React from "react";
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
              nome={product.nome}
              fabricado={product.fabricado}
              validade={product.validade}
              perecível={product.perecível}
              preço={product.preço}
              onDelete={product.onDelete}
            />
            <RemoveProduct
              idToRemove={product.id}
              nameToRemove={product.nome}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default ProductsList;
