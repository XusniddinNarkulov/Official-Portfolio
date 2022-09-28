import React, { useState } from "react";
import { useEffect } from "react";
import useScrollPosition from "../../assets/customHooks/ScrollPosition";
import "./NavBar.scss";

const NavBar = ({ positions }) => {
   // console.log(positions);
   const [hash, setHash] = useState("#header");
   const scrollPosition = useScrollPosition();
   const { aboutY, projectsY, contactsY } = positions;

   useEffect(() => {
      if (scrollPosition > -1 && scrollPosition < aboutY + 200) {
         setHash("#header");
      }
      if (scrollPosition > aboutY && scrollPosition < projectsY) {
         setHash("#about");
      }
      if (scrollPosition > projectsY - 100 && scrollPosition < contactsY) {
         setHash("#projects");
      }
      if (scrollPosition > contactsY - 100) {
         setHash("#contacts");
      }
   }, [scrollPosition]);

   // console.log(scrollPosition);

   return (
      <>
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

         <a
            href="#contacts"
            className={
               scrollPosition > contactsY - 300
                  ? "scroll-down hide"
                  : "scroll-down"
            }
         >
            <i className="fa-solid fa-circle-arrow-down"></i>
         </a>
      </>
   );
};

export default NavBar;
