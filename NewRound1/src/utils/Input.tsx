import React, { useReducer } from 'react'
import { ValidatorsTypes, validate } from './Validators'

type Props = {
  id: string
  type: string
  label: string
  placeholder: string
  validators: ValidatorsTypes[]
  errorText: string
}
interface InputState {
  value: string
  isValid: boolean
  isBlur: boolean
}
type Actions =
  | {
      type: 'change'
      payload: { value: string; validators: ValidatorsTypes[]; isBlur?: boolean }
    }
  | { type: 'blur' }

const reducer = (state: InputState, action: Actions) => {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        value: action.payload.value,
        isValid: validate(action.payload.value, action.payload.validators),
      }
    case 'blur':
      return {
        ...state,
        isBlur: true,
      }
    default:
      return state
  }
}

const initialState: InputState = {
  value: '',
  isValid: false,
  isBlur: false,
}
const Input = ({ id, type, label, placeholder, validators, errorText }: Props) => {
  const [input, dispatchInput] = useReducer(reducer, initialState)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(input)
    dispatchInput({
      type: 'change',
      payload: { value: e.currentTarget.value, validators },
    })
  }
  // onBlur로 변경
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    validate(e.currentTarget.value, validators)
    dispatchInput({
      type: 'blur',
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
        value={input.value}
        onChange={onChange}
        onKeyUp={onKeyUp} /* onblur로 바꿔야함 */
      ></input>
      {!input.isValid && input.isBlur ? <span>{errorText}</span> : null}
    </div>
  )
}
export default Input
