import React from "react";
import "./web.css";
// import { ReactComponent as CloseIcon } from "../../../images/cross-circle.svg";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <div className=" icon-image">
            {/* <CloseIcon></CloseIcon> */}
          </div>
          PROJECTS
        </a>
      </div>

      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-laptop option-icon "></i> SKILLS
        </a>
      </div>

      <div className="web-option">
        <a href="#work">WORK</a>
      </div>

      <div className="web-option">
        <a href="#contact">CONNECT</a>
      </div>
    </div>
  );
}

export default Web;
