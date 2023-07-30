import React from 'react'
import ReactLogo from "../images/logo.png"
import "./ImageComponent.css"

function ImageComponent() {
  return (
    <div className="first-component">
      <div className="image-container">
      <img src={ReactLogo} alt="a woman clinging to a ball" className="image-itself" />
      </div>

      <div className="info-container">
       <h2 className="name-info-span"><span className="info-span first">Okafor Nelson</span></h2> 
        <span className="info-span second">Frontend Developer</span>
      </div>

      <div className="social-media-info-container">
        <button className="email-button"> <span className="email-image-span" ><i class="fa-solid fa-envelope"></i></span> Email</button>
        <button className="linkedin-button"> <span className="email-image-span" ><i class="fa-brands fa-linkedin"></i></span> Linkedin</button>
      </div>
    </div>
  )
}

export default ImageComponent
