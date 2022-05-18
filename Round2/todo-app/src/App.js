import { useState, useCallback, useRef } from 'react'
import TodoInsert from './components/TodoInsert'
import TodoTemplate from './components/TodoTemplate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
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
