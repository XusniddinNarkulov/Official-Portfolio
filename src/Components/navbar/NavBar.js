import React, { useState } from "react";
import { useEffect } from "react";
import useScrollPosition from "../../assets/customHooks/ScrollPosition";
import "./NavBar.scss";

const NavBar = ({ positions }) => {
    const [hash, setHash] = useState("#header");
    const scrollPosition = useScrollPosition();
    const { projectsY, contactsY } = positions;

    useEffect(() => {
        if (scrollPosition > -1 && scrollPosition < projectsY - 400) {
            setHash("#header");
        }
        if (scrollPosition > projectsY - 400 && scrollPosition < contactsY) {
            setHash("#projects");
        }
        if (scrollPosition > contactsY - 400) {
            setHash("#contacts");
        }
    }, [scrollPosition, contactsY, projectsY]);

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
                    scrollPosition > contactsY - 500
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
