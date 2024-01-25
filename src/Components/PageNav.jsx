import {  useLocation } from "react-router-dom"
// import PropTypes from 'prop-types';
import classNames from "classnames"
import Logo from "./Logo"
import Nav from "./Nav"
import Darkmode from "./Darkmode";
import MobileNav from "./MobileNav"
function PageNav({setDarkMode, darkMode}) {
     const {pathname}=useLocation()
     console.log(pathname)
     const navname=pathname.split('#')?.[1]
     const Linkess=(type)=>{
    let className=classNames("hover:border-solid hover:border-y-2 hover:border-sky-500  px-3 py-2 transition-all duration-300 rounded  hover:font-bold ")
     if(type===navname){
       className +=" text-blue-600 border-y-2 border-sky-500";
     }else {
     className +="";
     }
     return className
   }
   
  return (
    <nav className="flex top-0 inset-x-0 items-center px-3 dark:bg-black fixed z-40  bg-white">
          <div className="flex-grow">
          <Logo darkMode={darkMode} />
          </div>
        
         <Nav Linkess={Linkess} setDarkMode={setDarkMode} darkMode={darkMode}/>
         <Darkmode setDarkMode={setDarkMode} darkMode={darkMode}/>
         <MobileNav Linkess={Linkess} setDarkMode={setDarkMode} darkMode={darkMode}/>
    </nav>
  )
}

export default PageNav