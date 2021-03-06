import { MdRemoveCircleOutline } from 'react-icons/md'
import styled from '@emotion/styled'
import { useState } from 'react'
const DiaryListItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
`

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: rgb(255, 192, 203);
  cursor: pointer;
  &:hover {
    color: rgb(251, 110, 206);
  }
`
const Button = styled.button`
  width: 60px;
  background-color: #fff;
  border: 3px solid rgb(255, 192, 203);
  border-radius: 15px;
  flex: 0.1;
`

const Textarea = styled.textarea`
  flex: 1;
  background-color: rgb(250, 215, 221);
  font-size: 18px;
  resize: none;
`
const DiaryListItem = ({ diary, onRemove, changeText }) => {
  const { id, text, checked } = diary
  const [value, setValue] = useState(text)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <>
      <DiaryListItems>
        {checked ? <Textarea onChange={onChange} value={value}></Textarea> : <Text>{text}</Text>}
        {checked ? (
          <Button onClick={() => changeText(id, value)}>완료</Button>
        ) : (
          <Button onClick={() => changeText(id)}>수정</Button>
        )}
        <Remove onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </Remove>
      </DiaryListItems>
    </>
  )
}

export default DiaryListItem
