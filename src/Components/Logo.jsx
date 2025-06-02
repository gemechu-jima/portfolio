import { Link } from "react-router-dom"
import { AppContext } from "../context/Context"
function logo() {
  const { darkMode, handleActive}=AppContext()
  return (
    <Link to="/" onClick={(ev)=>handleActive(ev, "home")}>
      { darkMode ?  <img src="image/blackLogo.jpg" alt="No logo"/> : <img src="image/logo.jpg" alt="No logo"/>}
    </Link>
  )
}

export default logo