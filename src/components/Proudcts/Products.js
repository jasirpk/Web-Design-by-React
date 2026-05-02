import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { phonesData } from './Product.data';

const Products = () => {
  const [items, setItems] = useState(phonesData);

  const decQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
    );
    setItems(newItem);
  };
  const incQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  };

  return (
    <div>
      <h1 className='bg-info text-white'>Products</h1>
    {items.map((product) => (
    <div className='d-inline-flex' key={product.id}>
      <Card className='shadow p-3 m-2 bg-body rounded' style={{ width: '13rem' }} key={product.id}>
        <Card.Img style={{ height: '15rem' }} className='p-2 ' variant="top" src = {require(`./assets/${product.image}.png`)} />
        <Card.Body>
          <Card.Title className='text-primary'>{product.model}</Card.Title>
          <Card.Text>
            {product.desc}
          </Card.Text>
          <h5>Price: ${product.price.toFixed(2)}</h5>
          <div>
            <p>
              Qty:
              <Button className='m-1' onClick={() => decQty(product.id)}>
                -
              </Button>
              {product.qty}
              <Button className='m-1' onClick={() => incQty(product.id)}>
                +
              </Button>
            </p>
          </div>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
    ))}
    </div>
  )
}

export default Products