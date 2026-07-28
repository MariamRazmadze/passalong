import React from "react";
import { Link } from "react-router";
import bgImg from "../assets/theme.jpg";

export default function About() {
  return (
    <div className="about-page-container">
      <img src={bgImg} className="about-hero-image" />
      <div className="about-page-content">
        <h1>Why buy a stack when you could build a library?</h1>
        <p>
          Our mission is to keep books moving — from shelf to shelf, reader to
          reader. Every listing is checked before it goes live, so what you buy,
          borrow, or receive is exactly what you expect. (Dog-ears not included.
          Usually.)
        </p>
        <p>
          Our team is full of lifelong readers who know there's nothing better
          than a book finding the right person at the right time.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your next chapter is waiting.
          <br />
          Your next book is ready.
        </h2>
        <Link className="link-button" to="/books">
          Explore our books
        </Link>
      </div>
    </div>
  );
}
