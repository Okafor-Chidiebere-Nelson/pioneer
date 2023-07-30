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
        <span className="info-span">Okafor Nelson</span>
        <span className="info-span">Frontend Developer</span>
      </div>

      <div className="social-media-info-container">
        <button className="email-button">Email</button>
        <button className="linkedin-button">Linkedin</button>
      </div>
    </div>
  )
}

export default ImageComponent
