import styled from '@emotion/styled'
import { Modal } from './Modal'
import { useState } from 'react'

const BoxContainer = styled.div`
  width: 400px;
  margin: 30px;
  border: 1px solid gray;
  padding: 10px;
  line-height: 2;
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0.5rem 0;
  font-size: 1.25rem;
`
const Content = styled.div`
  color: #3a3a3a;
  font-size: 1.25rem;
`
const Price = styled.span`
  border-radius: 30px;
  padding: 0.15rem 1.5rem;
  background-color: #3a3a3a;
  color: white;
  font-size: 1.5rem;
`
const Button = styled.button`
  background-color: white;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`
export const ProductList = ({ resultProductInfo, onRemove, changeProduct }) => {
  const { id, title, description, price } = resultProductInfo
  const [isShow, setIsShow] = useState(false)
  const viewModal = () => {
    setIsShow((prev) => !prev)
  }
  return (
    <>
      {isShow ? (
        <Modal
          changeProduct={changeProduct}
          resultProductInfo={resultProductInfo}
          viewModal={viewModal}
        />
      ) : (
        <BoxContainer key={id}>
          <Title>{title}</Title>
          <Content>{description}</Content>
          <Price>$ {price}</Price>
          <Button onClick={() => onRemove(id)}>제거</Button>
          <Button onClick={viewModal}>수정</Button>
        </BoxContainer>
      )}
    </>
  )
}
