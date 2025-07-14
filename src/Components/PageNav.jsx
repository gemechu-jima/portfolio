import Logo from "./Logo";
import Nav from "./Nav";
import Darkmode from "./Darkmode";
import MobileNav from "./MobileNav";

function PageNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-30  bg-black px-3 dark:bg-white">
      <div className="w-[90%] mx-auto flex items-center justify-between gap-10">
      <Logo />
      <Nav />
      <div className="flex">
      <MobileNav />
      <Darkmode />
      </div>
      </div>
      
     
    </nav>
  );
}

export default PageNav;
