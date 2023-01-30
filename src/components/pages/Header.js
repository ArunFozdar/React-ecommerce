import React from "react";
import "../pagecss/head.css";

export default function Header() {
  return (
    <div>
      <header>
        <div className="overlay">
          <h1>E-commerce</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>

          <p>!!!Shop Here Befikar!!! </p>

          <button>READ MORE</button>
        </div>
      </header>
    </div>
  );
}
