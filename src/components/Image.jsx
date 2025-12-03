import React from 'react'

const Image = ({source,alter,className}) => {
  return (
    <img src={source} alt={alter} className={`${className}`} />
  )
}

export default Image