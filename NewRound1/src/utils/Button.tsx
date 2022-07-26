import React from 'react'
import { ButtonTypes } from './enum'

interface Props {
  children?: React.ReactNode
  type?: ButtonTypes
  disabled?: boolean
  onClick?: any
}

const Button = ({ children, onClick, disabled, type }: Props) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
export default Button
