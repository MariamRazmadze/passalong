import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books/Books";
import BookDetail from "./pages/Books/BookDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<BookDetail />} />
          <Route path="host" element={<Dashboard />} />
          <Route path="host/income" element={<Income />} />
          <Route path="host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
