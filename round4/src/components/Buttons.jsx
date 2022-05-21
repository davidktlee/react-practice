import '../css/Buttons.css'
import { useNavigate } from 'react-router-dom'
const Buttons = ({ text, className }) => {
  const Navigate = useNavigate()
  return (
    <>
      <button className={className} onClick={() => Navigate(-1)}>
        {text}
      </button>
    </>
  )
}
export default Buttons
