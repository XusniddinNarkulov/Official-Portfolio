import React, { useState } from "react";
import "./Home.scss";
import img from "./img/frisson.jpg";

const Home = () => {
   const [active, setActive] = useState(false);
   return (
      <div className="home-container">
         <div className="logo">
            <div
               className={`main-img ${active && "active"}`}
               onClick={() => {
                  setActive((prev) => !prev);
               }}
            >
               <span className="circle"></span>
               <span className="circle"></span>
               <span className="circle"></span>
               <span className="circle"></span>
               <span className="circle"></span>
               <span className="circle"></span>
               <span className="circle"></span>
               <span className="circle"></span>
            </div>

            <img src={img} alt="frisson" />
         </div>
      </div>
   );
};

export default Home;
