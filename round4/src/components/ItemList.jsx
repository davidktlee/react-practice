import '../css/ItemList.css'
import { Link } from 'react-router-dom'

const ItemList = ({ DummyList }) => {
  const Dummy = DummyList.map((dummy) => {
    return dummy
  })
  console.log(Dummy)
  return (
    <div>
      <div className="dummy-title">더미 아이들</div>

      <div className="container">
        {DummyList.map((dummy) => (
          <div className="title" key={dummy.id}>
            <div className="content">존함: {dummy.title}</div>
            <Link to={`/items/${dummy.id}`}>얘 자세히보기</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ItemList
