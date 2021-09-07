import React, { useRef } from "react";

const NewProduct = (props) => {
  const nameRef = useRef("");
  const fabricationDateRef = useRef("");
  const perishableRef = useRef("");
  const goodThroughRef = useRef("");
  const priceRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    //adicionar validação depois

    const newProduct = {
      name: nameRef.current.value,
      fabricationDate: fabricationDateRef.current.value,
      perishable: perishableRef.current.value === "sim" ? true : false,
      goodThrough: goodThroughRef.current.value,
      price: priceRef.current.value,
    };

    props.onNewProduct(newProduct);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" ref={nameRef} />
        <label htmlFor="fab">Data de Fabricação</label>
        <input id="fab" type="date" ref={fabricationDateRef} />
        <label htmlFor="select">Produto Perecível:</label>
        <select name="select" ref={perishableRef}>
          <option value="não">Não</option>
          <option value="sim">Sim</option>
        </select>
        <div>
          <label htmlFor="goodThrough">Data de Validade</label>
          <input id="goodThrough" type="date" ref={goodThroughRef} />
        </div>
        <label htmlFor="price">Preço</label>
        <input id="price" type="number" ref={priceRef} />
        <button>Adicionar Produto</button>
      </form>
    </div>
  );
};

export default NewProduct;
