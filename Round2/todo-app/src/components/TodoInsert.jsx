import { useState, useCallback } from 'react'
import './TodoInsert.scss'
import { MdAdd } from 'react-icons/md'
import { validation } from './Validate'
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('')
  const onChange = useCallback((e) => {
    setValue(e.target.value)
    console.log(value)
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
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일 입력" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}
export default TodoInsert
