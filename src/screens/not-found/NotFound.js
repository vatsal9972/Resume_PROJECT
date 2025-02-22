import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 Not Found</h1>
      <p>Something Went Wrong!</p>
      <Link to={"/"}>
        <button className="try-again">Try again</button>
      </Link>
    </div>
  );
};

export default NotFound;
