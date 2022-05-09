import DiaryListItem from './DiaryListItem'
import '../scss/DiaryList.scss'

const DiaryList = ({ diaries, onRemove, onToggle }) => {
  return (
    <div className="DiaryList">
      {diaries.map((diary) => (
        <DiaryListItem diary={diary} key={diary.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default DiaryList
