import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useReducer, useRef } from 'react'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
// COMPONENTS
// import Buttons from './components/Buttons'
// import Header from './components/Header'
const reducer = (state, action) => {
  let newState = []
  switch (action.type) {
    case 'INIT': {
      return action.data
    }
    case 'CREATE': {
      const newItem = {
        ...action.data,
      }
      newState = [newItem, ...state]
      break
    }
    case 'REMOVE': {
      newState = state.filter((it) => it.id !== action.targetId)
      break
    }
    case 'EDIT': {
      newState = state.map((it) => (it.id === action.data.id ? { ...action.data } : it))
      break
    }
    default:
      return state
  }
}
export const DiaryStateContext = React.createContext()
export const DiaryDispatchContext = React.createContext()

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: '1번 일기',
    date: 1653049711518,
  },
  {
    id: 2,
    emotion: 2,
    content: '2번 일기',
    date: 1653049711519,
  },
  {
    id: 3,
    emotion: 3,
    content: '3번 일기',
    date: 1653049711517,
  },
  {
    id: 4,
    emotion: 4,
    content: '4번 일기',
    date: 1653049711515,
  },
]
function App() {
  const [data, dispatch] = useReducer(reducer, dummyData)

  const dataId = useRef(0)
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        data: new Date(date).getTime(),
        content,
        emotion,
      },
    })
    dataId.current += 1
  }
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId })
  }
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    })
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              {/* <Route path="/diary/" element={<Diary />} /> 예외처리 */}
              <Route path="/diary/:id" element={<Diary />} />
              <Route />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  )
}

export default App

/*    <Header
          headText={'App'}
          leftChild={<Buttons text={'왼쪽 버튼'} onClick={() => alert('왼쪽클릭')} />}
          rightChild={<Buttons text={'오른쪽 버튼'} onClick={() => alert('오른쪽클릭')} />}
        />
        <h2>App.js</h2>
        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} /> 
        <Buttons text={'버튼'} onClick={() => alert('클릭')} type="positive" />
        <Buttons text={'버튼'} onClick={() => alert('클릭')} type="negative" />
        <Buttons text={'버튼'} onClick={() => alert('클릭')} /> */
