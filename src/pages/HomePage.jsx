import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import LeftSideCta from "../Components/LeftSideCta";
import PageNav from "../Components/PageNav";
import RigthsideCta from "../Components/RigthsideCta";
import About from "../Components/about/About.jsx";
import Service from "../Components/services/Service.jsx";
import Skill from "../Components/skill/Skill.jsx";
import Portfolio from "../Components/portfolio/Portfolio.jsx";
import Contact from "../Components/contact/Contact.jsx";
import Footer from "../Components/Footer.jsx";
import Backdrop from "../Components/Backdrop.jsx";


function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="relative ">
     {openSideBar && <Backdrop onClick={()=>setOpenSideBar(false)} />}
      <PageNav
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />
      <div id="home" className="relative mx-auto  flex w-full flex-col
       bg-slate-200 font-serif dark:bg-gray-950 dark:text-white 
        md:h-screen md:flex-row md:justify-between ">
        <Helmet>
        </Helmet>
        <RigthsideCta />
        <LeftSideCta darkMode={darkMode} />
      </div>
      <About darkMode={darkMode} />
      <Portfolio />
      <Service />
      <Skill />
      <Contact />
      <Footer />
    </main>
  );
}

export default HomePage;
