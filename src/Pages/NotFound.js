import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <h1>Sorry, the page you were lookng for was not found.</h1>
      <Link to="/" className="floating btn btn--med btn--theme dynamicBgClr">
        Return to home
      </Link>
    </>
  );
};

export default NotFound;
