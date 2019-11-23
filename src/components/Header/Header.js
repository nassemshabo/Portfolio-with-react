import React from "react";

import "./style.header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <h1 className="logo">Nasim.Sh</h1>
      </div>
      <ul className="lists">
        <li>
          <a className="list">Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Porjects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <div className="icons">
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default Header;
