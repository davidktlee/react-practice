import Buttons from '../components/buttons'
import { useState, useContext } from 'react'
import axios from 'axios'
import UseContextApi from '../App'

const Business = () => {
  const { onClick, data } = useContext(UseContextApi)

  const URL = 'category=business'
  return (
    <>
      <div className="text-center text-3xl">Fetch Business News</div>
      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow w-full">
          <Buttons onClick={() => onClick(URL)} text="Get Business"></Buttons>
        </div>
      </div>
      {data && <div value={JSON.stringify(data, null, 2)}>{JSON.stringify(data, null, 2)}</div>}
    </>
  )
}
export default Business
