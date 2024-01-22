
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function MobileNav({Linkess}) {
  const [open , setOpen] =useState(false)
  return (
    <div className="md:hidden mt-3 mr-2" >
        <div className=" flex flex-col cursor-pointer " >
           { 
          !open && 
          <div className="flex items-center gap-5">
          <VscThreeBars onClick={()=>setOpen(open=>!open)}/>
          </div>
          
            }
            
        </div>
        {open && <>
              
              <ul className="flex  md:hidden  w-[20rem] items-center flex-col bg-slate-600 fixed z-[10000] left-0 bottom-0 top-0 pt-2
                gap-7 transition-all duration-3000  ">
              <h1><img src="image/gj.jpg" className="rounded-full w-10 h-10 inline pr-1"/>Gemechu </h1>
              <ImCross className="absolute top-4 right-3" onClick={()=>setOpen(open=>!open)}/>
              <li className={Linkess("")}> 
                <NavLink to="/">Home</NavLink>
            </li>
            <li className={Linkess("aboutme")}> 
                <NavLink to="/aboutme">About Me</NavLink>
            </li>
            <li className={Linkess("service")}> 
                <NavLink to="/service">Service</NavLink>
            </li>
            <li className={Linkess("portfolio")}> 
                <NavLink to="/portfolio">Portfolio</NavLink>
            </li > 
            <li className={Linkess("contactme")}> 
                <NavLink to="/contactme">Contact Me</NavLink>
            </li>
            <li className={Linkess("skill")}> 
                <NavLink to="/skill">skill</NavLink>
            </li>
            <hr/>
            <div className="mt-10">
            <NavLink to="https://github.com/gemechu-jima"> <img src="social media/facebook.png" className="w-8 h-8 inline rounded-full"/></NavLink>
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