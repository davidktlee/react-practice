import React from 'react'
import styled from 'styled-components'
const ModalContainer = styled.div`
  position: fixed;
  top: 5px;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-content: center;
  &.close {
    display: none;
  }
`
const Button = styled.button`
  position: absolute;
  bottom: 10px;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 3px;
  background-color: #f4beff;
  color: #61d2f8;
  .disappear {
    display: none;
  }
`

const Userlist = styled.div`
  position: absolute;
  top: 30px;
  width: 300px;
  padding: 20px;
  border: 1px solid black;
  background-color: #f4beff;
  font-size: 25px;
  border-radius: 5px;
  border: 1px solid #fff;
  li {
    margin: 10px 0;
  }
`

export const Modals = ({ closeModal, userlist }) => {
  return (
    <ModalContainer>
      {userlist.map((item) => (
        <Userlist key={item.countindex}>
          회원가입 결과
          <li>이름: {item.username}</li>
          <li>이메일: {item.email}</li>
          <li>성별: {item.sex}</li>
        </Userlist>
      ))}
      <Button onClick={closeModal}>X</Button>
    </ModalContainer>
  )
}
