import React, { useCallback, useReducer } from 'react'

export interface InitialStateType {
  inputs: {
    [key: string]: {
      value: string | File
      isValid: boolean
    }
  }
  isFormValid: boolean
}

type Actions =
  | {
      type: ActionTypes.CHANGE
      inputId: string
      value: string | File
      isValid: boolean
    }
  | {
      type: ActionTypes.SETFORM
      inputs: InitialInputType
      isFormValid: boolean
    }

enum ActionTypes {
  CHANGE = 'CHANGE',
  SETFORM = 'SETFORM',
}

// state에 inputs와 isFormValid가 들어감
// inputs에는 key에 따라 다르게 객체 형식으로 value와 isValid가 들어감
const formReducer = (state: InitialStateType, action: Actions): InitialStateType => {
  switch (action.type) {
    case ActionTypes.CHANGE:
      let formValid = true

      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue
        }
        if (inputId === action.inputId) {
          formValid = formValid && action.isValid
        } else {
          formValid = formValid && state.inputs[inputId].isValid
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isFormValid: formValid && action.isValid,
      }
    case ActionTypes.SETFORM:
      return {
        inputs: action.inputs,
        isFormValid: action.isFormValid,
      }

    default:
      return state
  }
}

interface InitialInputType {
  [key: string]: {
    value: string | File
    isValid: boolean
  }
}

export const useForm = (initialInput: InitialInputType, initialFormValid: boolean) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInput,
    isFormValid: initialFormValid,
  })
  const inputHandler = useCallback((id: string, value: string | File, isValid: boolean) => {
    dispatch({
      type: ActionTypes.CHANGE,
      value,
      inputId: id,
      isValid,
    })
  }, [])

  const setForm = (inputData: InitialInputType, formValidity: boolean) => {
    dispatch({
      type: ActionTypes.SETFORM,
      inputs: inputData,
      isFormValid: formValidity,
    })
  }
  // const resetForm = () => {
  //   dispatch({ type: ActionTypes.RESET, value: '' })
  // }

  return { formState, inputHandler, setForm }
}
