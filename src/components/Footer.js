import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <p className='Footer__text'>
        created by{' '}
        <a className='Footer__link' href='https://github.com/xaviguasch'>
          Xavi Guasch
        </a>{' '}
        - devChallenges.io
      </p>
    </div>
  )
}

export default Footer
