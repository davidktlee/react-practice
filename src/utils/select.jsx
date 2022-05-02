import React from 'react'
export const Select = React.forwardRef(({ name, type, onChange, value, text }, ref) => {
  return (
    <select //
      name={name}
      type={type}
      onChange={onChange}
      ref={ref}
    >
      <option value={value}>{text}</option>
      <option value={value}>{text}</option>
      <option value={value}>{text}</option>
    </select>
  )
})
