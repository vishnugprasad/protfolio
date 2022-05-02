import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-cross-circle "></i>

        <div className="mobile-options">
          <div className="mobile-option">
            <a href="#project">
              <i class="fi fi-sr-edit-alt option-icon"></i> PROJECTS
            </a>
          </div>

          <div className="mobile-option">
            <a href="#skills">
              <i class="fi fi-rr-laptop option-icon "></i> SKILLS
            </a>
          </div>

          {/* <div className="mobile-option">
            <a href="#work">WORK</a>
          </div> */}

          <div className="mobile-option">
            <a href="#connect">CONNECT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
