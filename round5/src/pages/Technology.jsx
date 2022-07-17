import Buttons from '../components/buttons'
import React, { useState, useContext } from 'react'
import Article from '../components/Article'

const Technology = ({ props }) => {
  const { onClick, data } = props
  const URL = 'category=technology'
  return (
    <>
      <div className="text-center text-3xl">Fetch Technology News</div>
      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow w-full">
          <Buttons onClick={() => onClick(URL)} text="Get Technology"></Buttons>
        </div>
      </div>
      {data && <Article data={data}></Article>}
    </>
  )
}
export default Technology
