import React, { useReducer, useState } from 'react'
import Input from './utils/Input'
import { emailFunction, maxLength, minLength, isEmpty } from './utils/Validators'
import Button from './utils/Button'
import { useForm } from './hooks/useForm'
import { ButtonTypes } from './utils/enum'

function App() {
  const [loginMode, setloginMode] = useState(false)

  const { formState, inputHandler, setForm } = useForm(
    {
      email: {
        value: '',
        isValid: true,
      },
      password: {
        value: '',
        isValid: true,
      },
    },
    false
  )

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    console.log(formState)
  }

  const toggleLoginMode = () => {
    setloginMode((prev) => !prev)
    if (!loginMode) {
      setForm(
        {
          ...formState.inputs,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      )
      console.log('signUp :', formState)
    } else {
      setForm(
        {
          ...formState.inputs,
        },
        false
      )
      console.log('signin :', formState)
    }
  }

  return (
    <div className="text-center flex flex-col justify-center content-center">
      <h1>Form</h1>
      <Button onClick={toggleLoginMode} type={ButtonTypes.BUTTON}>
        {loginMode ? '로그인' : '회원가입'}
      </Button>
      <form onSubmit={onSubmit} className="w-full h-full border-1 ">
        <Input
          type="text"
          id="email"
          placeholder="email"
          label="email"
          validators={[emailFunction()]}
          errorText="이메일을 확인해주세요"
          inputHandler={inputHandler}
        />

        <Input
          type="password"
          id="password"
          placeholder="password"
          label="password"
          validators={[minLength(6), maxLength(15)]}
          errorText="6자-15자로 입력해주세요"
          inputHandler={inputHandler}
        />
        {!loginMode && (
          <Input
            type="nickname"
            id="nickname"
            placeholder="nickname"
            label="nickname"
            validators={[minLength(1)]}
            errorText="닉네임을 2자 이상 입력해주세요"
            inputHandler={inputHandler}
          />
        )}
        <Button disabled={!formState.isFormValid}>{loginMode ? '로그인' : '회원가입'}</Button>
      </form>
    </div>
  )
}

export default App
