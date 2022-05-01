import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStlye'
import { EmailCheck } from './emailCheck'
import {validate} from './utils/validate'
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

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userSex, setUserSex] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('')

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
  // 생명주기 -> 라이프사이클 컴포넌트 -> useEffect
  // 

  모듈 : 프로그램의 최소 단위? 
  모듈화 시킨다 : 쪼갠다. 어떤 특정한 기준을 충족하는 최소단위 (특정한 기준은 사람마다, 조직마다 다름)

  // useState,
  // useEffect
  // useMemo
  // useCallback 
  // useReducer -> w
  //  
  // 결합도를 낮추고, 응집도를 높혀라 
  // dom 요소에 접근
  왜 바닐라 안 쓰고 리액트 써야되냐? 
  리액트가 뭐가 장점이냐
  바닐라에 비해서 리액트가 뭐가 안 좋냐
  버그 확률 
  undefined in not a function 함수가 아닌걸 호출할려고 할 때,
  그걸 리액트는 어떻게 해결했냐? 

  const onChangeUserInput = (e) => {

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
    if(validate(userInform, userNameInput, emailInput, sexInput, passwordInput)){
      setCountIndex((index) => (index += 1))
      setUserlist([...userlist, userInform])
      setUser({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      })
      alert(`${username}, ${email}로 가입되셨습니다.`)
    }
  }

  {
    type: 'div',
    props: [],
    children: [
      {
        type: 'div',
        props: [],
        children: [
          {
            type: 'h1',
            props:[],
            children: ['회원가입']
          },
          {
            type: 'form',
            props: [],
            children: [
              {
                type: 'input',
                props: [{value : username}]
              }
            ]
            
          }
        ]
      }
    ]
  }

  return (
    <div>
      <GlobalStyle />
      <LoginDiv>
        <h1>회원가입</h1>
        <form>
          <Input
            type="text"
            placeholder="이름을 입력하세요"
            name="username"
            value={username}
            onChange={setValue(setUserName)}
            ref={userNameInput}
          />
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            name="email"
            value={email}
            onChange={setValue(setUserEmail)}
            ref={emailInput}
          />
          <select //
            name="sex"
            type="text"
            onChange={setValue(setUserSex)}
            ref={sexInput}
          >
            <option value="defalut" defaultValue>
              성별을 선택해주세요
            </option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
          <Input
            type="password"
            placeholder="패스워드를 입력하세요"
            name="password"
            value={password}
            onChange={setValue(setUserPassword)}
            ref={passwordInput}
          />
          <Input
            type="password"
            placeholder="패스워드를 확인해주세요"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={setValue(setUserPasswordConfirm)}
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
