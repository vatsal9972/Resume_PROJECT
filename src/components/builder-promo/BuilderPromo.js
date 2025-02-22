import React from "react";
import "./BuilderPromo.css";
import { Link } from "react-router-dom";

const BuilderPromo = () => {
  return (
    <div className="builder-promo-container">
      <div className="left-container">
        <img
          src="./images/builder-promo.jpeg"
          alt="Builder Promo"
          className="builder-img"
        />
      </div>
      <div className="right-container">
        <h1 className="title">
          A Quick and Easy Way to Create Your Proffesional Resume
        </h1>
        <ul>
          <li>
            Build a Resume That Gets Noticed and Opens Doors to Opportunities.
          </li>
          <li>
            Take Control of Your Future with our Customizable Resume Builder.
          </li>
          <li>Transform Your Skills and Experience into a Powerful Resume.</li>
        </ul>
        <Link to={"/resume-form"}>
          <button className="btn">Create My Resume Now</button>
        </Link>
      </div>
    </div>
  );
};

export default BuilderPromo;
