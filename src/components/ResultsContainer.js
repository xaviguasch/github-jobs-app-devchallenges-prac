import React, { useState } from 'react'

import Card from './Card'

import './ResultsContainer.css'

const ResultsContainer = ({ companies }) => {
  return (
    <div className='ResultsContainer'>
      <h2>ResultsContainer</h2>
      <ul>
        {companies.map((el) => (
          <Card
            key={el.id}
            company={el.name}
            industry={el.industries[0].name}
            logo={el.refs.logo_image}
            pub_date={el.publication_date}
          />
        ))}
      </ul>
    </div>
  )
}

export default ResultsContainer
