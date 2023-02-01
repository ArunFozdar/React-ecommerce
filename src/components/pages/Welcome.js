import React from "react";
import Header from "./Header";
import "../pagecss/welcome.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <div>
        <Header></Header>

        <div>
          <h1 className="heading">!!Welcome!!</h1>
          <Link to="sign">
            <button className="bts11" style={{}}>
              <h1>SignUP</h1>
            </button>
          </Link>
          <Link to="/Home">
            <button className="bts12">
              <h1>Guest</h1>
            </button>
          </Link>
        </div>
        <footer>
          <div className="lowerlay">© 2023 E-commerce</div>
        </footer>
      </div>
    </>
  );
}
