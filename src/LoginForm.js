import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStlye'
import { EmailCheck } from './EmailCheck'

const LoginDiv = styled.div`
  width: 500px;
  height: 100%;
  border: 1px solid #666;
  margin: 100px 0 0 300px;
  background-color: #fafaf3;
`

const Result = styled.div`
  width: 300px;
  font-size: 25px;
  margin: 50px 125px;
  li {
    margin: 10px 0;
  }
`
const Userlist = styled.div`
  width: 200px;
  border: 1px solid black;
  background-color: #f2f217;
  padding: 20px;
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
  const handleUser = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userinform = {
      username,
      email,
      sex,
      password,
      passwordConfirm,
      countindex,
    }

    if (userinform.password !== userinform.passwordConfirm) {
      alert('비밀번호가 틀립니다.')
      setUser({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      })
      userNameInput.current.focus()
    } else if (userinform.username.length < 3) {
      alert('이름을 3자 이상 입력하세요')
      userNameInput.current.focus()
    } else if (userinform.email !== EmailCheck) {
      alert('email 형식이 올바르지 않습니다.')
      emailInput.current.focus()
    } else if (userinform.sex === '') {
      alert('성별을 입력하세요')
      sexInput.current.focus()
    } else if (userinform.password.length < 3) {
      alert('패스워드를 3자 이상 입력하세요')
      passwordInput.current.focus()
    } else {
      setCountIndex((index) => (index += 1))
      setUserlist([...userlist, userinform])
      setUser({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      })
      alert(`${username}, ${email}로 가입되셨습니다.`)
    }
  }
  return (
    <div>
      <GlobalStyle />
      <LoginDiv>
        <h1>회원가입</h1>
        <form>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            name="username"
            value={username}
            onChange={handleUser}
            ref={userNameInput}
          />
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            name="email"
            value={email}
            onChange={handleUser}
            ref={emailInput}
          />
          <select //
            name="sex"
            type="text"
            onChange={handleUser}
            ref={sexInput}
          >
            <option value="defalut" defaultValue>
              성별을 선택해주세요
            </option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
          <input
            type="password"
            placeholder="패스워드를 입력하세요"
            name="password"
            value={password}
            onChange={handleUser}
            ref={passwordInput}
          />
          <input
            type="password"
            placeholder="패스워드를 확인해주세요"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handleUser}
          />
          <button onClick={handleSubmit}>회원가입</button>
        </form>
        <Result>
          {userlist.map((item) => (
            <Userlist key={item.index}>
              회원가입 결과
              <li>이름: {item.username}</li>
              <li>이메일: {item.email}</li>
              <li>성별: {item.sex}</li>
            </Userlist>
          ))}
        </Result>
      </LoginDiv>
    </div>
  )
}

export default LoginForm
