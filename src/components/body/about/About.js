import React from "react";
import "./About";
import coding from "./Coding.png";
import "./About.css";
import SocialContact from "../../common/socialcontact/SocialContact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am
          <br />
          <span className="info-name">Namit Malasi.</span>
          <br />I am a full-stack web developer.
          <div className="about-resume">
            <a
              href="https://drive.google.com/file/d/1iJc-sezWMmRI4O1rOZD1bMP4Rtf6AQGk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <i class="devicon-googlecloud-plain colored"></i>
              Resume
            </a>
          </div>
        </div>
        <div className="about-photo">
          <img src={coding} alt="images" className="picture"></img>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
