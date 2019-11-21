import React from "react";

import "./style.about.scss";
import AboutImg from "../../img/AboutImg.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-me">
        <h4>Who am i..</h4>
        <p>
          Hello there! My name is Nasim and I'm a Front End Developer Like many
          other people, I enjoy spending my free time increasing my knowledge of
          Web Development and building new and challenging projects. Find out
          more
        </p>
      </div>
      <div className="about-img">
        <img src={AboutImg} alt="about-img" />
      </div>
    </div>
  );
};

export default About;
