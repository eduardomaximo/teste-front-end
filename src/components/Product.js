import React from "react";

const Product = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>R${props.price}</h3>
      <h4>Fabricado em: {props.fabricationDate}</h4>
      {props.perishable && <h4>Data de validade: {props.goodThrough}</h4>}
    </li>
  );
};

export default Product;
