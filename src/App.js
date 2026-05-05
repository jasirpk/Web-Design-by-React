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



function App() {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0, 5)))
  }, [])
  return (

    <div className='App'>
      <h1>Fetch Api Data </h1>

      {
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>


  );
}

export default App;
