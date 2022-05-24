import DiaryItem from './DIaryItem'

const DiaryList = ({ datas, onRemove }) => {
  return (
    <div>
      <h2>일기 리스트</h2>
      {datas.map((data) => (
        <DiaryItem id={data.id} {...data} onRemove={onRemove} />
      ))}
    </div>
  )
}
DiaryList.defaultProps = {
  dummy: [],
}

export default DiaryList
