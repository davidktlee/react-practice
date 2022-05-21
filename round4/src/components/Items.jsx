import '../css/Items.css'
import { useParams } from 'react-router-dom'

const Items = ({ DummyList }) => {
  const params = useParams()
  // console.log(params)
  const Dummy = DummyList.filter((dummy) => params.id === dummy.id)
  console.log(Dummy)
  return (
    <div className="item-container">
      {Dummy.map((item) => (
        <div className="items" key="item.id">
          <h1>{item.title} 프로필</h1>
          <div className="item">name: {item.title}</div>
          <div className="item">phone: {item.phone}</div>
          <div className="item">@: {item.email}</div>
          <div className="item">addr: {item.address}</div>
          <div className="item">
            city: {item.city}
            <a href={`https://www.google.com/search?q=${item.city}`} className="move">
              구경ㄱ?
            </a>
          </div>
          <div className="item">company: {item.company}</div>
          <div className="item">country: {item.country}</div>
          <div className="item">date: {item.date}</div>
          <div className="item">phone: {item.phone}</div>
        </div>
      ))}
    </div>
  )
}
export default Items

// 맵을 돌려서 현재 url id랑 같은 id의 데이터만 출력
