import React, { useRef, useState } from "react";

const NewProduct = (props) => {
  const [isPerishable, setIsPerishable] = useState(false);

  const nameRef = useRef("");
  const fabricationDateRef = useRef("");
  const perishableRef = useRef("");
  const goodThroughRef = useRef("");
  const priceRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const newProduct = {
      name: nameRef.current.value,
      fabricationDate: fabricationDateRef.current.value,
      perishable: perishableRef.current.value === "sim" ? true : false,
      goodThrough: goodThroughRef.current.value,
      price: priceRef.current.value,
    };

    const startDate = new Date(newProduct.fabricationDate);
    const endDate = new Date(newProduct.goodThrough);

    if (startDate.getTime() > endDate.getTime()) {
      alert("Expiration date must be set later than fabrication date.");
      return;
    }

    props.onNewProduct(newProduct);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Nome</label>
        <input id="name" type="text" ref={nameRef} required />
        <label htmlFor="fab">Data de Fabricação</label>
        <input id="fab" type="date" ref={fabricationDateRef} required />
        <label htmlFor="select">Produto Perecível:</label>
        <select
          name="select"
          ref={perishableRef}
          onChange={(e) => {
            e.target.value === "sim"
              ? setIsPerishable(true)
              : setIsPerishable(false);
          }}
        >
          <option value="não">Não</option>
          <option value="sim">Sim</option>
        </select>
        {isPerishable && (
          <div>
            <label htmlFor="goodThrough">Data de Validade</label>
            <input id="goodThrough" type="date" ref={goodThroughRef} />
          </div>
        )}
        <label htmlFor="price">Preço</label>
        <input
          id="price"
          type="number"
          ref={priceRef}
          required
          min={0}
          step={5}
        />
        <button>Adicionar Produto</button>
      </form>
    </div>
  );
};

export default NewProduct;
