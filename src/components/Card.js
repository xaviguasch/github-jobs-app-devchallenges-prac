import React from 'react'

import './Card.css'

const Card = ({ company, industry, logo, size, headquarters }) => {
  console.log(company, industry, logo)

  return (
    <div className='Card'>
      <div className='Card__image'>
        <img src={logo} alt='logo' />
      </div>
      <div className='Card__text'>
        <h2 className='company-name'>{company}</h2>
        <p className='industry'>{industry}</p>
        <p className='company-size'>{size}</p>
        <p className='headquarters'>
          <span className='material-icons-round'>public</span>
          <span className='headquarters__text'>{headquarters}</span>
        </p>
      </div>
    </div>
  )
}

export default Card
