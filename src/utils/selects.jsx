import React from 'react'
export const Select = React.forwardRef(({ name, type, onChange, children }, ref) => {
  return (
    <select //
      name={name}
      type={type}
      onChange={onChange}
      ref={ref}
    >
      {children}
    </select>
  )
})
