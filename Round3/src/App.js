import './App.css'
import React, { useReducer, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { InputContainer } from './components/InputContainer'
// import { Mother } from './components/Mother'
// import { Father } from './components/Father'
import { RenderProduct } from './components/RenderProduct'

const Container = styled.div`
  width: 500px;
  height: 1200px;
  margin: 100px auto;
`

const reducer = (state, action) => {
  return { ...state, [action.name]: action.value }
}

function App() {
  const [productInfos, dispatchSetProductInfo] = useReducer(reducer, {
    id: '',
    title: '',
    price: '',
    description: '',
  })
  // 더미 값
  const [resultProductInfos, setResultProduct] = useState([])
  const [count, setCount] = useState(1)

  useEffect(() => {
    const storedLocalProducts = JSON.parse(localStorage.getItem('product')) || []
    setResultProduct(storedLocalProducts)
  }, [])

  // 문제

  useEffect(() => {
    if (resultProductInfos?.length === 0) {
      localStorage.removeItem('product')
      return
    }
    localStorage.setItem('product', JSON.stringify(resultProductInfos))
  }, [resultProductInfos])

  const onChange = (e) => {
    dispatchSetProductInfo(e.target)
  }
  const onClick = () => {
    const storedLocalProducts = JSON.parse(localStorage.getItem('product')) || []
    setResultProduct([productInfos, ...storedLocalProducts])
  }

  const onRemove = (id) => {
    setResultProduct((prev) => prev.filter((resultProductInfo) => resultProductInfo.id !== id))
    console.log(id)
  }
  const changeProduct = (id, newValue) => {
    setResultProduct(
      resultProductInfos.map((resultProductInfo) =>
        resultProductInfo.id === id
          ? {
              ...resultProductInfo,
              title: newValue.title,
              price: newValue.price,
              description: newValue.description,
            }
          : resultProductInfo
      )
    )
  }
  // const onPlus = () => {
  //   setCount((prev) => prev + 1)
  // }
  // const onMinus = () => {
  //   setCount((prev) => prev - 1)
  // }
  // const clearItem = () => {
  //   localStorage.clear()
  // }
  return (
    <>
      {/* <Mother count={count} onPlus={onPlus} onMinus={onMinus} /> */}
      {/* <Father count={count} onPlus={onPlus} onMinus={onMinus} clearItem={clearItem} /> */}
      <InputContainer
        onChange={onChange}
        onClick={onClick}
        productInfos={productInfos}
        count={count}
        setCount={setCount}
      />
      <Container>
        <RenderProduct
          resultProductInfos={resultProductInfos}
          onRemove={onRemove}
          // viewModal={viewModal}
          // isShow={isShow}
          changeProduct={changeProduct}
        />
      </Container>
    </>
  )
}

export default App
