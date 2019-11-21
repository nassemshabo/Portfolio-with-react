import React from "react";

import "./style.project.scss";
import data from "./ProjectData";

class Project extends React.Component {
  state = {
    projects: data
  };
  render() {
    console.log(this.state.projects);
    return (
      <div className="project-section">
        <h1>project</h1>
        <div className="main-project">
          {this.state.projects.projects.map(project => (
            <div key={project.id} className="project-box">
              <div className="img-box">
                <img src={project.url} alt={project.name} />
              </div>
              <div className="p-box">
                <p>
                  this is my project with react this is my project with react{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;