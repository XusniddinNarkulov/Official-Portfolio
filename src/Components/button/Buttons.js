import React from "react";
import "./Buttons.scss";

const Buttons = () => {
    return (
        <div className="button-container">
            <a href="#contacts" className="btn pri">
                Contact Me
            </a>

            <a
                href="https://docs.google.com/document/d/1z6D5_fKqU2y8wzve3DpNCwYpDilUb2B7ioZeQuhc5hw/edit?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="btn sec"
            >
                Resume
            </a>
        </div>
    );
};

export default Buttons;
