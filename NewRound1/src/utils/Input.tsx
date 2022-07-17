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
type Actions = { type: string; payload: { value: string; id: string } }

const reducer = (state: InputState, action: Actions) => {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        [action.payload.id]: action.payload.value,
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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchInput({
      type: 'change',
      payload: { value: e.currentTarget.value, id: e.currentTarget.id },
    })
  }

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
        onChange={onChange}
      ></input>
    </div>
  )
}
export default Input
