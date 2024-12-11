import React from 'react'
import {IMG_CON_URL} from './constant'
const RestaurentCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className='card'>
      <img src={IMG_CON_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  )
}

export default RestaurentCard
