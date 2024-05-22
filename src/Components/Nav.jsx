import Links from "../Utils/links";
function Nav({ Linkess, handleActive, active }) {
  return (
    <ul
      className="hidden list-none items-center justify-between 
           gap-2 dark:text-white md:flex"
    >
      {Links.map((link) => (
        <li className={Linkess} key={link.id}>
          <a
            href={"#"}
            className={link.link === active ? "font-bold text-blue-500 " : ""}
            onClick={(ev) => handleActive(ev, link.link)}
          >
            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
