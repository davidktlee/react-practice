export const validation = (value) => {
  if (value.length < 10) {
    alert('10자 이상 입력하세요')
    return false
  }
  return true
}
