import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="img-wrappper">
        <img src="./images/header-logo.jpeg" className="logo" alt="logo" />
        <h2>Resume Builder</h2>
      </div>
    </div>
  );
};

export default Header;
