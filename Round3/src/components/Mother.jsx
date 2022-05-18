import styled from '@emotion/styled'
import { InputTwo } from './Inputs'
const MotherContent = styled.div`
  width: 200px;
  height: 150px;
  margin: 30px auto;
  border: 1px solid;
  flex-wrap: wrap;
`
export const Mother = ({ count, onMinus, onPlus }) => {
  return (
    <>
      <MotherContent>
        <InputTwo
          input={{ type: 'text', placeholder: 'count', id: 'mothers-input' }}
          button={{ plus: 'plus', minus: 'minus' }}
          div={{ count: 'count' }}
          count={count}
          func={(onPlus, onMinus)}
        />
      </MotherContent>
    </>
  )
}
