import '../css/Header.css'
import Buttons from './Buttons'

import { NavLink, Link } from 'react-router-dom'
const Header = () => {
  const activeStyle = {
    textDecoration: 'underline',
    backgroundColor: 'purple',
  }
  return (
    <header>
      <div className="nav-core">
        <Link className="nav-login" to="/login">
          Login
        </Link>
        <Buttons className={'default'} text={'back'} />
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="item" to="/item">
          Item
        </Link>
      </div>
      <div className="nav-list">
        <NavLink to="/item/id" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          id
        </NavLink>
        <NavLink to="/item/title" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          title
        </NavLink>
        <NavLink to="/item/phone" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          phone
        </NavLink>
        <NavLink to="/item/email" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          email
        </NavLink>
        <NavLink to="/item/address" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          address
        </NavLink>
        <NavLink to="/item/city" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          city
        </NavLink>
        <NavLink to="/item/company" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          company
        </NavLink>
        <NavLink to="/item/country" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          country
        </NavLink>
        <NavLink to="/item/date" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          date
        </NavLink>
        <NavLink to="/item/selling" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          clothes
        </NavLink>
      </div>
    </header>
  )
}
export default Header
