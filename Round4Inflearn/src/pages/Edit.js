import { useSearchParams, useNavigate } from 'react-router-dom'
const Edit = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const id = searchParams.get('id')
  const mode = searchParams.get('mode')
  console.log(id)
  console.log(mode)
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ name: 'taggy' })}>qs바꾸기</button>
      <button onClick={() => navigate('/')}>홈으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  )
}
export default Edit
