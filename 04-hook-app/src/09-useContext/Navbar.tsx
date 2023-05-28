import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link> */}

      <NavLink to="/" className={({ isActive }) => `${isActive && ""}`}>
        Home
      </NavLink>

      <NavLink to="/about" className={({ isActive }) => `${isActive && ""}`}>
        About
      </NavLink>

      <NavLink to="/login" className={({ isActive }) => `${isActive && ""}`}>
        Login
      </NavLink>
    </>
  );
}
