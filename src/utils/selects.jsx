import React from 'react'
export const Select = React.forwardRef(({ name, type, onChange, value, content }, ref) => {
  return (
    <select //
      name={name}
      type={type}
      onChange={onChange}
      ref={ref}
    >
      <option value={value}>{content}</option>
      <option value={value}>{content}</option>
      <option value={value}>{content}</option>
    </select>
  )
})
