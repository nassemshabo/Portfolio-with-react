import React from "react";

import "./style.header-section.scss";
import Header from "../Header/Header";

const HeaderSection = () => {
  return (
    <div className="header-section">
      <Header />
      <div className="main-section">
        <h1>Hello, I am Nassem Shabo</h1>
        <h4>I am a Frond End Developer</h4>
        <button className="main-section-btn">View My Porjects</button>
      </div>
    </div>
  );
};

export default HeaderSection;
