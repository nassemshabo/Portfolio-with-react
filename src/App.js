import React from "react";

import "./App.css";
import HeaderSection from "./components/Header-section/HeaderSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";

const App = () => {
  return (
    <div className="app">
      <HeaderSection />
      <About />
      <Skills />
      <Project />
    </div>
  );
};

export default App;
