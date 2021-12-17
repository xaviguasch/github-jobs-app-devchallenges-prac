import React, { useState, useEffect } from 'react'

import SearchAndFilter from './components/SearchAndFilter'
import Pagination from './components/Pagination'

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

  if (error) return <h1>{error}</h1>

  return (
    <div className='App'>
      {jobsData && (
        <div>
          <h1>Github Jobs</h1>

          <SearchAndFilter />

          <Pagination data={jobsData.results} pageLimit={3} dataLimit={5} />
        </div>
      )}
    </div>
  )
}

export default App
