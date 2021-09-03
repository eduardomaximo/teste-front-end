import React, { useState, useRef } from "react";

const EditProduct = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const nomeRef = useRef("");
  const fabricadoRef = useRef("");
  const perecívelRef = useRef("");
  const validadeRef = useRef("");
  const preçoRef = useRef("");

  const url = "http://localhost:8000/products";

  const editProductHandler = (event) => {
    event.preventDefault();

    const editedProduct = {
      nome: nomeRef.current.value,
      fabricado: fabricadoRef.current.value,
      perecível: perecívelRef.current.value === "sim" ? true : false,
      validade: validadeRef.current.value,
      preço: preçoRef.current.value,
    };
    fetch(url + "/" + props.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        {isEditing && (
          <form onSubmit={editProductHandler}>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              defaultValue={props.nome}
              ref={nomeRef}
            />
            <label htmlFor="fab">Data de Fabricação</label>
            <input
              id="fab"
              type="date"
              defaultValue={props.fabricado}
              ref={fabricadoRef}
            />
            <label htmlFor="select">Produto Perecível:</label>
            <select
              name="select"
              defaultValue={props.perecível}
              ref={perecívelRef}
            >
              <option value="não">Não</option>
              <option value="sim">Sim</option>
            </select>
            <label htmlFor="val">Data de Validade</label>
            <input
              id="val"
              type="date"
              defaultValue={props.validade}
              ref={validadeRef}
            />
            <label htmlFor="preço">Preço</label>
            <input
              id="preço"
              type="number"
              defaultValue={props.preço}
              ref={preçoRef}
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
