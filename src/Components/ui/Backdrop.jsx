
import ReactDOM from 'react-dom'

function Backdrop({onClick}) {
  return ReactDOM.createPortal(
    <div className='w-screen h-screen bg-black opacity-70 fixed z-20' onClick={onClick}>
    </div>, 
     document.getElementById('backdrop-hook')
  )
}
export default Backdrop
