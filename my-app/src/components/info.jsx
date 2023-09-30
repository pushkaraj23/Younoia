import React from 'react'
import "./info.css"

export default function info(props) {
  return (
    <div className='info-main'>
      <div className="info-first">
        <h1>{props.title}</h1>
        <p>{props.para}</p>
      </div>
      <div className="info-images">
        <img id='img1' src={props.img1} alt="img1" />
        <img id='img2' src={props.img2} alt="img2" />
      </div>
    </div>
  )
}
