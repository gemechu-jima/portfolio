import React from 'react'
import ReactDOM from 'react-dom'

function Backdrop({onClick}) {
  return ReactDOM.createPortal(
    <div className='w-screen h-screen bg-black opacity-50 fixed z-30' onClick={onClick}>
    </div>, 
     document.getElementById('backdrop-hook')
  )
}
export default Backdrop
