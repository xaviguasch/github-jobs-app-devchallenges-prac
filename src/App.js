import React, { useState, useEffect } from 'react'

import SearchAndFilter from './components/SearchAndFilter'
import Pagination from './components/Pagination'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [jobsData, setJobsData] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    // getDataFromAPI()
  }, [])

  const getDataFromAPI = () => {
    fetch(`https://www.themuse.com/api/public/jobs?page=1&title=entry&category=IT`)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('something went wrong while requesting posts')
      })
      .then((data) => setJobsData(data))
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

    fetch(`https://www.themuse.com/api/public/jobs?category=${final}&page=2`)
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error('something went wrong while requesting posts')
      })
      .then((data) => getDataFromAPI(data))
  }

  if (error) return <h1>{error}</h1>

  return (
    <div className='App container'>
      <div>
        <h1 className='title'>
          <span className='bold'>Github</span> Jobs
        </h1>

        <SearchAndFilter sendNewSearch={handleNewSearch} />

        {jobsData && <Pagination data={jobsData.results} pageLimit={3} dataLimit={4} />}
        <Footer />
      </div>
    </div>
  )
}

export default App
