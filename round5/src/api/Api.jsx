import axios from 'axios'

export async function request({ category = '', pageNumber = 1 }) {
  const res = await axios({
    url: `https://newsapi.org/v2/top-headlines?country=kr&${category}&page=${pageNumber}&apiKey=a56e7343eef34770be941a0e9da22034`,
  })

  return res.data
}
