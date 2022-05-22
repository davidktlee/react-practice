import styled from '@emotion/styled'
import { useParams, Link, Outlet } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  margin-left: 50px;
`
const Items = styled.div`
  width: 600px;
  height: 500px;
  margin: 10px;
  padding: 10px;
  display: inline-block;
  border: 1px solid #999;
  border-radius: 5px;
`
const Item = styled.div`
  margin: 15px;
  color: #333;
  font-size: 20px;
  &.red {
    color: red;
    font-weight: bold;
    text-decoration: underline;
  }
`
const LinkStyle = styled(Link)`
  background-color: #fff;
  color: #333;
  border: 1px solid;
`

const Clothes = ({ DummyList }) => {
  const params = useParams()
  // console.log(params)
  const Dummy = DummyList.filter((dummy) => params.sellingItem === dummy.sellingItem)

  // console.log(Dummy.map((item) => item.currency))
  // console.log(Dummy)
  return (
    <Container>
      {Dummy.map((item) => (
        <Items key="item.id">
          <h1>{item.sellingItem}</h1>
          <Item>cotton</Item>
          <Item>Price: {item.currency}</Item>
          <Item>
            {item.isSales ? (
              <>
                <Item className="red">
                  Sale Price: $
                  {Number(
                    item.currency.replace('$', '').split(',').join().replace(',', '') * 0.75
                  ).toFixed(2)}
                </Item>
                <Item className="red">Limited Date: {item.date}</Item>
              </>
            ) : (
              <Item>No Sale</Item>
            )}
          </Item>
          {item.normaldist > 5 ? (
            <Item>Remaining Quantities: {item.normaldist}</Item>
          ) : (
            <Item className="red">Last Quantities: {item.normaldist}!!!</Item>
          )}

          <LinkStyle to={`/items/${item.id}/${item.sellingItem}/ask`}>Customer Service</LinkStyle>
        </Items>
      ))}
      <Outlet />
    </Container>
  )
}
export default Clothes
