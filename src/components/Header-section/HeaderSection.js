import React from "react";
import { Link } from "react-scroll";

import "./style.header-section.scss";
import Header from "../Header/Header";

const HeaderSection = () => {
  return (
    <div className="header-section" id="home">
      <Header />
      <div className="main-section">
        <h1>Hello, I am Nasim Shabo</h1>
        <h4>I am a Front End Developer</h4>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {" "}
          <button className="main-section-btn">View My Porjects</button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderSection;
