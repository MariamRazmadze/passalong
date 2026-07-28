import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="home-container">
      <h1>You've got the reading list, we've got the books.</h1>
      <p>
        Buy, borrow, or gift your way to your next favorite read. Find books
        from real people near you, ready to pass them on.
      </p>
      <Link to="books">Find your next read</Link>
    </div>
  );
}
