import styled from '@emotion/styled'
import { useState } from 'react'

const ItemContainer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin-top: 20px;
`
const Items = styled.span`
  background-color: #666;
  margin-botton: 10px;
  padding: 20px;
`

const DiaryItem = ({ author, content, id, createdDate, onRemove }) => {
  const [editstate, setEditState] = useState(false)
  const onEdit = () => {
    setEditState((prev) => !prev)
  }
  return (
    <>
      <ItemContainer key={id}>
        <h3>일기</h3>
        <Items>작성시간: {new Date(createdDate).toLocaleDateString()}</Items>
        <Items>작성자: {author}</Items>
        <Items>내용: {content}</Items>
        <button onClick={onEdit}>수정</button>
        <button onClick={() => {onRemove(id)}}>슥삭</button> 
        <button>수정</button>
      </ItemContainer>
    </>
  )
}
export default DiaryItem

/* <ItemContainer key={id}>
        {editstate ? (
          <div>
            <h3>일기</h3>
            <textarea>{content}</textarea>
            <button onClick={onEdit}>완료</button>
          </div>
        ) : (
          <div>
            <h3>일기</h3>
            <Items>작성시간: {new Date(createdDate).toLocaleDateString()}</Items>
            <Items>작성자: {author}</Items>
            <Items>내용: {content}</Items>
            <button onClick={onEdit}>수정</button>
            <button
              onClick={() => {
                onRemove(id)
              }}
            >
              슥삭
            </button>
          </div>
        )}
      </ItemContainer> */
