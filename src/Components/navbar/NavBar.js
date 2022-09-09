import React, { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
   const [hash, setHash] = useState();

   return (
      <div className="navbar">
         <a
            href="#header"
            onClick={(e) => {
               setHash("#header");
            }}
            className={hash === "#header" ? "active" : ""}
         >
            <i className="fa-solid fa-house-chimney"></i>
         </a>

         <a
            href="#about"
            onClick={(e) => {
               setHash("#about");
            }}
            className={hash === "#about" ? "active" : ""}
         >
            <i className="fa-solid fa-id-card"></i>
         </a>

         <a
            href="#projects"
            onClick={(e) => {
               setHash("#projects");
            }}
            className={hash === "#projects" ? "active" : ""}
         >
            <i className="fa-solid fa-briefcase"></i>
         </a>

         <a
            href="#contacts"
            onClick={(e) => {
               setHash("#contacts");
            }}
            className={hash === "#contacts" ? "active" : ""}
         >
            <i className="fa-solid fa-envelope"></i>
         </a>
      </div>
   );
};

export default NavBar;
