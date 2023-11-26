import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to={"/"}>
        <p>FM</p>
      </NavLink>
    </header>
  )
}

export default Navbar