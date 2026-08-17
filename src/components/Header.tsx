import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <header>
      <Link to="/" className="site-logo">
        #PASSALONGE
      </Link>
      <nav>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Books
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          host
        </NavLink>
      </nav>
    </header>
  );
}
