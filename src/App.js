import './App.css'
import DiaryEditor from './DiaryEditor'
import DiaryList from './DIaryList'
import { useState, useRef } from 'react'

function App() {
  const [datas, setData] = useState([])
  const dataId = useRef(0)

  const onRemove = (id) => {
    const filteredData = datas.filter((data) => {
      return id !== data.id
    })
    setData(filteredData)
  }

  const onCreate = (author, content, emotion) => {
    const createdDate = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      createdDate,
      id: dataId.current,
    }
    dataId.current += 1
    setData([newItem, ...datas])
  }
  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList datas={datas} onRemove={onRemove} />
    </div>
  )
}

export default App
