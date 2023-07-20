import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
const NotFound = () => {
  return (
    <>
      <Nav />
      <h1>Sorry, the page you were lookng for was not found.</h1>
      <Link to="/" className="floating btn btn--med btn--theme dynamicBgClr">
        Return to home
      </Link>
      <Footer />
    </>
  );
};

export default NotFound;
