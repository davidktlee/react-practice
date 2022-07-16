import React, { useReducer, useState } from 'react'
import Input from './utils/Input'

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
        {!changeInput && (
          <Input
            type="text"
            id="email"
            placeholder="이메일을 확인해주세요"
            label="email"
            validators="vali"
            value=""
          />
        )}
        {!changeInput && (
          <Input
            type="password"
            id="password"
            placeholder="비번을 확인해주세요"
            label="password"
            validators="vali"
            value=""
          />
        )}
      </form>
    </div>
  )
}

export default App
