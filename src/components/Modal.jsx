import React from 'react'
import styled from '@emotion/styled'

// const ModalContainer = styled.div`
//   /* position: fixed; */
//   /* top: 5px;
//   left: 0; */
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 99;
//   display: flex;
//   justify-content: center;
//   align-content: center;
// `
// const Button = styled.button`
//   position: absolute;
//   bottom: 30px;
//   width: 50px;
//   height: 50px;
//   border: 1px solid #fff;
//   border-radius: 5px;
//   background-color: #f4befe;
//   color: #fff;
// `
// const Content = styled.div`
//   position: absolute;
//   top: 30px;
//   width: 300px;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: #f4beff;
//   font-size: 25px;
//   border-radius: 5px;
//   border: 1px solid #fff;
// `
const Modal = ({ text, handleModal, value }) => {
  return (
    <div>
      <h1>수정</h1>
      <div>{value}</div>
      <button onClick={!handleModal}>닫기</button>
    </div>
  )
}

export default Modal
