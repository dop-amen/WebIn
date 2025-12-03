import React from 'react'

const Menu = ({className,children}) => {
  return (
    <ul className={`flex ${className}`}>{children}</ul>
  )
}

export default Menu