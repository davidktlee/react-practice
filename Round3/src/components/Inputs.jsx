import styled from '@emotion/styled'

const Input = styled.input`
  width: 300px;
  height: 25px;
  margin: 10px 20px;
`
const Button = styled.button`
  width: 100px;
  display: block;
  margin: 20px auto;
`
const InputOne = (props) => {
  const { id, title, price, description } = props.productInfos

  return (
    <>
      <h2>제품 등록</h2>
      <Input type="text" placeholder="일련번호" name="id" value={id} onChange={props.onChange} />
      <Input
        type="text"
        placeholder="제품명"
        name="title"
        value={title}
        onChange={props.onChange}
      />
      <Input
        type="text"
        placeholder="가격($)"
        name="price"
        value={price}
        onChange={props.onChange}
      />
      <Input
        type="text"
        placeholder="설명"
        name="description"
        value={description}
        onChange={props.onChange}
      />
      <Button onClick={props.onClick}>추가</Button>
    </>
  )
}

const InputTwo = (props) => {
  return (
    <>
      <input {...props.input} />
      <div>
        {props.div.count}:{props.count}
      </div>
      <button onClick={props.func}>{props.button.plus}</button>
      <button onClick={props.func}>{props.button.minus}</button>
    </>
  )
}
export { InputOne, InputTwo }
