import { Link } from 'react-router-dom'

const ItemId = ({ DummyList }) => {
  return (
    <>
      <div className="dummy-title">ID로 분류</div>
      {DummyList.map((dummy) => (
        <div className="title">
          <div className="content" key="dummy.id">
            {dummy.id}
          </div>
          <Link to={`/items/${dummy.id}`}>얘 자세히보기</Link>
        </div>
      ))}
    </>
  )
}

export default ItemId
