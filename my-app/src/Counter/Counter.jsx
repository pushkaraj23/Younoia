import React from "react";
import "./Counter.css";
import collage from "../images/Collage.png";

export default function Counter() {
  return (
    <div className="main">
      <div className="counter-first">
        <div className="Info-container">
          <h2>The world's largest therapy service.</h2>
          <span>100% online!</span>
        </div>

        <div className="Count-container">
          <div>
            <div>350,467</div>
            <div>Message, chat,phone,video sessions</div>
          </div>
          <hr />
          <div>
            <div>298,111</div>
            <div>Credentialled therapists ready to help</div>
          </div>
          <hr />
          <div>
            <div>1205</div>
            <div>People got help!</div>
          </div>
        </div>

        <hr id="seperate" />
      </div>

      <div className="counter-second">
        <div className="counter-second-para">
          <h2>
            Professional and credentialled therapists who you can {" "}
            <span>trust.</span>
          </h2>
          <br />
          <p>
            Tap into the world's largest network of credentialled and
            experienced therapists who can help you with a range of issues
            including depression, anxiety, relationships, trauma, grief, and
            more. With our therapists, you get the same professionalism and
            quality you would expect from an in-office therapist, but with the
            ability to communicate when and how you want.
          </p>
          <br />
          <button>Get Matched!</button>
        </div>

        <div className="collage">
          <img src={collage} alt="" />
          <br />
        </div>
      </div>
    </div>
  );
}
