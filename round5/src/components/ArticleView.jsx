import { Link } from 'react-router-dom'
const ArticleView = ({ data }) => {
  console.log(data)
  return (
    /* xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 */
    <div className=" border-1 border-solid border-black rounded m-5 p-5 overflow-hidden whitespace-normal break-words ">
      <div className="flex justify-center items-center">
        <img src={data.urlToImage} alt="img" className="truncate min-w-full min-h-full max-h-64" />
      </div>
      <div className="my-5">{data.title}</div>
      <div>{data.author}</div>
      <div>
        자세히 보기: <Link to="">{data.url}</Link>
      </div>
    </div>
  )
}

export default ArticleView
