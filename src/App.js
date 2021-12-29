import React, { useState, useEffect } from 'react'

import SearchAndFilter from './components/SearchAndFilter'
import Pagination from './components/Pagination'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [jobsData, setJobsData] = useState()
  const [filteredJobsData, setFilteredJobsData] = useState()

  const [cities, setCities] = useState()
  const [levels, setLevels] = useState()
  const [pickedLevel, setPickedLevel] = useState('')

  const [error, setError] = useState('')

  const [location, setLocation] = useState('')

  const getDataFromAPI = (category) => {
    fetch(`https://www.themuse.com/api/public/jobs?category=${category}&page=2`)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('something went wrong while requesting posts')
      })
      .then((data) => {
        setJobsData(data.results)

        const locations = data.results.map((result) => result.locations[0].name)
        const uniqueLocations = [...new Set(locations)]
        setCities(uniqueLocations)

        const levels = data.results.map((result) => result.levels[0].name)
        const uniqueLevels = [...new Set(levels)]
        setLevels(uniqueLevels)
      })
      .catch((error) => setError(error.message))
  }

  const handleNewSearch = (newSearch) => {
    const searchStr = newSearch.category

    let final = ''

    if (searchStr.includes(' ')) {
      const [first, second] = searchStr.split(' ')
      const firstUpper = first[0].toUpperCase() + first.slice(1)
      const secondUpper = second[0].toUpperCase() + second.slice(1)

      final = firstUpper + '%20' + secondUpper
    } else {
      final = searchStr[0].toUpperCase() + searchStr.slice(1)
    }

    console.log(final)

    getDataFromAPI(final)
  }

  const changeLocation = (newLocation) => {
    setLocation(newLocation)

    const newFilteredData = jobsData.filter(
      (job) => job.locations[0].name === newLocation
    )

    if (pickedLevel) {
      const finalFilteredData = newFilteredData.filter(
        (job) => job.levels[0].name === pickedLevel
      )
      setFilteredJobsData(finalFilteredData)
    } else {
      setFilteredJobsData(newFilteredData)
    }
  }

  const changeLevel = (newLevel) => {
    setPickedLevel(newLevel)

    const newFilteredData = jobsData.filter((job) => job.levels[0].name === newLevel)

    if (location) {
      const finalFilteredData = newFilteredData.filter(
        (job) => job.locations[0].name === location
      )
      setFilteredJobsData(finalFilteredData)
    } else {
      setFilteredJobsData(newFilteredData)
    }
  }

  if (error) return <h1>{error}</h1>

  return (
    <div className='App container'>
      <div>
        <h1 className='title'>
          <span className='bold'>Github</span> Jobs
        </h1>

        <SearchAndFilter
          sendNewSearch={handleNewSearch}
          cities={cities}
          changeLocation={changeLocation}
          location={location}
          levels={levels}
          handlePickedLevel={changeLevel}
          pickedLevel={pickedLevel}
        />

        {jobsData && (
          <Pagination data={filteredJobsData || jobsData} pageLimit={3} dataLimit={4} />
        )}
        <Footer />
      </div>
    </div>
  )
}

export default App
