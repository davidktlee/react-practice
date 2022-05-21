import { Routes, Route } from 'react-router-dom'

/* COMPONENT */
import Home from './components/Home'
import Header from './components/Header'
import ItemList from './components/ItemList'
import Items from './components/Items'
import DummyList from './components/DummyList'
import ItemId from './components/ItemId'
import ItemPhone from './components/ItemPhone'
import ItemTitle from './components/ItemTitle'
import ItemEmail from './components/ItemEmail'
import ItemAddress from './components/ItemAddress'
import ItemCity from './components/ItemCity'
import ItemCompany from './components/ItemCompany'
import ItemCountry from './components/ItemCountry'
import ItemDate from './components/ItemDate'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<ItemList DummyList={DummyList} />} />
        <Route path="/item/id" element={<ItemId DummyList={DummyList} />} />
        <Route path="/item/title" element={<ItemTitle DummyList={DummyList} />} />
        <Route path="/item/phone" element={<ItemPhone DummyList={DummyList} />} />
        <Route path="/item/email" element={<ItemEmail DummyList={DummyList} />} />
        <Route path="/item/address" element={<ItemAddress DummyList={DummyList} />} />
        <Route path="/item/city" element={<ItemCity DummyList={DummyList} />} />
        <Route path="/item/company" element={<ItemCompany DummyList={DummyList} />} />
        <Route path="/item/country" element={<ItemCountry DummyList={DummyList} />} />
        <Route path="/item/date" element={<ItemDate DummyList={DummyList} />} />
        <Route path="/items/:id" element={<Items DummyList={DummyList} />} />
      </Routes>
    </>
  )
}

export default App
