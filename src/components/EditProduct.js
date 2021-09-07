import React, { useState, useRef } from "react";

const EditProduct = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const nameRef = useRef("");
  const fabricationDateRef = useRef("");
  const perishableRef = useRef("");
  const goodThroughRef = useRef("");
  const priceRef = useRef("");

  const url = "http://localhost:8000/products";

  const editProductHandler = (event) => {
    event.preventDefault();

    const editedProduct = {
      name: nameRef.current.value,
      fabricationDate: fabricationDateRef.current.value,
      perishable: perishableRef.current.value === "sim" ? true : false,
      goodThrough: goodThroughRef.current.value,
      price: priceRef.current.value,
    };
    fetch(url + "/" + props.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    });
    setIsEditing(false);
    props.setUpdateProducts(true);
  };

  return (
    <div>
      <div>
        {isEditing && (
          <form onSubmit={editProductHandler}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              defaultValue={props.name}
              ref={nameRef}
            />
            <label htmlFor="fabricationDate">Data de Fabricação</label>
            <input
              id="fabricationDate"
              type="date"
              defaultValue={props.fabricationDate}
              ref={fabricationDateRef}
            />
            <label htmlFor="select">Produto Perecível:</label>
            <select
              name="select"
              defaultValue={props.perishable}
              ref={perishableRef}
            >
              <option value="não">Não</option>
              <option value="sim">Sim</option>
            </select>
            <label htmlFor="goodThrough">Data de Validade</label>
            <input
              id="goodThrough"
              type="date"
              defaultValue={props.goodThrough}
              ref={goodThroughRef}
            />
            <label htmlFor="price">Preço</label>
            <input
              id="price"
              type="number"
              defaultValue={props.price}
              ref={priceRef}
            />
            <button onClick={() => setIsEditing(false)}>Cancelar</button>
            <button>Salvar</button>
          </form>
        )}
        <div>
          {!isEditing && (
            <button onClick={() => setIsEditing(true)}> Edit Product</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
