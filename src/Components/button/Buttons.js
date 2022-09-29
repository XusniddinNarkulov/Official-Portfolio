import React from "react";
import "./Buttons.scss";

const Buttons = ({ resume }) => {
   return (
      <div className="button-container">
         <a href="#contacts" className="btn pri">
            Contact Me
         </a>
         <a href={resume} className="btn sec" download>
            Resume
         </a>
      </div>
   );
};

export default Buttons;
