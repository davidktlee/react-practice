import React from 'react'

export const Input = React.forwardRef(({ type, placeholder, name, value, onChange }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  )
})
