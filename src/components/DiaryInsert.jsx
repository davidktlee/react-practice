import { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'
import { validation } from './Validate'
import styled from '@emotion/styled'

const Form = styled.form`
  display: flex;
  background-color: #495057;
`
const Textarea = styled.textarea`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: #fff;
  resize: none;
  flex: 1;
  &::placeholder {
    color: rgb(108, 255, 132);
  }
`
const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background-color: rgb(255, 192, 203);
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(251, 110, 206);
  }
`
const DiaryInsert = ({ onInsert }) => {
  const [value, setValue] = useState('')
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      if (validation(value)) {
        onInsert(value)
        setValue('')
        e.preventDefault()
      }
    },
    [onInsert, value]
  )
  return (
    <Form onSubmit={onSubmit}>
      <Textarea placeholder="오늘의 일기 입력창" value={value} onChange={onChange} />
      <Button type="submit">
        <MdAdd />
      </Button>
    </Form>
  )
}
export default DiaryInsert
