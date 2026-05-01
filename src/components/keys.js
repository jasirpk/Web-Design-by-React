import React, { useState } from 'react'

const Keys = () => {
  const products = [
    { id: 1, name: "Dell", Brand: 'Dell', price: 1000, qty: 0 },
    { id: 2, name: "Lenovo", Brand: 'Lenovo', price: 2000, qty: 0 },
    { id: 3, name: "HP", Brand: 'HP', price: 3000, qty: 0},
  ];
  const [items, setItem] = useState(products);

  const changeQty = (id) => {

    const newItems = items.map((item) => 
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItem(newItems);
  }

  return (
    <div>
      {items.map((product) => (
        <div className="bg-success text-white m-2 p-2" key={product.id}>
          <h1>{product.name}</h1>
          <h3>Brand: {product.Brand}</h3>
          <h4>Price: ${product.price}</h4>
          <h4>Quantity: {product.qty}</h4>
          <button type='button' onClick={() => changeQty(product.id)}>+</button>
        </div>
      ))}
    </div>
  )
}

export default Keys