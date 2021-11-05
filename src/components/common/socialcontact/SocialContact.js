import React from "react";
import "./SocialContact.css";
import { SocialData } from "../../data/Social";

function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img
                src={item.icon}
                className="social-icon"
                alt="social icon"
              ></img>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
