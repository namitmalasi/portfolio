import React from "react";
import close from "./close.png";
import project from "../web/project.png";
import contact from "../web/user.png";
import skills from "../web/skills.png";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <img src={close} alt="images"></img>
      </div>

      <div className="mobile-options" onClick={() => setIsOpen(!isOpen)}>
        >
        <div className="mobile-option">
          <a href="#projects">
            <img className="option-icon" src={project} alt="images"></img>
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <img className="option-icon" src={skills} alt="images"></img>
            Skills
          </a>
        </div>
        <div className="mobile-option">
          {" "}
          <a href="#contact">
            <img className="option-icon" src={contact} alt="images"></img>
            Contact{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
