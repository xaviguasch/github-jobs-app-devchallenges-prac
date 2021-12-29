import React from 'react'

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type='radio' checked={value} onChange={onChange} name={label} id='' />
      {label}
    </label>
  )
}

export default RadioButton
