
import { NavLink } from "react-router-dom"

function Nav({Linkess}) {
  return (
    <ul className="list-none hidden md:flex justify-between  items-center gap-2 dark:text-white    ">
    <li className={Linkess("")}> 
         <NavLink to="/">Home</NavLink>
    </li>
    <li className={Linkess("aboutme")}> 
         <a href="#aboutme">About Me</a>
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
</ul>
  )
}

export default Nav