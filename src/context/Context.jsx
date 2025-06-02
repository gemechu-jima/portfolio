import { useEffect, useState, createContext, useContext } from 'react';
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';
export const GlobalContext = createContext();
  let Linkess = classNames(
    "hover:border-solid hover:border-y-2 hover:border-sky-500  px-3 py-2 transition-all duration-300 rounded  hover:font-bold ",
  );
export default function ContextProvider({ children }) {
  const [active, setActive] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [openSideBar, setOpenSideBar] = useState(false);
const navigate=useNavigate()
 const handleActive = (ev, link) => {
    ev.preventDefault();
    ev.stopPropagation();
    const elementToView = document.getElementById(link);
    if(elementToView){
      elementToView.scrollIntoView();
    }else{
       navigate(`/${link}`);
    }
    
    setActive(link);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
 
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "aboutme",
        "service",
        "contactme",
        "skill",
        "portfolio",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
           const offset = window.innerHeight / 2;
          if (rect.top <= offset && rect.bottom >= offset) {
             setActive(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  return (
    <GlobalContext.Provider value={{ darkMode, active, setActive, setDarkMode, openSideBar, setOpenSideBar, handleActive,Linkess }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const AppContext=()=>{
 const context=useContext(GlobalContext)
 return context
}

