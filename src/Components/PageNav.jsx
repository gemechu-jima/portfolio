import Logo from "./Logo";
import Nav from "./Nav";
import Darkmode from "./Darkmode";
import MobileNav from "./MobileNav";

function PageNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 flex items-center bg-black px-3  dark:bg-white">
      <div className="flex-grow">
        <Logo />
      </div>
      <Nav />
      <Darkmode />
      <MobileNav />
    </nav>
  );
}

export default PageNav;
