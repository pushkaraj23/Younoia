import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-main">
      <h1 className="home-title">you deserve to be happy !!</h1>
      <h2>What type of therapy are you looking for?</h2>
      <div className="home-second">
        <div className="home-card individual">
          <h2>Individuals</h2>
          <p>for myself</p>
        </div>
        <div className="home-card couple">
          <h2>Couples</h2>
          <p>for me and my partner</p>
        </div>
        <div className="home-card teen">
          <h2>Teen</h2>
          <p>for my child</p>
        </div>
      </div>
    </div>
  );
}
