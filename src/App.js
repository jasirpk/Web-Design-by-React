import './App.css';
import React from 'react';
import Header from './components/Header/Header';
// import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './components/States/States';
import { Container } from 'react-bootstrap';
import Keys from './components/Keys/Keys';
import Products from './components/Proudcts/Products';
import Effects from './components/Effects/Effects';
import { useEffect, useState } from 'react';
import MainRounter from './components/ReactRouter/MainRounter';
import Todo from './components/TodoApp/Todo/Todo';



function App() {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0, 5)))
  }, [])
  return (

    <div className='App'>
      <Todo />
    </div>


  );
}

export default App;
