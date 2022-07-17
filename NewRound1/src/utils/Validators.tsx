import React from 'react'

export interface ValidatorsTypes {
  type: string
  value?: string | number
}

const VALIDATE_EMAIL = 'email'
const VALIDATE_MAX_LENGTH = 'maxLength'
const VALIDATE_MIN_LENGTH = 'minLength'
const VALIDATE_EMPTY = 'empty'

export const emailFunction = () => ({ type: VALIDATE_EMAIL })
export const maxLength = (value: number) => ({ type: VALIDATE_MAX_LENGTH, value: value })
export const minLength = (value: number) => ({ type: VALIDATE_MIN_LENGTH, value: value })
export const isEmpty = () => ({ type: VALIDATE_EMPTY })
export const validate = (value: string, validators: ValidatorsTypes[]): boolean => {
  let isValid = true
  for (let validator of validators) {
    if (validator.type === VALIDATE_EMAIL) {
      const expressEmail =
        /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
      isValid = expressEmail.test(value)
      console.log(isValid)
    }
    if (validator.type === VALIDATE_MAX_LENGTH && validator.value) {
      isValid = +value.trim().length < validator.value
      console.log(isValid)
    }
    if (validator.type === VALIDATE_MIN_LENGTH && validator.value) {
      isValid = +value.trim().length > validator.value
    }
    if (validator.type === VALIDATE_EMPTY) {
      isValid = +value.trim().length >= 0
    }
  }
  return isValid
}
