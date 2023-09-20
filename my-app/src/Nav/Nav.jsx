import React from "react";
import "./Nav.css";
import logo from "../images/logo.jpg";

export default function Nav() {
  return (
    <div className="nav-main">
      <div className="nav-first">
        <img src={logo} alt="logo" />
        <div>
          <h2>YOUNOIA</h2>
          <p>"beautiful thinking"</p>
        </div>
      </div>
      <div className="nav-second">
        <li>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Advice</ul>
          <ul>Reviews</ul>
          <ul>Contact</ul>
          <ul ><div id="get-started">Get Started</div></ul>
        </li>
      </div>
    </div>
  );
}
