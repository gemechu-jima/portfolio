import About from "../Components/about/About.jsx";
import Service from "../Components/services/Service.jsx";
import Skill from "../Components/skill/Skill.jsx";
import Portfolio from "../Components/portfolio/Portfolio.jsx";
import Contact from "../Components/contact/Contact.jsx";
import HomePage from "./HomePage.jsx";
// import Backdrop from "../Components/Backdrop.jsx";
function AppLayout() {
  return (
   <> 
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