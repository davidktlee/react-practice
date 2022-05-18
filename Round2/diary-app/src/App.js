import { useState, useCallback, useRef } from 'react'
import DiaryInsert from './components/DiaryInsert'
import DiaryTemplate from './components/DiaryTemplate'
import DiaryList from './components/DiaryList'

function App() {
  const [diaries, setDiaries] = useState([])
  // const [modalState, setModalState] = useState(false)
  // const handleModal = () => {
  //   setModalState(true)
  // }
  // 값은 바뀌지만 화면에 렌더링 되지 않게 하기위해
  const nextId = useRef(1)
  const onInsert = useCallback(
    (text) => {
      const diary = {
        id: nextId.current,
        text,
        checked: false,
      }
      setDiaries([...diaries, diary])
      nextId.current += 1
    },
    [diaries]
  )

  const onRemove = useCallback(
    (id) => {
      setDiaries(diaries.filter((diary) => diary.id !== id))
    },
    [diaries]
  )
  const changeText = (id, newText) => {
    setDiaries(
      diaries.map((diary) =>
        diary.id === id ? { ...diary, text: newText, checked: !diary.checked } : diary
      )
    )
  }

  return (
    <DiaryTemplate>
      <DiaryInsert onInsert={onInsert} />
      <DiaryList
        diaries={diaries}
        onRemove={onRemove}
        changeText={changeText}
        // modalState={modalState}
        // handleModal={handleModal}
      />
    </DiaryTemplate>
  )
}

export default App
