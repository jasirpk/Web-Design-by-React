import React from 'react'

const keys = () => {
    const products = [
    {id: 1,name: "Dell", Brand: 'Dell', price: 1000},
    {id: 2, name: "Lenovo", Brand: 'Lenovo', price: 2000},
    {id: 3, name: "HP", Brand: 'HP', price: 3000},
    ]
  return (
    <div>
   {     products.map((product) => (
            <div className="bg-success text-white m-2 p-2" key={product.id}>
                <h1>{product.name}</h1>
                <h3>Brand: {product.Brand}</h3>
                <h4>Price: ${product.price}</h4>
                <button type='button'>+</button>
            </div>
        ))}
    </div>
  )
}

export default keys