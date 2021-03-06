import React from 'react'
import { Global, css } from '@emotion/react'

const style = css`
  form {
    width: 400px;
    height: 450px;
    margin: 20px 0 0 50px;
    border: 1px solid;
    background-color: #f2f217;
    ::placeholder {
      color: #00225c;
    }
    input {
      width: 300px;
      height: 25px;
      margin: 20px 50px;
      background-color: #61d2f8;
    }
    select {
      width: 305px;
      height: 30px;
      margin: 20px 50px;
      background-color: #61d2f8;
    }
  }
  h1 {
    display: flex;
    justify-content: center;
    color: #61d2f8;
  }
  button {
    width: 150px;
    height: 35px;
    margin: 30px 125px;
    color: #00225c;
    font-size: 20px;
    font-weight: bold;
    border-color: #fff;
    background-color: #61d2f8;
  }
`
const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
