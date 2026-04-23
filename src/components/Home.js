import React from 'react'
import Child from './Child';
import "./Home.css";

const Home = () => {
    return (
        <div className='Header'>
            <h1>Home Component</h1>
            <Child />
        </div>
    )
}

export default Home