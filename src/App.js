import React, { useState, useEffect } from 'react'

import SearchAndFilter from './components/SearchAndFilter'
import Pagination from './components/Pagination'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [jobsData, setJobsData] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    getDataFromAPI()
  }, [])

  const getDataFromAPI = () => {
    fetch(`https://www.themuse.com/api/public/companies?location=Chicago%2C%20IL&page=2`)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('something went wrong while requesting posts')
      })
      .then((data) => setJobsData(data))
      .catch((error) => setError(error.message))
  }

  const handleNewSearch = (newSearch) => {
    console.log(newSearch)
  }

  if (error) return <h1>{error}</h1>

  return (
    <div className='App container'>
      {jobsData && (
        <div>
          <h1 className='title'>
            <span className='bold'>Github</span> Jobs
          </h1>

          <SearchAndFilter sendNewSearch={handleNewSearch} />

          <Pagination data={jobsData.results} pageLimit={3} dataLimit={4} />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
