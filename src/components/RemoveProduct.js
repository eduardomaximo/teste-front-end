import React from "react";

const RemoveProduct = (props) => {
  const url = "http://localhost:8000/products";

  const removeProductHandler = () => {
    fetch(url + "/" + props.idToRemove, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert(`${props.nameToRemove} was removed successfully.`);
    props.setUpdateProducts(true);
  };

  return (
    <div>
      <form onSubmit={removeProductHandler}>
        <button>Remove Product</button>
      </form>
    </div>
  );
};

export default RemoveProduct;
