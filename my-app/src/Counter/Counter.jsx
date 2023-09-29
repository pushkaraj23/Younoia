import React from "react";
import "./Counter.css";

export default function Counter() {
  return (
    <div className="counter-main">

      <div className="info-container">
        <h2>The World's Largest therapy service.</h2>
        <span>100% online!</span>
      </div>

      <div className="count-container">
        <div>
          <h2>350,467</h2>
          <p>Message, chat, phone, video sessions</p>
        </div>
        <hr />
        <div>
          <h2>298,111</h2>
          <p>Credentialled therapists ready to help</p>
        </div>
        <hr />
        <div>
          <h2>1205</h2>
          <p>People got help!</p>
        </div>
      </div>

    </div>
  );
}
