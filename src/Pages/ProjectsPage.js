import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import projectdata from "../projectData.json";
import { useParams } from "react-router-dom";
import { ABOUT_STUFF, PROJECTPAGE_STUFF } from "../constants";

const ProjectsPage = () => {
  const { id } = useParams();

  const projects = projectdata.Projects;
  const projectData = projects
    .map((project) => project.data[0])
    .find((data) => data.id === id);

  return (
    <div>
      <Nav />
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{projectData["name"]}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">{projectData["short-description"]}</p>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img
                src={projectData["image"]}
                alt=""
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__links">
              <a
                href={projectData["live-link"]}
                className="btn btn--med btn--theme project-details__links-btn"
                target="_blank"
              >
                {PROJECTPAGE_STUFF.live_link}
              </a>
              <a
                href={projectData["code-link"]}
                className="btn btn--med btn--theme-inv project-details__links-btn"
                target="_blank"
              >
                {PROJECTPAGE_STUFF.code_link}
              </a>
            </div>
            <div className="project-details__content-main">
              \
              <div className="project-details__desc">
                <h3 className="project-details__content-title">
                  {PROJECTPAGE_STUFF.project_intro}
                </h3>

                <img
                  className="scrabble"
                  src={PROJECTPAGE_STUFF.scrabble}
                  alt=""
                />

                <p className="project-details__desc-para">
                  {projectData["the-build"]}
                </p>
                <h2>{PROJECTPAGE_STUFF.inspiration}</h2>
                <p className="project-details__desc-para">
                  {projectData["the-inspiration1"]}
                </p>
                <p className="project-details__desc-para">
                  {projectData["the-inspiration2"]}
                </p>

                <h2>{PROJECTPAGE_STUFF.design}</h2>
                <p className="project-details__desc-para">
                  {projectData["the-design"]}
                </p>
                <h2>{PROJECTPAGE_STUFF.learn}</h2>
                <p className="project-details__desc-para">
                  {projectData["the-learning"]}
                </p>
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">
                  {PROJECTPAGE_STUFF.tools}
                </h3>
                <div className="skills">
                  <div className="skills-skill">{ABOUT_STUFF.skill_react}</div>
                  <div className="skills-skill">{ABOUT_STUFF.skill_js}</div>
                  <div className="skills-skill">{ABOUT_STUFF.skill_html}</div>
                  <div className="skills-skill">{ABOUT_STUFF.skill_css}</div>
                  <div className="skills-skill">{ABOUT_STUFF.skill_git}</div>
                </div>

                <img className="xs" src={PROJECTPAGE_STUFF.xImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
