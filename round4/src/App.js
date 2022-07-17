import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
/* COMPONENT */
import Home from './components/Home'
import Header from './components/Header'
import DummyList from './components/DummyList'
import ItemList from './pages/ItemList'
import Items from './pages/Items'
import ItemId from './pages/ItemId'
import ItemPhone from './pages/ItemPhone'
import ItemTitle from './pages/ItemTitle'
import ItemEmail from './pages/ItemEmail'
import ItemAddress from './pages/ItemAddress'
import ItemCity from './pages/ItemCity'
import ItemCompany from './pages/ItemCompany'
import ItemCountry from './pages/ItemCountry'
import ItemDate from './pages/ItemDate'
import ItemClothes from './pages/ItemClothes'
import Clothes from './pages/Clothes'
import Ask from './pages/Ask'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

function App() {
  const getStorage = () => {
    if (JSON.parse(localStorage.getItem('user'))) {
      console.log(JSON.parse(localStorage.getItem('user')))
      return true
    }
    return false
  }
  const [onLogin, setOnLogin] = useState(getStorage())

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<ItemList DummyList={DummyList} />} />
        <Route path="/login" element={<Login setOnLogin={setOnLogin} />} />
        <Route path="/item/id" element={<ItemId DummyList={DummyList} />} />
        <Route path="/item/title" element={<ItemTitle DummyList={DummyList} />} />
        <Route path="/item/phone" element={<ItemPhone DummyList={DummyList} />} />
        <Route path="/item/email" element={<ItemEmail DummyList={DummyList} />} />
        <Route path="/item/address" element={<ItemAddress DummyList={DummyList} />} />
        <Route path="/item/city" element={<ItemCity DummyList={DummyList} />} />
        <Route path="/item/company" element={<ItemCompany DummyList={DummyList} />} />
        <Route path="/item/country" element={<ItemCountry DummyList={DummyList} />} />
        <Route path="/item/date" element={<ItemDate DummyList={DummyList} />} />
        <Route path="/item/selling" element={<ItemClothes DummyList={DummyList} />} />
        <Route path="/items/:id" element={<Items DummyList={DummyList} />} />
        <Route
          path="/items/:id/:sellingItem/"
          element={<Clothes DummyList={DummyList} onLogin={onLogin} setOnLogin={setOnLogin} />}
        >
          <Route
            path="/items/:id/:sellingItem/ask"
            element={<Ask DummyList={DummyList} onLogin={onLogin} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
