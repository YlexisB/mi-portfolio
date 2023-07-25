import React from "react";
import { FOOTER_STUFF, NAV_STUFF, SOCIAL_STUFF } from "../constants";

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="main-container">
          <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
              <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
              </h2>
              <div className="main-footer__social-cont">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={SOCIAL_STUFF.linkedIn_link}
                >
                  <img
                    className="main-footer__icon"
                    src={SOCIAL_STUFF.linkedIn_icon}
                    alt="icon"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={SOCIAL_STUFF.Github_link}
                >
                  <img
                    className=" main-footer__icon "
                    src={SOCIAL_STUFF.GitHub_icon}
                    alt="icon"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={SOCIAL_STUFF.Behance_link}
                >
                  <img
                    className="main-footer__icon"
                    src={SOCIAL_STUFF.Behance_icon}
                    alt="icon"
                  />
                </a>
              </div>
            </div>
            <div className="main-footer__row main-footer__row-2">
              <img src={FOOTER_STUFF.hearts} alt="" />
              <div>
                <h4 className="heading heading-sm text-lt">{NAV_STUFF.name}</h4>
                <p className="main-footer__short-desc">
                  {FOOTER_STUFF.thankYou}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
