import React from 'react'
import RestaurentCard from './RestaurentCard'
import { apis } from '../api/Api'

function Body() {
  return (
    <div className='restaurentList'>
        {
          apis.map((api, index) => (
            <RestaurentCard key={index} {...api.info} />
          ))
        }
      </div>
  )
}

export default Body
