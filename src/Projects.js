import React from "react";
import dictionaryProject from "./images/dictionary-project.png";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <h2 className="header container text-center">Projects</h2>
      <div className="container projects-container px-3">
        <div className="row">
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={dictionaryProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
          <div className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="mb-3">Dictionary App</h3>
            <p className="p-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="project-skills-icons">
              <ul>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
              </ul>
              {/* <a
                href="#homepage"
                className="button-link"
                title="Ramen Project Website"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container projects-container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="mb-3">Weather App</h3>
            <p className="p-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="project-skills-icon">
              {/* <a
                href="#weather"
                className="button-link"
                title="Weather App Website"
              >
                Learn More
              </a> */}
            </div>
          </div>
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={dictionaryProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
        </div>
      </div>
      <div className="container projects-container">
        <div className="row mt-5">
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={dictionaryProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
          <div className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="mb-3">Dictionary App</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="project-skills-icon">
              {/* <a
                href="#homepage"
                className="button-link"
                title="Favorite Hobby Website"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
