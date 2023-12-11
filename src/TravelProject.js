import React from "react";
import travelSiteProject from "./images/travel-site-project.png";
import "./Projects.css";

export default function TravelProject() {
  return (
    <div className="TravelProject">
      <div className="container projects-container">
        <div className="row">
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={travelSiteProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
          <div className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">Travel Site</h3>
            <p className="p-2 m-3 text-center">
              A React advice generator app that uses API integration to display
              random advice quotes. Challenge from{" "}
              <a href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db">
                Frontend Mentor
              </a>
              .
            </p>
            <div className="project-skills-icons pt-2">
              <ul className="d-flex p-0 justify-content-center">
                <ul className="d-flex p-0 justify-content-center">
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-html5"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-css3-alt"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-square-js"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                  </li>
                </ul>
              </ul>
              <ul className="d-flex justify-content-center project-button responsive-project-button pt-3">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-travel-santa-monica.netlify.app/"
                    className="button-link"
                    title="Travel Site Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/Responsive-Travel-Site"
                    className="button-link"
                    title="Travel Site Github Repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="p-2 mb-3 text-start">Travel Site</h3>
            <p className="p-2 m-0 text-start">
              A React advice generator app that uses API integration to display
              random advice quotes. Challenge from{" "}
              <a href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db">
                Frontend Mentor
              </a>
              .
            </p>
            <div className="project-skills-icons pt-4">
              <ul className="d-flex p-0 justify-content-start">
                <p className="p-2">Technologies: </p>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-html5"></i>
                </li>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-css3-alt"></i>
                </li>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-square-js"></i>
                </li>
                <li className="skills-icon p-2">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                </li>
              </ul>
              <ul className="d-flex justify-content-start project-button px-0">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-travel-santa-monica.netlify.app/"
                    className="button-link"
                    title="Travel Site Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button ps-3">
                  <a
                    href="https://github.com/soybella/Responsive-Travel-Site"
                    className="button-link"
                    title="Travel Site Github Repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
