import React from "react";

const Product = (props) => {
  return (
    <li>
      <h2>{props.nome}</h2>
      <h3>R${props.preço}</h3>
      <h4>Fabricado em: {props.fabricado}</h4>
      {props.perecível && <h4>Data de validade: {props.validade}</h4>}
    </li>
  );
};

export default Product;
