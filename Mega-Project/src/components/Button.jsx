import React from 'react'

function Button({
    children ,
    type = 'button',
    bgColor = 'bg-blue-600' ,
    textColor = 'text-white' ,
    className = '' ,
    ...props
}){
  return (
    <button 
    type={type} 
    className= {`px-4  py-2 rounded-lg font-semibold transition-all duration-200 
      hover:bg-blue-700 active:scale-95 shadow-md ${className} ${textColor} ${bgColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button
