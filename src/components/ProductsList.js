import React from "react";
import Product from "./Product";

const ProductsList = (props) => {
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <Product
            key={product.id}
            nome={product.nome}
            fabricado={product.fabricado}
            validade={product.validade}
            perecível={product.perecível}
            preço={product.preço}
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
