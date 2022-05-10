export const validation = (value) => {
  if (value.length < 5) {
    alert('5자 이상 입력하세요')
    return false
  }
  return true
}
