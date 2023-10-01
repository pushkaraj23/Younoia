import React from "react";
import ReviewModule from "./Review.module.css";
import inverted from "../images/inverted-comma.png";
import Review_c from "../components/review_c";
import User1 from "../images/therapist.png";

export default function Review() {
  return (
    <div className={ReviewModule.main}>
      <div className={ReviewModule.first}>
        <img src={inverted} alt="" />
        <div className={ReviewModule.content}>
          <Review_c
            review="I can actually see progress in my mental health which is something I haven’t been able to say in 15 years and its thanks to her."
            userimg={User1}
            username="Virginia Truglio"
          />
          <Review_c
            review="I can actually see progress in my mental health which is something I haven’t been able to say in 15 years and its thanks to her."
            userimg={User1}
            username="Virginia Truglio"
          />
        </div>
        <img src={inverted} alt="" />
      </div>
      <div className={ReviewModule.third}>
        <div className={ReviewModule.toggle}>
          <div id={ReviewModule.special}></div>
          <div></div>
          <div></div>
        </div>
        <div className={ReviewModule.btn}>More Success Stories</div>
      </div>
    </div>
  );
}
