import React from "react";

function TableRow({ id, name, stock, price, quantity, total, increment, decrement, deleteItem }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled={stock === quantity ? true : false} onClick={() => increment(id)} >+</button>
        <button disabled={quantity === 0 ? true : false} onClick={() => decrement(id)}>-</button>
        <button onClick={() => deleteItem(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;
