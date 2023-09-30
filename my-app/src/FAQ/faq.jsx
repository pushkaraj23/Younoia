import React from "react";
import "./faq.css";

export default function faq() {
  return (
    <div>
      <div className="faq-Main">
        <div className="faq-One">
          <h2>
            Most asked <span>Questions!</span>
          </h2>
          <div className="faq-questions">
            <div className="Questions">Who are the therapists?</div>
            <hr />
            <div className="Questions">How will i seek help?</div>
            <hr />
            <div className="Questions">Is Younoia right for me?</div>
            <hr />
            <div className="Questions">How much does it cost?</div>
            <hr />
            <div className="Questions">
              How will i communicate with the therapists?
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
