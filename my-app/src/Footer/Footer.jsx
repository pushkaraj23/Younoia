import React from "react";
import "./Footer.css";
import logo from "../images/logo.jpg";
import LOGO2 from "../images/LOGO2.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import Mail from "../images/Mail.png";
import Discord from "../images/Discord.png";
import Telegram from "../images/Telegram.png";
import Twitter from "../images/Twitter.png";


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <div className="Younoia-logo">
          <img src={logo} className="Younoia-logo1" />
          <img src={LOGO2} className="Younoia-logo2" />
        </div>
        <br />
        <div className="social-icons">
          {/* Place your social media icons here */}
          <a href="#" >
            <img src={insta} alt="Instagram" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="#">
            <img src={Telegram} alt="Telegram" />
          </a>
          <a href="#">
            <img src={Discord} alt="Discord" />
          </a>
          <a href="#">
            <img src={Mail} alt="Mail" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Mail" />
          </a>
        </div>
      </div>
      <div className="right-footer">
        <a href="http://">Sharing Settings</a>
        <a href="http://">Terms & Conditions</a>
        <a href="http://">Privacy Policy</a>
        <a href="http://">Web Accessibility</a>

        <a href="http://" target="_blank" rel="noopener noreferrer"><p>© 2023 Younoia</p></a>
      </div>
    </div>
  );
}
