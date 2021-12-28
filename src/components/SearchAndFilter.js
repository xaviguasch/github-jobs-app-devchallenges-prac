import React, { useState } from 'react'

import RadioButton from './RadioButton'

import './SearchAndFilter.css'

const SearchAndFilter = ({ sendNewSearch, cities, location, changeLocation }) => {
  const [inputSearchCategory, setInputSearchCategory] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    sendNewSearch({
      category: inputSearchCategory,
      location,
    })
    setInputSearchCategory('')
  }

  const handleCatChange = (e) => {
    setInputSearchCategory(e.target.value)
  }

  const handleSelectChange = (e) => {
    changeLocation(e.target.value)
  }

  return (
    <div className='SearchAndFilter'>
      <form action='' className='form-search' onSubmit={handleFormSubmit}>
        <input
          className='input-search__company'
          type='text'
          value={inputSearchCategory}
          onChange={handleCatChange}
        />
        <button>Search</button>

        {cities && (
          <select value={location} onChange={handleSelectChange}>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}
      </form>
    </div>
  )
}

export default SearchAndFilter
