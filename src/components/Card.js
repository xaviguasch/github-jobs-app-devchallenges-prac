import React from 'react'

import './Card.css'

const Card = ({ company, industry, logo, pub_date }) => {
  console.log(company, industry, logo, pub_date)

  console.log(10 * 3 - 3)

  return (
    <li className='Card'>
      <img src={logo} alt='logo' />
      <h2>{company}</h2>
      <p>{industry}</p>
      <p>{pub_date}</p>
    </li>
  )
}

export default Card
