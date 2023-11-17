import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./Contact.scss";
import { AtIcon, LinkedInIcon, TelegramIcon } from "../../assets/Svgs";

const Contact = ({ getPosition }) => {
    const myRef = useRef();

    useEffect(() => {
        const position = myRef.current.offsetTop;
        getPosition(position);
    }, [getPosition]);

    return (
        <section className="contact-container" id="contacts" ref={myRef}>
            <h1>
                <span>Contact Me</span>
            </h1>

            <div className="contact-links">
                <a
                    href="https://t.me/la_frisson"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact telegram"
                >
                    {/* <i className="fa-brands fa-telegram"></i> */}
                    <TelegramIcon />
                    <h2>
                        Telegram <span>@la_frisson</span>
                    </h2>
                </a>

                <a
                    href="mailto:norqulovhusniddin3@gmail.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact email"
                >
                    {/* <i className="fa-solid fa-at"></i> */}
                    <AtIcon />
                    <h2>
                        E-Mail <span>norqulovhusniddin3@gmail.com</span>
                    </h2>
                </a>

                <a
                    href="https://www.linkedin.com/in/husniddin-norqulov"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="contact linkedin"
                >
                    {/* <i className="fa-brands fa-linkedin-in"></i> */}
                    <LinkedInIcon />
                    <h2>
                        LinkedIn <span>husniddin-norqulov</span>
                    </h2>
                </a>
            </div>
        </section>
    );
};

export default Contact;
