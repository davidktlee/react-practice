import { Link } from 'react-router-dom'

const ItemDate = ({ DummyList }) => {
  return (
    <>
      <div className="dummy-title">date로 분류</div>
      <div className="container">
        {DummyList.map((dummy) => (
          <div className="title">
            <div className="content" key="dummy.id">
              {dummy.date}
            </div>
            <Link to={`/items/${dummy.id}`}>얘 자세히보기</Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemDate
