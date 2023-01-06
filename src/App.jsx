import { useState } from "react";
import "./App.css";
import TableRow from "./components/TableRow";

const productList = [
  {
    id: "1",
    productName: "Keyboard",
    stock: 8,
    price: 2500,
  },
  {
    id: "2",
    productName: "Mouse",
    stock: 12,
    price: 1250,
  },
  {
    id: "3",
    productName: "Monitor",
    stock: 6,
    price: 12000,
  },
  {
    id: "4",
    productName: "Gaming Keyboard",
    stock: 12,
    price: 2450,
  },
  {
    id: "5",
    productName: "Gaming Chair",
    stock: 3,
    price: 9500,
  },
];

function App() {
  const [products, setProducts] = useState(
    productList.map((item) => {
      return {
        ...item,
        quantity: 0,
        total: 0,
      };
    })
  );

  const incrementQuantity = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.stock > product.quantity) {
        product.quantity++;
        product.total = product.quantity * product.price;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const decrementQuantity = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.quantity > 0) {
        product.quantity--;
        product.total = product.quantity * product.price;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const total = products.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className="App">
      {/* products input area */}
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>quantaty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              {...product}
              decrement={decrementQuantity}
              increment={incrementQuantity}
            />
          ))}
        </tbody>
      </table>
      {total > 0 && (
        <div>
          <strong>Total: {total} BDT</strong>
        </div>
      )}
    </div>
  );
}

export default App;
