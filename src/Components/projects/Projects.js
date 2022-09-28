import React, { useEffect, useRef } from "react";
import "./Projects.scss";

import cryptoCoinImg from "./images/cryptocoin.webp";
import youtubeCloneImg from "./images/youtube-clone.webp";
import cosmeticsImg from "./images/cosmetics.webp";

const Projects = ({ getPosition }) => {
   const myRef = useRef();
   const projectsData = [
      {
         projectName: "cryptocoin",
         technologies: [
            <div>
               <b>React : </b>Redux-Toolkit
            </div>,
            <div>
               <b>Style : </b>Ant-Design
            </div>,
            <div>
               <b>Dependencies : </b>react-router-dom, react-chartjs-2,
               chart.js, moment, millify, html-react-parser
            </div>,
         ],
         websiteLink: "https://crypto-coin-narkulov.vercel.app",
         githubLink: "https://github.com/XusniddinNarkulov/CryptoCoin",
      },
      {
         projectName: "youtube-clone",
         technologies: [
            <div>
               <b>React : </b>react-hooks
            </div>,
            <div>
               <b>Style : </b>MaterialUI
            </div>,
            <div>
               <b>Dependencies : </b>react-router-dom, react-player, axios
            </div>,
         ],
         websiteLink: "https://youtube-clone-pbko.vercel.app",
         githubLink: "https://github.com/XusniddinNarkulov/youtube-clone",
      },
      {
         projectName: "cosmetics",
         technologies: [
            <div>
               <b>React : </b>react-hooks
            </div>,
            <div>
               <b>Style : </b>MaterialUI, SCSS
            </div>,
            <div>
               <b>Dependencies : </b>mui, sass
            </div>,
         ],
         websiteLink: "https://cosmetics-opal.vercel.app",
         githubLink: "https://github.com/XusniddinNarkulov/Cosmetics",
      },
   ];

   useEffect(() => {
      const position = myRef.current.offsetTop;
      getPosition(position);
   }, []);

   return (
      <div className="projects-container" id="projects" ref={myRef}>
         <h1 className="projects-container__header">
            <span>Projects</span>
         </h1>

         {projectsData.map(
            ({ projectName, technologies, websiteLink, githubLink }, i) => {
               return (
                  <div className="projects-container__project" key={i}>
                     <div
                        className={`projects-container__project-img ${projectName}`}
                     ></div>

                     <div className="projects-container__project-info">
                        <h2 className="projects-container__project-info-name">
                           {projectName}
                        </h2>

                        <h3 className="projects-container__project-info-technologies">
                           Technologies
                        </h3>

                        <ul className="projects-container__project-info-about">
                           {technologies.map((tech, idx) => (
                              <li key={idx}>{tech}</li>
                           ))}
                        </ul>

                        <div className="projects-container__project-info-links">
                           <a
                              href={websiteLink}
                              target="_blank"
                              rel="noreferrer"
                              className="projects-container__project-info-links-website"
                           >
                              Website
                           </a>

                           <a
                              href={githubLink}
                              target="_blank"
                              rel="noreferrer"
                              className="projects-container__project-info-links-code"
                           >
                              Code
                           </a>
                        </div>
                     </div>
                  </div>
               );
            }
         )}
      </div>
   );
};

export default Projects;
