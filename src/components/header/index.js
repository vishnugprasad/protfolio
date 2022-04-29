import React from "react";
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile";

function Header() {
  return (
    <div className="header">
      <div className="logo"> VISHNU G PRASAD</div>
      <div className="menu">
        <div className="web-menu"> <Web/></div>
        <div className="mobile-menu"><Mobile/></div>
      </div>
    </div>
  );
}

export default Header;
