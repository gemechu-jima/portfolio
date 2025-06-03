import ReactDOM from 'react-dom'

function Model({children, onClick}) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={onClick}>
      <div className="sm:w-full sm:h-[50rem] mx-16  bg-white bg-opacity-100 flex items-center justify-center relative"
        onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-red-500 hover:text-gray-800 font-extrabold text-4xl" onClick={onClick}>X</button>
        {children}
      </div>
    </div>,

     document.getElementById('model-hook')
  )
}
export default Model
