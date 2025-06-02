
import classNames from "classnames";
import { useContext, useEffect} from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Darkmode from "./Darkmode";
import MobileNav from "./MobileNav";
import Backdrop from "./Backdrop";
import {GlobalContext} from "../context/Context.jsx";
function PageNav() {
const {darkMode, setDarkMode, active, setActive, setOpenSideBar ,openSideBar}=useContext(GlobalContext)

  

  const handleActive = (ev, link) => {
    ev.preventDefault();
    ev.stopPropagation();

    const elementToView = document.getElementById(link);
    elementToView?.scrollIntoView();
    setActive(link);
  };
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
          const { top, bottom } = element.getBoundingClientRect();
          if (top === -649 && bottom >= 0) {
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
  }, [setActive]);

  let Linkess = classNames(
    "hover:border-solid hover:border-y-2 hover:border-sky-500  px-3 py-2 transition-all duration-300 rounded  hover:font-bold ",
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex items-center bg-white px-3  dark:bg-black">
      {openSideBar && <Backdrop onClick={() => setOpenSideBar(false)} />}
      <div className="flex-grow">
        <Logo />
      </div>

      <Nav
        Linkess={Linkess}
        handleActive={handleActive}
        active={active}
      />
      <Darkmode />
      <MobileNav
        Linkess={Linkess}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
      />
    </nav>
  );
}

export default PageNav;
