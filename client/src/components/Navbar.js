import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className='header'>
            <div className="wrapper-navabr">
              <div className="wrapper-buttons">
                <button> <NavLink to="/">Home</NavLink></button>
                <button> <NavLink to="/books">Books</NavLink></button>
              </div>
            </div>          
    </div>
  )
}

export default Navbar