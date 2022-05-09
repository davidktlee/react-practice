import { useState, useCallback } from 'react'
import '../scss/DiaryInsert.scss'
import { MdAdd } from 'react-icons/md'
import { validation } from './Validate'

const DiaryInsert = ({ onInsert }) => {
  const [value, setValue] = useState('')
  const onChange = useCallback((e) => {
    setValue(e.target.value)
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
    <form className="DiaryInsert" onSubmit={onSubmit}>
      <textarea placeholder="오늘의 일기 입력창" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}
export default DiaryInsert
