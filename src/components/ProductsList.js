import React from "react";
import Product from "./Product";

const ProductsList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <div>
            <Product
              key={product.id}
              nome={product.nome}
              fabricado={product.fabricado}
              validade={product.validade}
              perecível={product.perecível}
              preço={product.preço}
            />
          </div>
        );
      })}
    </ul>
  );
};

export default ProductsList;
