
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import App from './App.jsx'
import ContextProvider from "./context/Context.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ContextProvider>
    <App />
    <ToastContainer position='top-center' />
  </ContextProvider>,
  </BrowserRouter>
  
)
