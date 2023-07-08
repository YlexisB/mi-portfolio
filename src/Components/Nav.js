import React from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_STUFF,
  CONTACT_STUFF,
  MY_PROJECTS_STUFF,
  NAV_STUFF,
} from "../constants";

const Nav = () => {
  const scrollOptions = {
    behavior: "smooth",
    block: "start",
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView(scrollOptions);
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header__content">
          <div className="header__logo-container">
            <div className="header__logo-img-cont">
              <img src="/img/smiley.png" alt="" className="header__logo-img" />
            </div>
            <Link to="/">
              <span className="header__logo-sub">{NAV_STUFF.name}</span>
            </Link>
          </div>
          <div className="header__main">
            <ul className="header__links">
              <li className="header__link-wrapper">
                <Link
                  to="/"
                  onClick={() => handleScroll("header")}
                  className="header__link"
                >
                  {NAV_STUFF.home}
                </Link>
              </li>
              <li className="header__link-wrapper">
                <Link
                  to="/#projects"
                  href="/#projects"
                  onClick={() => handleScroll("projects")}
                  className="header__link"
                >
                  {MY_PROJECTS_STUFF.project}
                </Link>
              </li>
              <li className="header__link-wrapper">
                <Link
                  to="/#about"
                  href="/#about"
                  onClick={() => handleScroll("about")}
                  className="header__link"
                >
                  {ABOUT_STUFF.about}
                </Link>
              </li>
              <li className="header__link-wrapper">
                <Link
                  to="/#contact"
                  href="/#contact"
                  onClick={() => handleScroll("contact")}
                  className="header__link"
                >
                  {CONTACT_STUFF.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
