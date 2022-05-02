import { emailCheck } from './emailCheck'

export const validate = (
  userInform,
  userNameInput,
  emailInput,
  sexInput,
  passwordInput,
  setUser
) => {
  if (userInform.password !== userInform.passwordConfirm) {
    alert('비밀번호가 틀립니다.')
    setUser({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    })
    userNameInput.current.focus()
    return false
  } else if (userInform.username.length < 3) {
    alert('이름을 3자 이상 입력하세요')
    userNameInput.current.focus()
    return false
  } else if (emailCheck(userInform.email) === false) {
    alert('email 형식이 올바르지 않습니다.')
    emailInput.current.focus()
    return false
  } else if (userInform.sex === '') {
    alert('성별을 입력하세요')
    sexInput.current.focus()
    return false
  } else if (userInform.password.length < 3) {
    alert('패스워드를 3자 이상 입력하세요')
    passwordInput.current.focus()
    return false
  }
  return true
}
