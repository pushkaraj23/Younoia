import React from "react";
import "./about.css";
import Info from "../components/info";
import img1 from "../images/about-img1.png";
import img2 from "../images/about-img2.png";
import img3 from "../images/about-img3.png";
import img4 from "../images/about-img4.png";
import img5 from "../images/about-img5.png";
import img6 from "../images/about-img6.png";
import arrow1 from "../images/arrow1.png";
import arrow2 from "../images/arrow2.png";
import sarrow from "../images/scroll-arrow.png";

export default function About() {
  return (
    <div className="about-main">
      <div className="about-first">
        <hr />
        <h1>how it works?</h1>
        <hr />
      </div>
      <div className="about-second">
        <img src={arrow1} alt="arrow" />
        <Info
          title="Get matched to the best therapist for you"
          para="Answer a few questions to find a credentialled therapist who fits your needs and preferences. Tap into the largest network of credentialled providers."
          img1={img3}
          img2={img2}
        />
        <img src={arrow2} alt="arrow" />
        <Info
          title="Communicate your way"
          para="Talk to your therapist however you feel comfortable — text, chat, phone, or video."
          img1={img1}
          img2={img4}
        />
        <img src={arrow2} alt="arrow" />
        <Info
          title="Therapy when you need it"
          para="You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer."
          img1={img5}
          img2={img6}
        />
      </div>
      <div className="about-third">
        <img src={sarrow} alt="scroll left" />
        <img src={sarrow} alt="scroll right" />
      </div>
    </div>
  );
}
