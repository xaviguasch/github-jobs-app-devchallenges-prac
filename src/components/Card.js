import React from 'react'

import './Card.css'

const Card = ({ company, industry, logo, size, headquarters }) => {
  console.log(company, industry, logo)

  console.log(10 * 3 - 3)

  return (
    <li className='Card'>
      <img src={logo} alt='logo' />
      <h2 className='company-name'>{company}</h2>
      <p>{industry}</p>
      <p>{size}</p>
      <p>{headquarters}</p>
    </li>
  )
}

export default Card
