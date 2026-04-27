import React, { useState } from 'react'
import { Button, Table, Accordion, Card, ListGroup, Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  const [color, setColor] = useState("Green");
  const buttonHandler = () => {
    setColor("Red");
  }
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count +1);
  }
  const decrement  = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>My Favourite color is {color}</h1>
      <Button onClick={buttonHandler}>Change Color</Button>
      <br />
      <br />
      <h1>Counter is {count}</h1>
      <Button onClick={increment} className="m-2 bg-success">Increment</Button>
      <Button onClick={decrement} className="m-2 bg-danger">Decrement</Button>
    </>
  );
}

export default Header