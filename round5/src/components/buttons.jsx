const Buttons = (props) => {
  return (
    <>
      <button
        onClick={props.onClick}
        type="button"
        className="py-4 px-6 my-10 mx-auto bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-500px transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg  cursor-pointer"
      >
        {props.text}
      </button>
    </>
  )
}
export default Buttons
