import styled from '@emotion/styled'
import { InputTwo } from './Inputs'

const FatherContent = styled.div`
  width: 200px;
  height: 150px;
  margin: 30px auto;
  border: 1px solid;
  flex-wrap: wrap;
`
export const Father = ({ count, clearItem }) => {
  return (
    <>
      <FatherContent>
        <InputTwo
          input={{ id: 'fathers-input', placeholder: '아이템 클리어' }}
          div={{ count: 'count' }}
          button={{ plus: 'clear', minus: 'cancel' }}
          count={count}
          func={clearItem}
        />
      </FatherContent>
    </>
  )
}
