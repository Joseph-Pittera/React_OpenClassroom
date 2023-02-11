import React from "react";

export default function ItemButtonsCart({ cart, updateCart, name }) {
  function addItem(name) {
    updateCart(
      cart.map((item) => {
        if (item.name === name) item.amount++;
        return item;
      })
    );
  }

  function removeItem(name) {
    updateCart(
      cart.map((item) => {
        if (item.name === name && item.amount) item.amount--;
        return item;
      })
    );
  }

  function deleteItem(name) {
    updateCart(cart.filter((item) => item.name !== name));
  }
  return (
    <div>
      <button onClick={() => addItem(name)}> + </button>
      <button onClick={() => removeItem(name)}> - </button>
      <button onClick={() => deleteItem(name)}> X </button>
    </div>
  );
}
