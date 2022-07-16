import React, { useReducer } from 'react'
type Props = {
  id: string
  type: string
  label: string
  placeholder: string
  validators: string
  value: string | number
}
interface InputState {
  email: string
  password: number | string
  nickname: string
}
type Actions = { type: string; value: string }

const reducer = (state: InputState, action: Actions) => {
  switch (action.type) {
    case 'email':
      return {
        ...state,
        email: action.value,
      }

    default:
      return state
  }
}

const initialState: InputState = {
  email: '',
  password: '',
  nickname: '',
}
const Input = ({ id, type, label, placeholder, validators, value }: Props) => {
  const [input, dispatchInput] = useReducer(reducer, initialState)

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    dispatchInput({ type: 'email', value: e.currentTarget.value })
  }
  const changePassword = () => {}
  return (
    <div>
      <div>
        <label htmlFor={id}>{label}</label>
      </div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={input.email}
        onChange={changeEmail}
      ></input>
    </div>
  )
}
export default Input
