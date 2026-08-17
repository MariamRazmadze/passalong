import { NavLink, Outlet } from "react-router";

const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/books"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          books
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? activeStyles : undefined)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
