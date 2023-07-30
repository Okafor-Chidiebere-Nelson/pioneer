import React from 'react'
import Facebook from "../images/facebook.png"
import Github from "../images/github.png"
import Twitter from "../images/twitter.png"
import Instagram from "../images/instagram.png"
import "./Footer.css"

function Footer() {
  return (
      <div className="social-media-icon-container">
        <div className="twitter-container">
        <img src={Twitter} alt="" className="twitter-image" />
        </div>

        <div className="facebook-container">
        <img src={Facebook} alt="" className="twitter-image" />
        </div>

        <div className="instagram-container">
        <img src={Instagram} alt="" className="twitter-image" />
        </div>

        <div className="github-container">
        <img src={Github} alt="" className="twitter-image" />
        </div>
      </div>
  )
}

export default Footer
