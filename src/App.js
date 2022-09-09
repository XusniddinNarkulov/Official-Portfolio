import React from "react";
import "./App.scss";
import NavBar from "./Components/navbar/NavBar";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";

const App = () => {
   return (
      <div className="App">
         <div className="bg-circle1"></div>
         <div className="bg-circle2"></div>
         <Header />
         <NavBar />
         <Home />
         <About />
         <Projects />
         <Contact />
      </div>
   );
};

export default App;
