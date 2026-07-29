import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">#PASSALONG</Link>
          <div className="right-nav">
            <Link to="/about">About</Link>
            <Link to="/books">Books</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}
