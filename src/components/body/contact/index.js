import React from "react";
import SocialContact from "../../common/social-contact";
import Seperator from "../../common/social-contact/seperator";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Seperator></Seperator>
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact></SocialContact>
        </div>
        <div className="download">
          <a download href={require("../../../assets/Resume.pdf").default}>
            {/* <i class = "fi-rr-cloud-download-icon"/> */}
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
