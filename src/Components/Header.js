import React from "react";
import { HEADER_STUFF, SOCIAL_STUFF } from "../constants";

const Header = () => {
  return (
    <div>
      <section className="home-hero">
        <div className="home-hero__content">
          <div className="home-hero__info">
            <p className="text-primary">
              {HEADER_STUFF.myInfo}{" "}
              <strong>{HEADER_STUFF.myInfo_specialty}</strong>
              {HEADER_STUFF.myInfo2}
            </p>
          </div>
          <div className="home-hero__cta">
            <img className="arrow" src={HEADER_STUFF.arrow} alt="" />
            <a href="#/#projects" className="btn main-btn">
              {HEADER_STUFF.button_text}
            </a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a
              target="blank"
              href={SOCIAL_STUFF.linkedIn_link}
              className="home-hero__social-icon-link"
            >
              <img
                src={SOCIAL_STUFF.linkedIn_icon}
                alt="icon"
                className="floating home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              target="blank"
              href={SOCIAL_STUFF.Github_link}
              className="home-hero__social-icon-link"
            >
              <img
                src={SOCIAL_STUFF.GitHub_icon}
                alt="icon"
                className="floating home-hero-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              target="blank"
              href={SOCIAL_STUFF.Behance_link}
              class="home-hero__social-icon-link"
            >
              <img
                src={SOCIAL_STUFF.Behance_icon}
                alt="icon"
                className="floating home-hero-icon"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
