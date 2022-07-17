import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ItemId = ({ DummyList }) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams({
    sort: 'ABC',
  })
  const [isSort, setIsSort] = useState(true)
  const sort = searchParams.get('sort')
  console.log(sort)
  const dummyId = DummyList.map((dummy) => {
    return dummy.id
  })
  const changeSort = () => {
    setSearchParams({ sort: sort === 'ABC' ? 'ZYX' : 'ABC' })
    navigate(`/item/id/?sort=${isSort ? 'ABC' : 'ZYX'}`)
    setIsSort((prev) => !prev)
  }
  const sortId = (dummyId, isSort) => {
    return dummyId?.sort((idA, idB) => {
      if (!isSort) {
        return idA > idB ? -1 : 1
      } else {
        return idA < idB ? -1 : 1
      }
    })
  }
  sortId(dummyId, isSort)
  console.log(dummyId)

  return (
    <>
      <div className="id-header">
        <div className="dummy-title">ID로 분류</div>
        {isSort ? (
          <button onClick={changeSort}>ABC</button>
        ) : (
          <button onClick={changeSort}>ZYX</button>
        )}
      </div>

      {dummyId.map((dummy) => (
        <div className="title">
          <div className="content" key="dummy.id">
            {dummy}
          </div>
          <Link to={`/items/${dummy}`}>얘 자세히보기</Link>
        </div>
      ))}
    </>
  )
}

export default ItemId
