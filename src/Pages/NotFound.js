import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";

const NotFound = () => {
  return (
    <div className="main-container">
      <Nav />
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="floating btn btn--med btn--theme dynamicBgClr">
        Return to home
      </Link>
    </div>
  );
};

export default NotFound;
