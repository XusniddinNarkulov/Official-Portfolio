import React, { useEffect, useRef } from "react";
import "./Projects.scss";

const Projects = ({ getPosition }) => {
   const myRef = useRef();

   useEffect(() => {
      const position = myRef.current.offsetTop;
      getPosition(position);
   }, []);

   return (
      <div className="projects-container" id="projects" ref={myRef}>
         <h1 className="projects-container__header">
            <span>Projects</span>
         </h1>

         <div className="projects-container__project">
            <div className="projects-container__project-img"></div>

            <div className="projects-container__project-info">
               <h2 className="projects-container__project-info-name">
                  Online Shopping
               </h2>

               <h3 className="projects-container__project-info-technologies">
                  Technologies
               </h3>

               <ul className="projects-container__project-info-about">
                  <li>React</li>
                  <li>Redux</li>
                  <li>Firebase</li>
               </ul>

               <div className="projects-container__project-info-links">
                  <a
                     href="#1"
                     target="_blank"
                     rel="noreferrer"
                     className="projects-container__project-info-links-website"
                  >
                     Website
                  </a>

                  <a
                     href="#2"
                     target="_blank"
                     rel="noreferrer"
                     className="projects-container__project-info-links-code"
                  >
                     Code
                  </a>
               </div>
            </div>
         </div>

         <div className="projects-container__project">
            <div className="projects-container__project-img"></div>

            <div className="projects-container__project-info">
               <h2 className="projects-container__project-info-name">
                  YouTube Clone
               </h2>

               <h3 className="projects-container__project-info-technologies">
                  Technologies
               </h3>

               <ul className="projects-container__project-info-about">
                  <li>React</li>
                  <li>Redux</li>
                  <li>Firebase</li>
               </ul>

               <div className="projects-container__project-info-links">
                  <a
                     href="#3"
                     target="_blank"
                     rel="noreferrer"
                     className="projects-container__project-info-links-website"
                  >
                     Website
                  </a>

                  <a
                     href="#4"
                     target="_blank"
                     rel="noreferrer"
                     className="projects-container__project-info-links-code"
                  >
                     Code
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Projects;
