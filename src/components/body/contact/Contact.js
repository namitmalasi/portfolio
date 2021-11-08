import React from "react";
import "./Contact.css";
import Separator from "../../common/separator/Separator";
import SocialContact from "../../common/socialcontact/SocialContact";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="resume">
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
    </div>
  );
}

export default Contact;
