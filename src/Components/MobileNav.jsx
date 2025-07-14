import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/Context";
import Links from "../Utils/links";
function MobileNav() {
  const {
    darkMode,
    openSideBar,
    setOpenSideBar,
    Linkess,
    handleActive,
    active,
  } = AppContext();
  const handleClick = () => {
    setOpenSideBar((openSideBar) => !openSideBar);
  };
  return (
    <div className="mr-2 mt-3 md:hidden">
      <div
        className={`flex cursor-pointer flex-col ${darkMode && "text-black"}`}
      >
        {!openSideBar && (
          <div className={`flex items-center gap-5 text-sky-500`}>
            <VscThreeBars onClick={handleClick} />
          </div>
        )}
      </div>
      {openSideBar && (
        <>
          <ul
            className="duration-3000  fixed  bottom-0 left-0
               top-0 z-[10000] flex
               w-[60%] flex-col items-center gap-7 bg-slate-600
                pt-2 text-white transition-all md:hidden  "
          >
            <h1>
              <img
                src="image/gj.jpg"
                className="inline h-10 w-10 rounded-full pr-1"
              />
              Gemechu{" "}
            </h1>
            <ImCross
              className="absolute right-3 top-4 text-red-600"
              onClick={handleClick}
            />
            {Links.map((link) => (
              <li
                className={Linkess}
                key={link.id}
                onClick={(ev) => {
                  handleClick(); 
                  handleActive(ev, link.link); 
                }}
              >
                <a
                  href={`#${link.link}`}
                  className={
                    link.link === active ? "font-bold text-blue-500 " : ""
                  }
                >
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
            <hr />
            <div className="mt-10">
              <NavLink to="https://github.com/gemechu-jima">
                {" "}
                <img
                  src="social media/facebook.png"
                  className="inline h-8 w-8 rounded-full"
                />
              </NavLink>
              <img
                src="social media/linkedin.png"
                className="ml-2 inline h-8 w-8"
              />
              <img
                src="social media/twitter.png"
                className="ml-2 inline h-8 w-8"
              />
              <img
                src="social media/github.png"
                className="ml-2 inline h-8 w-8"
              />
            </div>
          </ul>
        </>
      )}
    </div>
  );
}

export default MobileNav;
