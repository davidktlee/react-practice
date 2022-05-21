import { Link } from 'react-router-dom'

const ItemTitle = ({ DummyList }) => {
  return (
    <>
      <div className="dummy-title">title로 분류</div>
      <div className="container">
        {DummyList.map((dummy) => (
          <div className="title">
            <div className="content" key="dummy.id">
              {dummy.title}
            </div>
            <Link to={`/items/${dummy.id}`}>얘 자세히보기</Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemTitle
