import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'john';
  const a = 5;
  const b = 10;
  const message = () => {
    return "Welcome to React!";
  }
  return (

    <>
      <h1 className='heading'>Hello, React!</h1>
      <h1> My name is {name}</h1>
      <h1>{a + b}</h1>
      <h2>{message()}</h2>

      <div>
        <table>
          <Row />
          <Column />
        </table>
      </div>
    </>
  );
}

function Row() {
  return (
    <div>
      <tr>
        <th>Name</th>
        <th>Address</th>
      </tr>
    </div>
  )
}
function Column() {
  return (
    <div>
      <tr>
        <td>Name</td>
        <td>Address</td>
      </tr>
    </div>
  )
}



export default App;
