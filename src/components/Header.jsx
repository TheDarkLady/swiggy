import React from 'react'
import logo from '../assets/images-ezgif.com-resize.jpg'


function Header() {
  return (
    <div className='header'>
        <a href="">
          <img src={logo} alt="logo" style={{ width: "250px", height: "100px" }} />
        </a>
        <div className="nav-items">
          <ul >
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>

        </div>
      </div>
  )
}

export default Header
