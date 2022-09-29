import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./Contact.scss";

const Contact = ({ getPosition }) => {
   const myRef = useRef();

   useEffect(() => {
      const position = myRef.current.offsetTop;
      getPosition(position);
   }, []);

   return (
      <section className="contact-container" id="contacts" ref={myRef}>
         <h1>
            <span>Contact Me</span>
         </h1>

         <div className="contact-links">
            <a
               href="https://t.me/la_frisson"
               target="_blank"
               rel="noreferrer"
               className="contact telegram"
            >
               <i className="fa-brands fa-telegram"></i>
               <h2>
                  Telegram <span>@la_frisson</span>
               </h2>
            </a>

            <a
               href="mailto:norqulovhusniddin3@gmail.com"
               target="_blank"
               rel="noreferrer"
               className="contact email"
            >
               <i className="fa-solid fa-at"></i>
               <h2>
                  E-Mail <span>norqulovhusniddin3@gmail.com</span>
               </h2>
            </a>

            <a
               href="tel:+998946416403"
               // target="_blank"
               // rel="noreferrer"
               className="contact linkedin"
            >
               <i className="fa-solid fa-phone-flip"></i>
               <h2>
                  Phone <span>+998 94 641 64 03</span>
               </h2>
            </a>
         </div>
      </section>
   );
};

export default Contact;
