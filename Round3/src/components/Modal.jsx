import { useState } from 'react'
import styled from '@emotion/styled'

const BoxContainer = styled.div`
  width: 400px;
  margin: 30px;
  border: 1px solid gray;
  padding: 10px;
  line-height: 2;
  background-color: orange;
`
const Title = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0.5rem 0;
  font-size: 1.25rem;
`
const Content = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0.5rem 0;
  font-size: 1.25rem;
`
const Price = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0.5rem 0;
  font-size: 1.25rem;
`
const Button = styled.button`
  background-color: white;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`
export const Modal = ({ changeProduct, resultProductInfo, viewModal }) => {
  // const { id, title, description, price } = resultProductInfo
  const [newValue, setNewValue] = useState({ resultProductInfo })
  const onChange = (e) => {
    setNewValue({ ...newValue, [e.target.name]: e.target.value })
  }
  const ChangeValue = (id, value) => {
    changeProduct(id, value)
    viewModal((prev) => !prev)
  }
  const cancelChange = () => {
    setNewValue(resultProductInfo)
    viewModal((prev) => !prev)
  }
  return (
    <>
      <BoxContainer>
        <Title placeholder="제품명" onChange={onChange} name="title" value={newValue.title}></Title>
        <Price placeholder="가격" onChange={onChange} name="price" value={newValue.price}></Price>
        <Content
          placeholder="설명"
          onChange={onChange}
          name="desc"
          value={newValue.description}
        ></Content>
        <Button onClick={() => ChangeValue(resultProductInfo.id, newValue)}>수정완료</Button>
        <Button onClick={cancelChange}>취소</Button>
      </BoxContainer>
    </>
  )
}
