import Buttons from './Buttons'
import { useNavigate } from 'react-router-dom'

const DiaryItem = ({ id, emotion, content, date }) => {
  const Navigate = useNavigate()
  const goDetail = () => {
    Navigate(`/diary/${id}`)
  }
  const goEdit = () => {
    Navigate(`/edit/${id}`)
  }

  const strDate = new Date(parseInt(date)).toLocaleDateString()
  console.log(strDate)
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={['emotion_img_wrapper', `emotion_img_wrapper_${emotion}`].join(' ')}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} alt="emotion" />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <Buttons onClick={goEdit} text="수정하기" />
      </div>
    </div>
  )
}
export default DiaryItem
