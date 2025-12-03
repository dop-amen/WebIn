import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`px-4 py-2 border-2 text-[20px] border-black text-[#000000] hover:text-white hover:bg-black duration-75 rounded-full ${className}`}>
      {children}
    </button>
  )
}

export default Button