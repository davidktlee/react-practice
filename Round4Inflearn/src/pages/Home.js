import { useState, useContext, useEffect } from 'react'
import Header from '../components/Header'
import Buttons from '../components/Buttons'
import { DiaryStateContext } from '../App'
import DiaryList from '../components/DiaryList'

const Home = () => {
  const diaryList = useContext(DiaryStateContext)

  const [data, setData] = useState([])
  const [curDate, setCurDate] = useState(new Date())
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime()
      const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getTime()

      setData(diaryList.filter((diary) => firstDay <= diary.date && diary.date <= lastDay))
    }
  }, [diaryList, curDate])

  useEffect(() => {
    console.log(data)
  }, [data])

  const increseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()))
  }
  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()))
  }
  return (
    <div>
      <Header
        headText={headText}
        leftChild={<Buttons text={'<'} onClick={decreaseMonth} />}
        rightChild={<Buttons text={'>'} onClick={increseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  )
}
export default Home
