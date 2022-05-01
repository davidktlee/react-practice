import {EmailCheck} from '../emailCheck'

export const validate =(userinform, 
  userNameInput,
  emailInput,
  sexInput,
  passwordInput) => {
    if (userinform.password !== userinform.passwordConfirm) {
      alert('비밀번호가 틀립니다.')
      userNameInput.current.focus()
      return false
    } else if (userinform.username.length < 3) {
      alert('이름을 3자 이상 입력하세요')
      userNameInput.current.focus()
      return false
    } else if (userinform.email !== EmailCheck) {
      alert('email 형식이 올바르지 않습니다.')
      emailInput.current.focus()
      return false
    } else if (userinform.sex === '') {
      alert('성별을 입력하세요')
      sexInput.current.focus()
      return false
    } else if (userinform.password.length < 3) {
      alert('패스워드를 3자 이상 입력하세요')
      passwordInput.current.focus()
      return false
  }
  return true
}