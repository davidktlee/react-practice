import React, { useEffect, useReducer } from 'react'
import { ValidatorsTypes, validate } from './Validators'

interface Props {
  id: string
  type: string
  label: string
  placeholder: string
  validators: ValidatorsTypes[]
  errorText: string
  inputHandler: (id: string, value: string, isValid: boolean) => void
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
  | { type: 'blur'; validators: ValidatorsTypes[] }

const reducer = (state: InputState, action: Actions): InputState => {
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
        isValid: validate(state.value, action.validators),
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
const Input = ({ id, type, label, placeholder, validators, errorText, inputHandler }: Props) => {
  const [input, dispatchInput] = useReducer(reducer, initialState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchInput({
      type: 'change',
      payload: { value: e.currentTarget.value, validators },
    })
  }
  // onBlur로 변경
  const onBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatchInput({
      type: 'blur',
      validators,
    })
  }
  useEffect(() => {
    inputHandler(id, input.value, input.isValid)
  }, [id, input.value, input.isValid, inputHandler])
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
        onBlur={onBlur}
      ></input>
      {!input.isValid && input.isBlur && <span>{errorText}</span>}
    </div>
  )
}
export default Input
