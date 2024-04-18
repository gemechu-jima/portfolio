import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import LeftSideCta from "../Components/LeftSideCta";
import PageNav from "../Components/PageNav";
import RigthsideCta from "../Components/RigthsideCta";
import About from "../Components/About.jsx";
import Service from "../Components/Service.jsx";
import Skill from "../Components/Skill.jsx";
import Portfolio from "../Components/Portfolio.jsx";
import Contact from "../Components/Contact.jsx";
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
     {openSideBar && <Backdrop onClick={e=>setOpenSideBar(false)} />}
      <PageNav
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />
      <div id="home" className="relative mx-auto  flex w-full flex-col
       bg-slate-200 font-serif dark:bg-black dark:text-white 
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
