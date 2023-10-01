import React from "react";
import "./faq.css";
import dropdown from "../images/dropdown.png";

export default function faq() {
  return (
    <div>
      <div className="faq-Main">
        <div className="faq-One">
          <h2>
            Most asked <span>Questions!</span>
          </h2>
          <div className="faq-questions">
            <div className="Questions">
              Who are the therapists?{" "}
              <img src={dropdown} className="Images2" alt="" />
            </div>

            <hr />
            <div className="Questions">
              How will i seek help?{" "}
              <img src={dropdown} className="Images2" alt="" />
            </div>

            <hr />
            <div className="Questions">
              Is Younoia right for me?{" "}
              <img src={dropdown} className="Images2" alt="" />
            </div>
            <hr />
            <div className="Questions">
              How much does it cost?{" "}
              <img src={dropdown} className="Images2" alt="" />
            </div>
            <hr />
            <div className="Questions">
              How will i communicate with the therapists?
              <img src={dropdown} className="Images2" alt="" />
            </div>
            <hr />
          </div>
        </div>
        <div className="faq-two">
          <a className="faq-link" href="/faq/">
            More frequently asked questions
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}
