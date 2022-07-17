import React, { useState, useContext } from 'react'
import axios from 'axios'
import Buttons from '../components/buttons'
import Article from './../components/Article'

import { ContextData } from './../context/ContextApi'

const Home = () => {
  const data = useContext(ContextData)
  console.log(data)
  return (
    <>
      <div className="text-center text-3xl">Fetch All News</div>
      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow w-full">
          {/* <Buttons onClick={() => onClick()} text="Get started"></Buttons> */}
        </div>
      </div>
      {data && <Article data={data}></Article>}
    </>
  )
}
export default Home
