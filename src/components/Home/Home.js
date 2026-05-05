import React from 'react'
import Child from './Child';
import homeCss from "./Home.module.css";
import buttonCss from "./Button.module.css";

const Home = () => {
    return (
        <div className= {homeCss.header}>
            <h1>Home Component</h1>
            <Child />
            <button className={buttonCss.loginBtn}> Log In</button>
            <button className={buttonCss .logoutBtn}> Log Out</button>
        </div>
    )
}

export default Home