import React from "react";
import { ABOUT_STUFF, CONTACT_STUFF } from "../constants";

const About = () => {
  return (
    <div>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <div className="about-stuff">
              <span className="heading-sec__main">About Me</span>
              <span>
                <img src="./img/smiley-logo-2.png" alt="" />
              </span>
            </div>
            <span className="heading-sec__sub">
              <p>{ABOUT_STUFF.about_me1}</p>
              <br />
              <p>{ABOUT_STUFF.about_me2}</p>
              <br />
              <p>{ABOUT_STUFF.about_me3}</p>
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">{ABOUT_STUFF.about_me5}</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  {ABOUT_STUFF.about_me4}
                </p>
              </div>
              <a
                href="mailto:ylexislauren@gmail.com"
                className="btn btn--med btn--theme dynamicBgClr"
              >
                {CONTACT_STUFF.contact}
              </a>
            </div>
            <div className="about__content-skills">
              <img
                className="scribble-circle"
                src="./img/scribble-circle2.png"
                alt=""
              />
              <h3 className="about__content-title">{ABOUT_STUFF.mySkills}</h3>
              <div className="skills">
                <div className="skills-skill">{ABOUT_STUFF.skill_html}</div>
                <div className="skills-skill">{ABOUT_STUFF.skill_css}</div>
                <div className="skills-skill">{ABOUT_STUFF.skill_js}</div>
                <div className="skills-skill">{ABOUT_STUFF.skill_react}</div>
                <div className="skills-skill">{ABOUT_STUFF.skill_jq}</div>
                <div className="skills-skill">{ABOUT_STUFF.skill_re}</div>
                <div className="skills-skill">{ABOUT_STUFF.skill_bs}</div>
                <div className="skills-skill">{ABOUT_STUFF.skill_git}</div>
                <div className="skills-skill">{ABOUT_STUFF.skill_f}</div>
                <div className="skills-skill">{ABOUT_STUFF.skill_sass}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
