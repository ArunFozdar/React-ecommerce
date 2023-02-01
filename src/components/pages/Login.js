import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authSlice } from "../../Store/Authslice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [change, setChange] = useState({ name: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.signin);
  const inputData = useSelector((state) => state.auth.inputData);
  console.log(inputData);

  const loginClickhandler = () => {
    const isPasswordTrue = inputData.find(
      (e) => e.password === change.password
    );
    const isNameTrue = inputData.find((e) => e.name === change.name);
    if (isNameTrue && isPasswordTrue) {
      dispatch(authSlice.actions.signIn(true));

      navigate("/Home");
    }
  };
  const changingHandler = (e) => {
    setChange({ ...change, [e.target.name]: e.target.value });
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();
    // dispatch(authSlice.actions.formData(change));
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          textAlign: "center",
        }}
      >
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
            <Link to="/">
              <button type="submit" className="signin">
                SignOut
              </button>
            </Link>
          </div>
        </header>

        {/* nexttttt */}
        <div
          style={{
            textAlign: "center",
            height: "400px",
          }}
        >
          <h3 style={{ marginLeft: "30px", marginTop: "50px" }}>SignIn</h3>

          <br />
          <form
            onSubmit={onSumbitHandler}
            style={{
              border: "solid 1px",
              width: "400px",
              height: "190px",
              justifyContent: "center",
              marginLeft: "500px",
            }}
          >
            <input
              type="text"
              placeholder="Username/E-mail"
              style={{ marginTop: "25px" }}
              name="name"
              onChange={changingHandler}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={changingHandler}
            />
            <br />
            {/* <Link to="/Home"> */}
            <button
              className="log1"
              style={{ border: "solid 1px" }}
              type="submit"
              onClick={loginClickhandler}
            >
              SignIn
            </button>
            {/* </Link> */}
          </form>
        </div>
        <footer>
          <div className="lowerlay">© 2023 E-commerce</div>
        </footer>
      </div>
    </>
  );
}
