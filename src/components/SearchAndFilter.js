import React, { useState } from 'react'

import RadioButton from './RadioButton'

import './SearchAndFilter.css'

const SearchAndFilter = ({ sendNewSearch, cities }) => {
  const [inputSearchCategory, setInputSearchCategory] = useState('')
  // const [location, setLocation] = useState('London')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    sendNewSearch({
      category: inputSearchCategory,
    })

    setInputSearchCategory('')
    // setLocation('')
  }

  const handleCatChange = (e) => {
    setInputSearchCategory(e.target.value)
  }

  // const handleLocationChange = (e) => {
  //   setLocation(e.target.value)
  // }

  // const handleLondonChange = () => {
  //   setLocation('London')
  // }
  // const handleAmsterdamChange = () => {
  //   setLocation('Amsterdam')
  // }
  // const handleNewYorkChange = () => {
  //   setLocation('New York')
  // }
  // const handleBerlinChange = () => {
  //   setLocation('Berlin')
  // }

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
          <select>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}

        {/* <input
          className='input-search__location'
          type='text'
          value={location}
          onChange={handleLocationChange}
          name=''
          id=''
        />

        <div>
          <RadioButton
            label='London'
            value={location === 'London'}
            onChange={handleLondonChange}
          />
          <RadioButton
            label='Amsterdam'
            value={location === 'Amsterdam'}
            onChange={handleAmsterdamChange}
          />
          <RadioButton
            label='New York'
            value={location === 'New York'}
            onChange={handleNewYorkChange}
          />
          <RadioButton
            label='Berlin'
            value={location === 'Berlin'}
            onChange={handleBerlinChange}
          />
        </div> */}
      </form>
    </div>
  )
}

export default SearchAndFilter
