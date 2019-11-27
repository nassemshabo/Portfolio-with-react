import React from "react";
import { Link } from "react-scroll";

import "./style.header.scss";

class Header extends React.Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY < 80;
      if (scroll !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  render() {
    return (
      <div style={{ height: "80px" }}>
        <div className={`header ${this.state.scrolled ? "scroll" : ""}`}>
          <div className="logo-container">
            <h1 className="logo">Nasim.Sh</h1>
          </div>
          <ul className="lists">
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-10}
                duration={700}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
                duration={700}
              >
                Contact
              </Link>
            </li>
            <li></li>
          </ul>
          <div className="icons">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
