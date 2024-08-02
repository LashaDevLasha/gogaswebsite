import React from "react";

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
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
      </div>
    </header>
  );
};

export default Header;
