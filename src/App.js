import logo from "./logo.svg";
import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Dashboard from "./components/Dashboard";
import Login from "./components/pages/Login";
import Welcome from "./components/pages/Welcome";
import { Routes, Route } from "react-router-dom";
import Signupform from "./components/pages/Signupform";
import Logback from "./components/pages/Logback";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signupform />} />
        <Route path="/logback" element={<Logback />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
