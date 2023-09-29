import React from "react";
import "./Therapists.css";
import th_img from "../images/therapy-img.png";

export default function Therapists() {
  return (
    <>
      <div className="therapists-main">
        <img className="therapists-img" src={th_img} alt="" />

        <div className="therapists-info">
          <h2>
            Professional and Credentialled therapists who you can{" "}
            <span>trust.</span>
          </h2>
          <p>
            Tap into the world's largest network of credentialled and
            experienced therapists who can help you with a range of issues
            including depression, anxiety, relationships, trauma, grief, and
            more. With our therapists, you get the same professionalism and
            quality you would expect from an in-office therapist, but with the
            ability to communicate when and how you want.
          </p>
        </div>
      </div>
    </>
  );
}
