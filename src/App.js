import React from "react";
import "./App.scss";
import NavBar from "./Components/navbar/NavBar";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import ScrollUp from "./Components/scrollUp/ScrollUp";
import { useState } from "react";

const App = () => {
    const [aboutY, setAboutY] = useState(null);
    const [projectsY, setProjectsY] = useState(null);
    const [contactsY, setContactsY] = useState(null);

    return (
        <div className="App">
            <div className="bg-circle1"></div>
            <div className="bg-circle2"></div>
            <Header />
            <NavBar positions={{ aboutY, projectsY, contactsY }} />
            <Home />
            <About getPosition={setAboutY} />
            <Projects getPosition={setProjectsY} />
            <Contact getPosition={setContactsY} />
            <ScrollUp />
        </div>
    );
};

export default App;
