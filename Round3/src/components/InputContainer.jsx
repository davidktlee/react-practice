import { InputOne } from './Inputs'
import styled from '@emotion/styled'

const InputContent = styled.div`
  width: 400px;
  height: 350px;
  margin: 30px auto;
  border: 1px solid;
  flex-wrap: wrap;
  h2 {
    margin-left: 30px;
  }
`
export const InputContainer = ({ onChange, onClick, productInfos, count, setCount }) => {
  return (
    <InputContent>
      <InputOne onChange={onChange} onClick={onClick} productInfos={productInfos} />
    </InputContent>
  )
}
