import { Children, createContext, useState } from 'react'
import { request } from './../api/Api'

export const ContextData = createContext()

const ContextApi = (props) => {
  const [data, setData] = useState(null)

  async function fetchNews(category, pageNumber) {
    const { data } = await request({})
    setData('')
    setData(data)
  }

  return <ContextData.Provider>{props.children}</ContextData.Provider>
}

export default ContextApi
