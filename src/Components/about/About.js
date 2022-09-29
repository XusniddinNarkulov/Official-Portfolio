import React, { useEffect, useRef } from "react";
import "./About.scss";

import Buttons from "../button/Buttons";
import resume from "./Xusniddin Narkulov React Resume.pdf";

const About = ({ getPosition }) => {
   const myRef = useRef();

   useEffect(() => {
      const position = myRef.current.offsetTop;
      getPosition(position);
   }, []);

   return (
      <div className="about-container" ref={myRef}>
         <h2>
            <span id="about">About Me</span> <br />
            <p>
               I will never regret choosing this profession, because I love
               coding
            </p>
         </h2>
         <div className="skills">
            <div className="hard-skills">
               <h3>Hard Skills</h3>
               <ul>
                  <li>Clean Code</li>
                  <li>Simple Design</li>
                  <li>Responsive Design</li>
                  <li>Problem Solving (Googling)</li>
               </ul>
            </div>
            <div className="soft-skills">
               <h3>Soft Skills</h3>
               <ul>
                  <li>Lifelong Learning</li>
                  <li>Time Management</li>
                  <li>Responsibility</li>
               </ul>
            </div>
         </div>

         <Buttons resume={resume} />
      </div>
   );
};

export default About;
