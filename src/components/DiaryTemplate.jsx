import '../scss/DiaryTemplate.scss'

const DiaryTemplate = ({ children }) => {
  return (
    <div className="diaryTemplate">
      <div className="app-title">오늘의 일기</div>
      <div className="content">{children}</div>
    </div>
  )
}
export default DiaryTemplate
