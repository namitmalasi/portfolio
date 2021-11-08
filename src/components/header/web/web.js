import React from "react";
import "./web.css";
import project from "./project.png";
import contact from "./user.png";
import skills from "./skills.png";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <img className="option-icon" src={project} alt="images"></img>
          Projects
        </a>
      </div>

      <div className="web-option">
        <a href="#skills">
          <img className="option-icon" src={skills} alt="images"></img>
          Skills
        </a>
      </div>

      <div className="web-option">
        {" "}
        <a href="#contact">
          <img className="option-icon" src={contact} alt="images"></img>
          Contact{" "}
        </a>
      </div>
    </div>
  );
}

export default Web;
