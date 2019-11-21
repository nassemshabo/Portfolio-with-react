import React from "react";

import "./style.project-page.scss";

class ProjectPage extends React.Component {
  render() {
    const data = this.props.location.state.data;
    return (
      <div className="project-page">
        <div className="overview">
          <h4 className="title">OverView</h4>
          <div className="project-box">
            <div className="overview-p">
              <h4>{data.name}</h4>
              <p>
                this is my project with react and react router so i get is wher
                this all come form kldja overview section this all come form
                kldja overview section this all come form kldja overview section
                this all come form kldja overview section
              </p>
              <div className="tech-i-use">
                <h4>Technologies Used</h4>
                <ul className="p-lists">
                  <li className="p-list">React</li>
                  <li>ReactRouter</li>
                  <li>Sass</li>
                  <li>Redux</li>
                </ul>
              </div>
            </div>
            <div className="overview-img">
              <img src={data.url} alt={data.name} />
              <div className="btns">
                <button>Show Project</button>
                <button>Show Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
