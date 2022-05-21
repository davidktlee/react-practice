import '../css/Header.css'
import Buttons from './Buttons'

import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <Buttons className={'default'} text={'back'} />
      <div>
        <Link to="/">Home</Link>
        <Link to="/item">Item</Link>
      </div>
      <span>분류</span>
      <Link to={`/item/id`}>id</Link>
      <Link to={`/item/title`}>title</Link>
      <Link to={`/item/phone`}>phone</Link>
      <Link to={`/item/email`}>email</Link>
      <Link to={`/item/address`}>address</Link>
      <Link to={`/item/city`}>city</Link>
      <Link to={`/item/company`}>company</Link>
      <Link to={`/item/country`}>country</Link>
      <Link to={`/item/date`}>date</Link>
    </header>
  )
}
export default Header
