import React from "react";
import "./Buttons.scss";

const Buttons = () => {
   return (
      <div className="button-container">
         <a href="#contacts" className="btn pri">
            Contact Me
         </a>
         <a href="#resume" className="btn sec">
            Download Resume
         </a>
      </div>
   );
};

export default Buttons;
