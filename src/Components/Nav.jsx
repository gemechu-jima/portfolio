
import { NavLink } from "react-router-dom"

function Nav({Linkess}) {
    
  return (
    <ul className="list-none hidden md:flex justify-between  items-center gap-2 dark:text-white    ">
    <li className={Linkess("")}> 
         <a href="#">Home</a>
    </li>
    <li className={Linkess("aboutme")}> 
         <a href="#aboutme">About Me</a>
    </li>
    <li className={Linkess("service")}> 
         <a href="#service">Service</a>
    </li>
    <li className={Linkess("portfolio")}> 
         <a href="#portfolio">Portfolio</a>
  </li > 
    <li className={Linkess("contactme")}> 
         <a href="#contactme">Contact Me</a>
     </li>
    <li className={Linkess("skill")}> 
         <a href="#skill">skill</a>
     </li>
</ul>
  )
}

export default Nav