import { useLocation } from "react-router-dom";
// import PropTypes from 'prop-types';
import classNames from "classnames";
import Logo from "./Logo";
import Nav from "./Nav";
import Darkmode from "./Darkmode";
import MobileNav from "./MobileNav";
import { useState } from "react";
function PageNav({ setDarkMode, darkMode,  openSideBar, setOpenSideBar}) {
  const [active, setActive] = useState(null);

  const handleActive = (ev, link) => {
    ev.stopPropagation();
    setActive(link);
    const elementToView = document.getElementById(link);
    elementToView?.scrollIntoView();
  };
  let Linkess = classNames(
    "hover:border-solid hover:border-y-2 hover:border-sky-500  px-3 py-2 transition-all duration-300 rounded  hover:font-bold ",
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex items-center bg-white px-3  dark:bg-black">
      <div className="flex-grow">
        <Logo darkMode={darkMode} />
      </div>

      <Nav
        Linkess={Linkess}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        handleActive={handleActive}
        active={active}
      />
      <Darkmode setDarkMode={setDarkMode} darkMode={darkMode} />
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
