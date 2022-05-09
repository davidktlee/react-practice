import { useState, useCallback, useRef } from 'react'
import TodoInsert from './components/TodoInsert'
import TodoTemplate from './components/TodoTemplate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 스타일링',
      checked: true,
    },
  ])
  // 값은 바뀌지만 화면에 렌더링 되지 않게 하기위해
  const nextId = useRef(4)
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }
      setTodos([...todos, todo])
      nextId.current += 1
    },
    [todos]
  )

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    },
    [todos]
  )

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
    },
    [todos]
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
}

export default App
