import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import { Routes, Route, Link } from 'react-router-dom'
import NotFound  from './Pages/NotFound'

const MainRounter = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>

        </ul>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default MainRounter