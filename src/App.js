import './App.css';
import React from 'react';
import Header from './components/Header';
// import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './components/States';
import { Container } from 'react-bootstrap';
import Keys from './components/Keys';
import Products from './components/Proudcts/Products';



function App() {
  const name = 'john';
  const a = 5;
  const b = 10;
  const message = () => {
    return "Welcome to React!";
  }
  const states = [
    { name: "Kerala", language: "Malayalam", Population: "1000" },
    { name: "Tamil Nadu", language: "Tamil", Population: "10000" },
    { name: "Karnataka", language: "Kannada", Population: "100000" }
  ]
  return (

    // <>
    //   <h1 className='heading'>Hello, React!</h1>
    //   <h1> My name is {name}</h1>
    //   <h1>{a + b}</h1>
    //   <h2>{message()}</h2>

    //   <div className='appBetween'>
    //     <table>
    //       <Row />
    //       <Column />
    //      { /* component from header.js */}
    //       <Header/>
    //       {/* <Home/> */}
    //      <Container>
    //       <States states= {states} />
    //      </Container>
    //      <Keys />
    //     </table>
    //   </div>
    // </> 

    <div className='App'>
      <Container>
        <Products />
      </Container>
    </div>
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
