import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">#PASSALONG</Link>
        <div className="right-nav">
          <Link to="/about">About</Link>
          <Link to="/books">Books</Link>
          <Link to="/host">host</Link>
        </div>
      </nav>
    </header>
  );
}
