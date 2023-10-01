import React from 'react'
import reviewc from "./reviewc.module.css"

export default function review_c(props) {
  return (
    <div className={reviewc.main}>
      <p>{props.review}</p>
      <div className={reviewc.user}>
        <img src={props.userimg} alt="" />
        <div>
          <p>Member Review for</p>
          <p>{props.username}</p>
        </div>
      </div>
    </div>
  )
}
