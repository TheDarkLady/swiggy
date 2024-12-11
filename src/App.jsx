import { useState } from 'react'
import logo from './assets/images.jpg'
function App() {

  return (
    <>
      <div className='header'>
          <img  src={logo} alt="logo" style={{width:"250px", height: "100px"}}/>
      <div className="nav-items">
          <ul >
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
          </ul>

      </div>
      </div>
    </>
  )
}

export default App


