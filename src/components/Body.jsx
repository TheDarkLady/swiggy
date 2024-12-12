import React, { useState } from 'react'
import RestaurentCard from './RestaurentCard'
import { apis } from '../api/Api'

function Body() {
  const [searchInput, setSearchInput] = useState("");
  const [restaurents, setRestaurents] = useState(apis)
  function handleSearch(searchInput, restaurents) {
    const normalizeSearchText = searchInput.toLowerCase()
    // console.log(searchedClicked);
    // setSearchedClicked(!searchedClicked)
    return restaurents.filter((restaurent) => restaurent.info.name.toLowerCase().includes(normalizeSearchText))

  }
  return (
    <>
      <div className='search-container'>
        <input type="text" className='search-input' placeholder='Search' value={searchInput} onChange={(e) => {
          setSearchInput(e.target.value)
          console.log("event", e.target.value);
          setRestaurents(apis)
          return restaurents.filter((restaurent) => restaurent.info.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase))
        }} />
        <button className='search-btn' onClick={() => {
          const data = handleSearch(searchInput, restaurents)
          setRestaurents(data)
        }}>Search</button>
      </div>
      <div className='restaurentList'>
        {
          restaurents.map((api, index) => (
            <RestaurentCard key={index} {...api.info} />
          ))
        }
      </div>
    </>
  )
}

export default Body
