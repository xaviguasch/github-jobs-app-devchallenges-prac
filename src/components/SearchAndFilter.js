import React, { useState } from 'react'

import RadioButton from './RadioButton'

import './SearchAndFilter.css'

const SearchAndFilter = ({
  sendNewSearch,
  cities,
  location,
  changeLocation,
  levels,
  handlePickedLevel,
  pickedLevel,
}) => {
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

  const handleRadioButtonChange = (e) => {
    handlePickedLevel(e.target.name)
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

        {levels && (
          <div>
            {levels.map((level, i) => (
              <RadioButton
                key={i}
                label={level}
                value={pickedLevel === level}
                onChange={handleRadioButtonChange}
              />
            ))}
          </div>
        )}
      </form>
    </div>
  )
}

export default SearchAndFilter
