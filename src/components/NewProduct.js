import React, { useRef } from "react";

const NewProduct = (props) => {
  const nomeRef = useRef("");
  const fabricadoRef = useRef("");
  const perecívelRef = useRef("");
  const validadeRef = useRef("");
  const preçoRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    //adicionar validação depois

    const product = {
      nome: nomeRef.current.value,
      fabricado: fabricadoRef.current.value,
      perecível: perecívelRef.current.value === "sim" ? true : false,
      validade: validadeRef.current.value,
      preço: preçoRef.current.value,
    };

    props.onNewProduct(product);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" ref={nomeRef} />
        <label htmlFor="fab">Data de Fabricação</label>
        <input id="fab" type="date" ref={fabricadoRef} />
        <label htmlFor="select">Produto Perecível:</label>
        <select name="select" ref={perecívelRef}>
          <option value="não">Não</option>
          <option value="sim">Sim</option>
        </select>
        <label htmlFor="val">Data de Validade</label>
        <input id="val" type="date" ref={validadeRef} />
        <label htmlFor="preço">Preço</label>
        <input id="preço" type="number" ref={preçoRef} />
        <button>Adicionar Produto</button>
      </form>
    </div>
  );
};

export default NewProduct;
