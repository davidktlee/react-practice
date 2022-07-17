import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios'
import Business from './pages/Business'
import Home from './pages/Home'
import Header from './components/Header'
import Technology from './pages/Technology'
// import { fetchNews } from './api/Api'
import { RoutePage } from './routes/Route'
import ContextApi, { ContextData } from './context/ContextApi'

function App() {
  return (
    <>
      <Header></Header>
      <ContextApi>
        <RoutePage />
      </ContextApi>
    </>
  )
}

export default App
