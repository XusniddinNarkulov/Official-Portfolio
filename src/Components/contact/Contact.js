import React from "react";
import "./Contact.scss";

const Contact = () => {
   return (
      <div className="contact-container" id="contacts">
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
               href="mailto:husniddin_norqulov@mail.ru"
               target="_blank"
               rel="noreferrer"
               className="contact email"
            >
               <i className="fa-solid fa-at"></i>
               <h2>
                  E-Mail <span>husniddin_norqulov@mail.ru</span>
               </h2>
            </a>

            <a
               href="#tg"
               // target="_blank"
               // rel="noreferrer"
               className="contact linkedin"
            >
               <i className="fa-brands fa-linkedin"></i>
               <h2>
                  LinkedIn <span>@la_frisson</span>
               </h2>
            </a>
         </div>
      </div>
   );
};

export default Contact;
