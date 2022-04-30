import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
        <i class="fi fi-sr-edit-alt option-icon"></i> PROJECTS
        </a>
      </div>

      <div className="web-option">
        <a href="#skills">
        <i class="fi fi-rr-laptop option-icon "></i> SKILLS
        </a>
       
      </div>

      <div className="web-option">
        <a href="#work">
            WORK
        </a>
      </div>

      <div className="web-option">
        <a href="#contact">
            CONNECT
        </a>
      </div>

    </div>
  );
}

export default Web;
