import { useEffect, useState } from "react";
import LeftSideCta from "../Components/LeftSideCta";
import PageNav from "../Components/PageNav";
import RigthsideCta from "../Components/RigthsideCta";
import About from "../Components/About.jsx"
import Service from "../Components/Service.jsx";
import Skill from "../Components/Skill.jsx";
import Portfolio from "../Components/Portfolio.jsx";
import Contact from "../Components/Contact.jsx";
import Footer from "../Components/Footer.jsx"

function HomePage() {
 const [darkMode, setDarkMode]=useState(false)
 useEffect(()=>{
 if(darkMode){
  document.documentElement.classList.add("dark")
 }else{
  document.documentElement.classList.remove("dark")
 }
  
 }, [darkMode])
 
  return (
    <main className="relative ">
        <PageNav setDarkMode={setDarkMode} darkMode={darkMode} />
        <div className="flex md:justify-between  md:flex-row flex-col md:h-screen w-full relative mx-auto dark:bg-black dark:text-white bg-slate-200 font-serif ">
        <RigthsideCta/>
        <LeftSideCta darkMode={darkMode}/>
        </div>
        <About darkMode={darkMode} />
        <Portfolio/>
        <Service/>
        <Skill/>
        <Contact/>
        <Footer/>
    </main>
  )
}

export default HomePage