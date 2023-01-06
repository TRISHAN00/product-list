import React from "react";

function TableRow({ id, productName, stock, price, quantity, total, increment, decrement }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
         <button disabled={stock === quantity ? true : false} onClick={() => increment(id)} >+</button>
        <button disabled={quantity === 0} onClick={() => decrement(id)}>-</button>
      </td>
    </tr>
  );
}

export default TableRow;
