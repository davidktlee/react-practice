const Buttons = ({ text, type, onClick }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default'

  return (
    <button className={['buttons', `buttons_${btnType}`].join(' ')} onClick={onClick}>
      {text}
    </button>
  )
}

Buttons.defaultProps = {
  type: 'default',
}
export default Buttons
