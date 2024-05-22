import { Link } from "react-router-dom"

function logo({ darkMode, handleActive}) {
  return (
    <Link to="/" onClick={(ev)=>handleActive(ev, "home")}>
      { darkMode ?  <img src="image/blackLogo.jpg" alt="No logo"/> : <img src="image/logo.jpg" alt="No logo"/>}
    </Link>
  )
}

export default logo