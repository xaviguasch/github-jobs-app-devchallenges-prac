import React, { useState } from 'react'

import RadioButton from './RadioButton'

import './SearchAndFilter.css'

const SearchAndFilter = () => {
  const [inputSearch, setInputSearch] = useState('')

  const [radioCity, setRadioCity] = useState('London')

  const handleCityChange = (e) => {
    setInputSearch(e.target.value)
  }

  const handleLondonChange = () => {
    setRadioCity('London')
  }
  const handleAmsterdamChange = () => {
    setRadioCity('Amsterdam')
  }
  const handleNewYorkChange = () => {
    setRadioCity('New York')
  }
  const handleBerlinChange = () => {
    setRadioCity('Berlin')
  }

  return (
    <div className='SearchAndFilter'>
      <h2>SearchAndFilter</h2>

      <form action='' className='form-search'>
        <input
          className='input-search__company'
          type='text'
          value={inputSearch}
          onChange={handleCityChange}
        />

        <h3>Location</h3>

        <div>
          <RadioButton
            label='London'
            value={radioCity === 'London'}
            onChange={handleLondonChange}
          />
          <RadioButton
            label='Amsterdam'
            value={radioCity === 'Amsterdam'}
            onChange={handleAmsterdamChange}
          />
          <RadioButton
            label='New York'
            value={radioCity === 'New York'}
            onChange={handleNewYorkChange}
          />
          <RadioButton
            label='Berlin'
            value={radioCity === 'Berlin'}
            onChange={handleBerlinChange}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchAndFilter
