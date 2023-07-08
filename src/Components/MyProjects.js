import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MY_PROJECTS_STUFF } from "../constants";

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(false);

  const navigate = useNavigate();

  const handleClick = (id) => {
    setSelectedProject(id);
    navigate(`/project/${id}`);
    setSelectedProject(true);
  };

  return (
    <div>
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">
              {MY_PROJECTS_STUFF.project}
            </span>
            <span className="heading-sec__sub">
              {MY_PROJECTS_STUFF.projectDescription}
            </span>
          </h2>

          <div className="projects__content">
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={MY_PROJECTS_STUFF.project1Pic}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title ">
                  {MY_PROJECTS_STUFF.project1_title}
                </h3>
                <p className="projects__row-content-desc">
                  {MY_PROJECTS_STUFF.project1}
                </p>
                <button
                  onClick={() => handleClick("SnapStill")}
                  to="/project/SnapStill"
                  className="floating btn btn--med btn--theme dynamicBgClr"
                >
                  {MY_PROJECTS_STUFF.learn}
                </button>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={MY_PROJECTS_STUFF.project2Pic}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">
                  {MY_PROJECTS_STUFF.project2_title}
                </h3>
                <p className="projects__row-content-desc">
                  {MY_PROJECTS_STUFF.project2}
                </p>
                <button
                  onClick={() => handleClick("TheCommons")}
                  to="/project/TheCommons"
                  className="floating btn btn--med btn--theme dynamicBgClr"
                >
                  {MY_PROJECTS_STUFF.learn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
