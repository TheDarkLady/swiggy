import { useState } from 'react'
import logo from './assets/images-ezgif.com-resize.jpg'
import Img from './assets/images.jpg'
import { Fragment } from 'react'
import './index.css'
import { apis } from './api/Api'

const RestrauntCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className='card'>
      <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  )
}
function App() {

  return (
    <Fragment>
      {/* header */}
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
      {/* header ends  */}
      {/* body  */}
      <div className='restaurentList'>
        {
          apis.map((api, index) => (
            <RestrauntCard key={index} {...api.info} />
          ))
        }
      </div>
      {/* body  ends */}
      {/* Footer  */}
      {/* Footer ends */}
    </Fragment>
  )
}

export default App


