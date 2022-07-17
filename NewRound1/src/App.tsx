import React, { useReducer, useState } from 'react'
import Input from './utils/Input'
import { emailFunction, maxLength, minLength, isEmpty } from './utils/Validators'

function App() {
  const [changeInput, setChangeInput] = useState(false)
  const changeInputState = () => {
    setChangeInput((prev) => !prev)
  }

  return (
    <div className="text-center flex flex-col justify-center content-center">
      <h1>Form</h1>
      <button onClick={changeInputState}>{changeInput ? '로그인' : '회원가입'}</button>
      <form className="w-full h-full border-1 ">
        <Input
          type="text"
          id="email"
          placeholder="email"
          label="email"
          validators={[emailFunction()]}
          errorText="이메일을 확인해주세요"
        />

        <Input
          type="password"
          id="password"
          placeholder="password"
          label="password"
          validators={[minLength(6), maxLength(15)]}
          errorText="6자-15자로 입력해주세요"
        />
        {!changeInput && (
          <Input
            type="nickname"
            id="nickname"
            placeholder="nickname"
            label="nickname"
            validators={[minLength(1)]}
            errorText="닉네임을 2자 이상 입력해주세요"
          />
        )}
      </form>
    </div>
  )
}

export default App
