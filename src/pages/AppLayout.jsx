import About from "../Components/about/About.jsx";
import Service from "../Components/services/Service.jsx";
import Skill from "../Components/skill/Skill.jsx";
import Portfolio from "../Components/portfolio/Portfolio.jsx";
import Contact from "../Components/contact/Contact.jsx";
import HomePage from "./HomePage.jsx";
import Backdrop from "../Components/Backdrop.jsx";
import { AppContext } from "../context/Context.jsx";
function AppLayout() {
  const {openSideBar, setOpenSideBar}=AppContext()
  return (
   <> 
    {openSideBar && <Backdrop onClick={() => setOpenSideBar(false)} />}
      <HomePage/>
      <About />
      <Portfolio />
      <Service />
      <Skill />
      <Contact />
   </>
  )
}

export default AppLayout