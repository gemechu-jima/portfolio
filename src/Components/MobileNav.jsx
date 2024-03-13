
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function MobileNav({Linkess, darkMode, openSideBar, setOpenSideBar}) {
  const handleClick=()=>{
    setOpenSideBar(openSideBar=>!openSideBar)
  }
  return (
    <div className="md:hidden mt-3 mr-2" >
        <div className={`flex flex-col cursor-pointer ${darkMode && "text-white"}`} >
           { 
          !openSideBar && 
          <div className={`flex items-center gap-5 `}>
          <VscThreeBars onClick={handleClick}/>
          </div>
          
            }
        </div>
        {openSideBar && <>
              
              <ul className="flex  md:hidden  items-center flex-col
               bg-slate-600 fixed z-[10000]
               left-0 bottom-0 top-0 pt-2 text-white
                gap-7 transition-all duration-3000 w-[75%]  ">
              <h1><img src="image/gj.jpg" className="rounded-full w-10 h-10 inline pr-1"/>Gemechu </h1>
              <ImCross className="absolute top-4 right-3 text-red-600" onClick={handleClick}/>
              <li className={Linkess} onClick={handleClick}> 
              <a href="#home">Home</a>
              </li>
              <li className={Linkess +"aboutme"} onClick={handleClick}> 
                  <a href="#aboutme">About Me</a>
              </li>
              <li className={Linkess+"service"} onClick={handleClick}> 
                  <a href="#service">Service</a>
              </li>
              <li className={Linkess + "portfolio"} onClick={handleClick}> 
                  <a href="#portfolio">Portfolio</a>
            </li > 
              <li className={Linkess +"contactme"} onClick={handleClick}> 
                  <a href="#contactme">Contact Me</a>
              </li>
              <li className={Linkess +"skill"} onClick={handleClick}> 
                  <a href="#skill">skill</a>
              </li>  
            <hr/>
            <div className="mt-10">
            <NavLink to="https://github.com/gemechu-jima"> <img src="social media/facebook.png" 
            className="w-8 h-8 inline rounded-full"/></NavLink>
             <img src="social media/linkedin.png" className="w-8 h-8 inline ml-2"/>
             <img src="social media/twitter.png" className="w-8 h-8 inline ml-2"/>
             <img src="social media/github.png" className="w-8 h-8 inline ml-2"/>
             </div>
             </ul>

            </>}
    </div>
  )
}

export default MobileNav