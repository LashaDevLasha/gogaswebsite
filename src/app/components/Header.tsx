import React from "react";

const Header = () => {
  return (
    <header>
      <h1 style={{paddingBottom:"40px"}}>My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="#home" style={{ color: "white" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" style={{ color: "white" }}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: "white" }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
