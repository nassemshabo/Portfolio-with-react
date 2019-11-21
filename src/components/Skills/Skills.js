import React from "react";

import "./style.skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <div className="centering">
        <h4 className=" heading-4">skills</h4>
      </div>
      <div className="p-lang">
        <div className="html">
          <i className="fab fa-html5"></i>
          <p>html</p>
        </div>
        <div className="css">
          <i className="fab fa-css3"></i>
          <p>css</p>
        </div>
        <div className="gulp">
          <i className="fab fa-gulp"></i>
          <p>gulp</p>
        </div>
        <div className="gulp">
          <i className="fab fa-gulp"></i>
          <p>gulp</p>
        </div>
        <div className="sass">
          <i className="fab fa-sass"></i>
          <p>Sass</p>
        </div>
        <div className="javascript">
          <i className="fab fa-js"></i>
          <p>js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
