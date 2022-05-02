import { emailCheck } from '../utils/emailCheck'
export const checkData = (
  userInform,
  userNameInput,
  emailInput,
  sexInput,
  passwordInput,
  setUser,
  setCountIndex,
  countindex,
  setUserlist,
  userlist
) => {
  const Validate = (
    userInform,
    userNameInput,
    emailInput,
    sexInput,
    passwordInput,
    setUser,
    setCountIndex,
    countindex,
    setUserlist,
    userlist
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
  const endCheck = (setUser, setCountIndex, setUserlist, userlist, userInform, username, email) => {
    if (Validate()) {
      setCountIndex((index) => index + 1)
      setUserlist([...userlist, userInform])
      setUser({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      })
      alert(`${username}, ${email}로 가입되셨습니다.`)
    }
  }
  return endCheck()
}
