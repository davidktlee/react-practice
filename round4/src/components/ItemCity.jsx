import { Link } from 'react-router-dom'

const ItemCity = ({ DummyList }) => {
  return (
    <>
      <div className="dummy-title">city로 분류</div>
      <div className="container">
        {DummyList.map((dummy) => (
          <div className="title">
            <div className="content" key="dummy.id">
              {dummy.city}
            </div>
            <Link to={`/items/${dummy.id}`}>얘 자세히보기</Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemCity
