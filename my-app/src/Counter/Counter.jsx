import React from "react";
import "./Counter.css";
import logo from "../images/logo.jpg";

export default function Counter() {
  return (
    <div className="main">
      <div id="upper-Container">
        <div id="Info-container">
          <h2>The world's largest therapy service.</h2>

          <span>100% online!</span>
          <img
            src="https://imgs.search.brave.com/5TwdqdCn1q0LxTCaqpAWgxObhCo7gRHgJarg1U-eboc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/dHVkaW8tcG9ydHJh/aXQtY29sbGFnZS1k/aXZlcnNlLXBlb3Bs/ZV81Mzg3Ni0xMzc2/MjkuanBnP3NpemU9/NjI2JmV4dD1qcGc"
            alt=""
          />
        </div>

        <div id="Count-container">
          <div id="wrapper-1">
            <div id="Counter">350,467</div>
            <div id="Info-1">Message, chat,phone,video sessions</div>
          </div>
          <hr />
          <div id="wrapper-2">
            <div id="Counter">298,111</div>
            <div id="Info-2">Credentialled therapists ready to help</div>
          </div>
          <hr />
          <div id="wrapper-3">
            <div id="Counter">1205</div>
            <div id="Info-3">People got help!</div>
          </div>
        </div>

        <hr id="seperate" />
      </div>
      <div id="Bottom-container">
        <div id="para">
          <h2 id="second-heading">
            Professional and credentialled therapists who you can{" "}
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

        <div id="collage">
          <img src={logo} alt="img" />
          <br />
        </div>
      </div>
    </div>
  );
}
