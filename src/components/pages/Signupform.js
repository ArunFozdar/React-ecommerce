import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signupform() {
  const [signup, setSignup] = useState([
    {
      name: "",
      email: "",
      gender: "",
      password: "",
    },
  ]);

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="signdiv">
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
            <Link to="/Login">
              <button type="submit" className="signin">
                SignIn
              </button>
            </Link>
          </div>
        </header>

        {/* fgaeyifgduwihfviuadfyhgiaudhgyied */}
        <div style={{ marginTop: "25px" }}>
          <form
            style={{
              border: "solid 2px",
              width: "430px",
              height: "280px",
              justifyContent: "center",
              borderRadius: "5px",

              marginLeft: "500px",
            }}
            onChange={handleChange}
            value={signup}
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              style={{
                marginLeft: "25px",
                marginTop: "25px",
                width: "360px",
              }}
            />
            <br />
            <br />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              style={{ marginLeft: "25px", width: "360px" }}
            />
            <br />
            <br />
            <input
              name="gender"
              type="text"
              placeholder="Gender"
              style={{ marginLeft: "25px", width: "360px" }}
            />
            <br /> <br />
            <input
              name="password"
              type="text"
              placeholder="Password"
              style={{ marginLeft: "25px", width: "360px" }}
            />
            <br /> <br />
            <Link to="/logback">
              <button
                className="log1"
                style={{
                  border: "solid 1px",
                  marginLeft: "25px",
                  width: "360px",
                }}
                type="submit"
              >
                SignUp
              </button>
            </Link>
          </form>
        </div>

        <footer>
          <div className="lowerlay">© 2023 E-commerce</div>
        </footer>
      </div>
    </>
  );
}
