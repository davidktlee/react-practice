import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <div className=" bg-white dark:bg-gray-800">
        <div className="flex mx-auto justify-center items-center sm:flex-row sm:justify-around">
          <div class="w-50 h-50 flex my-5">
            <Link
              to="/"
              className=" hover:text-gray-800 hover:bg-gray-100 flex items-center p-4 mx-10 my-6  transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
            >
              <span className=" text-lg font-normal">Home</span>
            </Link>
            <Link
              to="/business"
              className=" hover:text-gray-800 hover:bg-gray-100 flex items-center p-4 ml-14 mr-10 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
            >
              <span className=" text-lg font-normal">Business</span>
            </Link>
            <Link
              to="/technology"
              className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-4 mx-10 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-400 rounded-lg "
            >
              <span className=" text-lg font-normal">technology</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
