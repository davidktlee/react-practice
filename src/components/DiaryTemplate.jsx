import styled from '@emotion/styled'

const DiaryTemplates = styled.div`
  width: 500px;
  margin: 5rem auto;
  border-radius: 4px;
  overflow: hidden;
`
const AppTitle = styled.div`
  background-color: #fa8dce;
  color: rgb(108, 255, 132);
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  background-color: #fff;
`

const DiaryTemplate = ({ children }) => {
  return (
    <DiaryTemplates>
      <AppTitle>오늘의 일기</AppTitle>
      <Content>{children}</Content>
    </DiaryTemplates>
  )
}
export default DiaryTemplate
