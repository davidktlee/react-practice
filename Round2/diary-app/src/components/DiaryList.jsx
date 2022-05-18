import DiaryListItem from './DiaryListItem'

const DiaryList = ({ diaries, onRemove, changeText }) => {
  return (
    <div className="DiaryList">
      {diaries.map((diary) => (
        <DiaryListItem diary={diary} key={diary.id} onRemove={onRemove} changeText={changeText} />
      ))}
    </div>
  )
}

export default DiaryList
