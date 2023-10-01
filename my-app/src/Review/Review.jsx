import React from "react"
import ReviewModule from "./Review.module.css"
import inverted from '../images/inverted-comma.png'
import Review_c from "../components/review_c";

export default function Review() {
  return (
    <div className={ReviewModule.main}>
      <div className={ReviewModule.first}>
        <img src={inverted} alt="" />
        <div className={ReviewModule.content}>
            <Review_c />
        </div>
        <img src={inverted} alt="" />
      </div>
      <div className={ReviewModule.toggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
