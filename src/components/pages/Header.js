import React from "react";
import "../pagecss/head.css";
import { Link } from "react-router-dom";

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
          {/* <button type="submit" className="signup">
            SignUp
          </button> */}
          <Link to="/login">
            <button type="submit" className="signin">
              SignIn
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
