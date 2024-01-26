
import { NavLink } from "react-router-dom"
import Links from "../Utils/links"
function Nav({Linkess, handleActive, active}) {
 
  return (
    <ul className="list-none hidden md:flex justify-between 
           items-center gap-2 dark:text-white">
   {Links.map((link)=>(
     <li className={Linkess} key={link.id}> 
         <a href={"#"}
         className={link.link===active? "text-blue-500 font-bold " :""}
          onClick={(ev)=>handleActive(ev, link.link)}>
          <span>{link.name}</span>
          </a>
    </li>
   )) }
</ul>
  )
}

export default Nav