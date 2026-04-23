import React from 'react'
import "./Header.css";

const Header = () => {
  const headingStyle = {color: "blue"};
  return (
  <div className='div-header'>
    <h1 style={{color: "red"}}>Component 1</h1>
    <h1 style={headingStyle}>Componet 2</h1>
    <h2 className='header'>Paragraph Header</h2>
    <p className='para'>This is a paragraph line</p>
  </div>
  );
}

export default Header