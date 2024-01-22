import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import SkillPage from "./pages/SkillPage"

function App() {


  return (
  <BrowserRouter >
   <Routes>
    <Route index element={<HomePage/>}/>
    <Route path="/aboutme" element={<AboutPage/>}/>
    <Route path="/service" element={<ServicePage/>}/>
    <Route path="/portfolio" element={<PortfolioPage/>}/>
    <Route path="/contactme" element={<ContactPage/>}/>
    <Route path="/skill" element={<SkillPage/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App
