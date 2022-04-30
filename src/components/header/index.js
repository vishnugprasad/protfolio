import React, { useState } from "react";
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo"> VISHNU G PRASAD</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div>
          <button onClick = {()=> {setIsOpen(!isOpen)}}className = "menu-icon"></button>
          </div>
          <div>
            {isOpen && <Mobile isOpen = {isOpen} setIsOpen = {setIsOpen} />}  
            {/* passing props to the mobile */}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
