import React, { useState } from 'react'

import Card from './Card'

import './Pagination.css'

const Pagination = ({ data, pageLimit, dataLimit }) => {
  console.log(data.length)
  const [pages] = useState(Math.round(data.length / dataLimit))
  const [currentPage, setCurrentPage] = useState(1)

  function goToNextPage() {
    setCurrentPage((currPage) => currPage + 1)
  }

  function goToPreviousPage() {
    setCurrentPage((currPage) => currPage - 1)
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }

  return (
    <div className='Pagination'>
      <div>
        <div className='card-container'>
          {getPaginatedData().map((el, idx) => (
            <Card
              key={el.id}
              company={el.name}
              industry={el.industries[0].name}
              logo={el.refs.logo_image}
              size={el.size.name}
              headquarters={el.locations[0].name}
            />
          ))}
        </div>

        <div className='pagination'>
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
            prev
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? 'disabled' : ''}`}
          >
            next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
