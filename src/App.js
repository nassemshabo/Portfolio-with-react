import React from "react";

import "./App.css";
import HeaderSection from "./components/Header-section/HeaderSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    /* main-app*/
    <div className="app">
      <HeaderSection />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
