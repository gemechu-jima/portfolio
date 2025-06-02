import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import SkillPage from "./pages/SkillPage"
import AppLayout from "./pages/AppLayout"
import PageNav from "./Components/PageNav"
import Footer from './Components/Footer'


function App() {
 const [darkMode, setDarkMode] = useState(true);
const [openSideBar, setOpenSideBar] = useState(false);

  return (
  < >
 <PageNav darkMode={darkMode} setDarkMode={setDarkMode} openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
   <Routes>
    <Route index element={<AppLayout/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/aboutme" element={<AboutPage darkMode={darkMode}/>}/>
    <Route path="/service" element={<ServicePage/>}/>
    <Route path="/portfolio" element={<PortfolioPage/>}/>
    <Route path="/contactme" element={<ContactPage/>}/>
    <Route path="/skill" element={<SkillPage/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
