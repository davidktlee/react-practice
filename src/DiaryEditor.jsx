import { useState, useRef } from 'react'
import styled from '@emotion/styled'

const DiaryContainer = styled.div`
  border: 1px solid gray;
  text-align: center;
  padding: 20px;
`
const Input = styled.input`
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
`
const TextArea = styled.textarea`
  margin-bottom: 20px;
  width: 500px;
  padding: 10px;
  height: 150px;
  resize: none;
`
const Select = styled.select`
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
`
const Button = styled.button`
  width: 500px;
  padding: 10px;
  cursor: pointer;
`

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef()
  const contentArea = useRef()
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  })

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (state.author.length < 3) {
      authorInput.current.focus()
      return
    }
    if (state.content.length < 3) {
      contentArea.current.focus()
      return
    }
    onCreate(state.author, state.content, state.emotion)
    setState({
      author: '',
      content: '',
      emotion: 1,
    })
  }
  return (
    <DiaryContainer className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <Input
          name="author"
          type="text"
          value={state.author}
          onChange={onChange}
          ref={authorInput}
        />
      </div>
      <div>
        <TextArea
          name="content"
          cols="30"
          rows="10"
          value={state.content}
          onChange={onChange}
          ref={contentArea}
        ></TextArea>
      </div>
      <div>
        <Select name="emotion" value={state.emotion} onChange={onChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Select>
      </div>
      <div>
        <Button onClick={handleSubmit}>저장</Button>
      </div>
    </DiaryContainer>
  )
}
export default DiaryEditor
