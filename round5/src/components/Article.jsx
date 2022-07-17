import ArticleView from './ArticleView'

const Article = ({ data }) => {
  return (
    <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-ellipsis">
      {data.map((item) => (
        <ArticleView data={item} />
      ))}
    </div>
  )
}
export default Article
