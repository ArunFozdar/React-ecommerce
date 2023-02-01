import React, { useEffect, useState } from "react";
import "../pagecss/home.css";
import axios from "axios";
import Header from "./Header";
import Products from "./Products";
import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/categories",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })

      .catch((e) => console.log(e))

      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
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
            <Link to="/dash">
              <button type="submit" className="signin">
                Profile
              </button>
            </Link>
          </div>
        </header>
      </div>
      <hr />
      <hr />
      <hr />
      <div className="main-div">
        {loading && (
          <div>
            <h1>Loading...</h1>
          </div>
        )}

        {data.map((categories) => (
          <div key={categories.index} className="card">
            <button className="bt1  ">
              <div className="categories-name"> {categories}</div>
            </button>
          </div>
        ))}
      </div>
      <hr />
      <hr />
      <hr />
      <Products />
      <hr />
      <hr />
      <hr />
      <footer>
        <div className="lowerlay">© 2023 E-commerce</div>
      </footer>
    </div>
  );
}
