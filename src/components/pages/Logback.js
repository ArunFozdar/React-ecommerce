import React from "react";
import { Link } from "react-router-dom";

export default function Logback() {
  return (
    <>
      <div>
        <header
          style={{
            backgroundImage: "linear-gradient(#9f05ff01 20%, #fd5e081b 10%)",
          }}
        >
          <div className="overlay">
            <h1>E-commerce</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>

            <p>!!!Shop Here Befikar!!! </p>
          </div>
        </header>
        <hr />
        <h1 style={{ marginLeft: "510px" }}>!!Signed up sucessfully!!</h1>
        <Link to="/Login">
          <button
            className="btsss"
            style={{
              height: "200px",
              width: "400px",
              border: "solid 2px",
              borderColor: "Green",
              borderRadius: "0",
              marginLeft: "500px",
              marginTop: "50px",
            }}
          >
            <h1>Login</h1>
          </button>
        </Link>
        <footer>
          <div className="lowerlay">© 2023 E-commerce</div>
        </footer>
      </div>
    </>
  );
}
