import React, { useState } from 'react'
import PropTypes from 'prop-types'
const Say = (props) => {
  const { name, age } = props
  const [message, setMessage] = useState('')
  const onClickEnter = () => setMessage('안녕하세요')
  const onClickLeave = () => setMessage('안녕히가세요')

  const [color, setColor] = useState('black')
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
      <header>
        안녕하세요 {name} , {age} 살 입니다.
      </header>
    </div>
  )
}

Say.defaultProps = {
  name: '기본',
}
Say.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}
export default Say
