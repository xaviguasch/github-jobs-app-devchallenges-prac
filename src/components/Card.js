import React from 'react'

import './Card.css'

const Card = ({ data, category, company, level, location, title }) => {
  console.log(data)
  console.log(category, company, level, location, title)
  return (
    <div className='Card'>
      <div className='Card__image'>
        <h3>{category}</h3>
      </div>
      <div className='Card__text'>
        <h2 className='company-name'>{company}</h2>
        <p className='company-size'>{level}</p>
        <p>{title}</p>
        <p className='headquarters'>
          <span className='material-icons-round'>public</span>
          <span className='headquarters__text'>{location}</span>
        </p>
      </div>
    </div>
  )
}

export default Card
