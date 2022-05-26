import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid;
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  margin: 0 auto;
`
const Form = styled.form`
  text-align: center;
`
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 10px;
`
const Div = styled.div`
  display: flex;
  justify-content: start;
`
const Label = styled.label`
  display: block;
  margin: 10px;
`

const IdInput = styled.input`
  min-width: 120px;
  height: 20px;
  margin-left: 25px;
`
const PwInput = styled.input`
  min-width: 120px;
  height: 20px;
  margin-left: 10px;
`
const Button = styled.button`
  width: 70px;
  margin-top: 10px;
`

const Login = ({ setOnLogin }) => {
  const [loginValue, setLoginValue] = useState({
    id: '',
    password: '',
  })
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    setLoginValue({ ...loginValue, id: e.target[0].value, password: e.target[1].value })
    setOnLogin((prev) => !prev)
    navigate('/')
  }
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(loginValue))
  }, [loginValue])
  return (
    <Container>
      <Form onSubmit={onSubmit} action="submit">
        <Title>로그인</Title>
        <Div>
          <Label htmlFor="id-input">
            아이디
            <IdInput type="text" id="id-input" />
          </Label>
        </Div>
        <Div>
          <Label htmlFor="password-input">
            비밀번호
            <PwInput type="text" id="password-input" />
          </Label>
        </Div>
        <Button onClick={() => onSubmit()}>Login</Button>
      </Form>
    </Container>
  )
}
export default Login
