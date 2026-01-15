import React from 'react'

const Button = ({children, className, ...props}) => {
    const classes = `bg-white h-12 w-13.5 rounded-lg flex items-center justify-center cursor-pointer  ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button