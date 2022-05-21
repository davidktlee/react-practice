import { useParams } from 'react-router-dom'

export const Diary = () => {
  const { id } = useParams() 
  console.log(id)
  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 리스트 입니다.</p>
    </div>
  )
}
export default Diary
