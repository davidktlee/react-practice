import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div`
  position: absolute;
  right: 100px;
  width: 700px;
  height: 600px;
  border: 1px solid orange;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  font-size: 40px;
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`
const TextArea = styled.textarea`
  width: 400px;
  height: 350px;
  font-size: 25px;
  padding: 10px;
  resize: none;
  &::placeholder {
    font-size: 30px;
    text-align: center;
  }
`
const Btns = styled.div`
  display: flex;
  justify-content: end;

  margin-right: 10px;
`
const Button = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
  background-color: #fff;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: black;
    color: #fff;
    cursor: pointer;
  }
`
const Ask = ({ loginState, onLogin }) => {
  const [text, setText] = useState('')
  const [boolean, setBoolean] = useState(false) // 로그인 가능 불가능 값
  const changeBool = () => {
    setBoolean((prev) => !prev)
  }
  const onChange = (e) => {
    setText(e.target.value)
  }
  const Navigate = useNavigate()
  return (
    <Container>
      <Title>Customer Service</Title>
      <Content>
        {!boolean ? (
          <TextArea value={text} cols="30" rows="10" placeholder="Q&A" onChange={onChange}>
            {text}
          </TextArea>
        ) : (
          <div>{text}</div>
        )}
      </Content>
      <Btns>
        <Button onClick={changeBool}>UPDATE</Button>
        <Button onClick={() => Navigate(-1)}>CLOSE</Button>
      </Btns>
    </Container>
  )
}
export default Ask
