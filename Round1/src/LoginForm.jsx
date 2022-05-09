import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import { validate } from './utils/Validate'
import { Btn } from './utils/Button'
import { Input } from './utils/Inputs'
import { Select } from './utils/Selects'
import { Modals } from './utils/Modals'

const LoginDiv = styled.div`
  width: 500px;
  height: 100%;
  border: 1px solid #666666;
  margin: 100px auto;
  background-color: #fafaf3;
`

/* FUNCTION */
const LoginForm = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    sex: '',
    password: '',
    passwordConfirm: '',
  })
  const { username, email, sex, password, passwordConfirm } = user
  const [userlist, setUserlist] = useState([])
  const [countindex, setCountIndex] = useState(0)
  const userNameInput = useRef()
  const emailInput = useRef()
  const passwordInput = useRef()
  const sexInput = useRef()

  const [modalState, setModalState] = useState(false)

  const closeModal = () => {
    setModalState(false)
  }
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInform = {
      username,
      email,
      sex,
      password,
      passwordConfirm,
      countindex,
    }

    if (validate(userInform, userNameInput, emailInput, sexInput, passwordInput, setUser)) {
      setCountIndex((index) => index + 1)
      setUserlist([...userlist, userInform])
      setUser({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      })
      alert(`${username}, ${email}로 가입되셨습니다.`)
      setModalState(true)
    }
  }
  return (
    <div>
      <GlobalStyle />
      {modalState && <Modals closeModal={closeModal} userlist={userlist}></Modals>}
      <LoginDiv>
        <h1>회원가입</h1>
        <form>
          <Input
            type="text"
            placeholder="이름을 입력하세요"
            name="username"
            value={username}
            onChange={onChange}
            ref={userNameInput}
          />
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            name="email"
            value={email}
            onChange={onChange}
            ref={emailInput}
          />
          <Select //
            name="sex"
            type="text"
            onChange={onChange}
            ref={sexInput}
          >
            <option value="defalut" defaultValue>
              성별을 입력해주세요
            </option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </Select>

          <Input
            type="password"
            placeholder="패스워드를 입력하세요"
            name="password"
            value={password}
            onChange={onChange}
            ref={passwordInput}
          />
          <Input
            type="password"
            placeholder="패스워드를 확인해주세요"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChange}
          />
          <Btn onClick={handleSubmit} name="회원가입"></Btn>
        </form>
      </LoginDiv>
    </div>
  )
}

export default LoginForm
