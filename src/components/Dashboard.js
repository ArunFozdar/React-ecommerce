import React from "react";
import "../components/pagecss/dash.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="dash-div">
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
        <hr />
        <hr />
        <hr />
        <div className="dash-div-1">
          <div className="dd1">
            <h1>!!Hello </h1>
            <p>Mr Smith</p>
          </div>
          <div className="dd2">
            <img src={require("../components/img/12.jpg")} alt="#" />
          </div>
          <div className="dd3">
            <Link to="/login">
              <button className="btn-dash1">Signout</button>
            </Link>
            <button className="btn-dash2">Switch Account</button>
          </div>
        </div>
        <hr />
        <div className="order">
          <div className="order1">
            <h2>Your Orders</h2>
          </div>
          <div className="order2">
            <select name="drop" id="">
              History
              <option>History</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
            </select>
          </div>
        </div>
        <footer>
          <div className="lowerlay">© 2023 E-commerce</div>
        </footer>
      </div>
    </>
  );
}
