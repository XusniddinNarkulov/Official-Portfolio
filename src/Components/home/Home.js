import React, { useState } from "react";
import "./Home.scss";
import img from "../../frisson.avif";

const Home = () => {
    const [active, setActive] = useState(true);
    window.onclick = () => {
        setActive(false);
    };
    return (
        <div className="home-container">
            <div className="logo">
                <div
                    className={`main-img ${active && "active"}`}
                    onClick={(e) => {
                        e.stopPropagation();
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
