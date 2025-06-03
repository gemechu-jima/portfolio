import { Link } from "react-router-dom";
import { useState } from "react";
import { SocialLinks } from "../../Utils/links";

function LeftSideCta({darkMode}) {
 const [open, setOpen]=useState(false);
 
  return (
    <aside className="md:w-6/12 md:h-screen items-center flex justify-center relative">
      <div className={`absolute  xl:w-72   md:w-64  md:top-24 md:left-5 w-32 p-5  bg-white rounded-lg md:flex items-center justify-center gap-10 flex-col hidden ${open && " sm:p-8"} `}>
        <div className="flex gap-4 items-center">
        <Link to="https://github.com/gemechu-jima"> 
        <img src="social media/github.png" className="w-10 h-10  rounded-full"/></Link>
        <span className="text-black">More project completed</span>
        </div>
        <div>
        <p><span className="text-blue-900">See About Me</span> </p>
        <div className={`mt-3 flex ${open && 'flex-col '} gap-3 items-start`}>
          {SocialLinks.map((link) => (
            <Link key={link.id} to={link.link} className="flex items-center gap-2 mb-2">
              <img src={link.icon} alt={link.name} className="w-6 h-6 rounded-full" />
              {open && <span className="text-black">{link.name}</span>}
            </Link>
          ))}
             </div>
        </div>
       <button onClick={()=>setOpen(!open)}
       className="bg-purple-500 text-white px-3 py-2 box-border rounded-full w-64" >
       { open ? "Less View":"View Detail"}</button>
      </div>
      <div className="flex items-center justify-center md:ml-60 bg-yellow-400 rounded-full pt-2 pr-2 ">
      <img src={`${darkMode?"image/bg-black.png":"image/Mine.jpg"}`} alt="Gemechu Jima" 
       className=" animation rounded-full xl:w-[25rem] xl:h-[30rem] md:w-72 md:h-72 w-64 h-64 "/>
      </div>
     <div onClick={()=>alert("Your are not privilege of see message from this porfolio")} className="bg-purple-700 rounded-2xl cursor-pointer absolute 
       md:bottom-56 md:left-1/2 xl:w-72 md:w-64 md:py-2 w-48 py-1 bottom-5 sm:flex 
     justify-center items-center gap-3 hidden">
        <img src="image/gj.jpg" className="w-10 h-10 inline rounded-full"/>
        <span className="text-white">See pending Message</span>
     </div>
   </aside>
  )
}

export default LeftSideCta;

