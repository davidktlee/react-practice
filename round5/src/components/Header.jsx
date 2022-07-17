import Nav from './Nav'
const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-800 ">
      <div className="lg:flex lg:items-center lg:justify-center w-full mx-auto py-5 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="w-50 text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Want to be millionaire ?</span>
          <span className="block text-indigo-500">It&#x27;s today or never.</span>
        </h2>
      </div>
      <Nav></Nav>
    </div>
  )
}
export default Header
