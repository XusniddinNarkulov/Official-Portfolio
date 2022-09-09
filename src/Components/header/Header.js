import React from "react";
import "./Header.scss";

const Header = () => {
   return (
      <section className="header" id="header">
         <h3 className="header__name">
            <p>
               I<span>'</span>m
            </p>
            Husniddin
            <p className="header__name--job">Front-End Web Developer</p>
         </h3>
      </section>
   );
};

export default Header;
