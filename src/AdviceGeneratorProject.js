import React from "react";
import adviceGeneratorProject from "./images/advice-generator.png";
import "./Projects.css";

export default function AdviceGeneratorProject() {
  return (
    <article className="AdviceGeneratorProject">
      <section className="container projects-container">
        <div className="row">
          <div className="col-md-12 col-lg-6 portfolio-project-image d-md-block">
            <img
              src={adviceGeneratorProject}
              className="img-fluid portfolio-project-image border-0"
              alt="Isabella Lizarde Advice Generator Project"
            />
          </div>
          <article className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">Advice Generator</h3>
            <p className="p-2 m-3 text-center">
              A React advice generator app that uses API integration to display
              random advice quotes. Challenge is from{" "}
              <a
                href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
                className="challenge-link"
                target="_blank"
                rel="noreferrer"
              >
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
                  <li className="skills-icon p-2">
                    <i className="fa-solid fa-gear"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-react"></i>
                  </li>
                </ul>
              </ul>
              <ul className="d-flex justify-content-center project-button responsive-project-button pt-3">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-advice-generator.netlify.app/"
                    className="button-link"
                    title="Advice Generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/advice-generator"
                    className="button-link"
                    title="Advice Generator Github Repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="p-2 mb-3 text-start">Advice Generator</h3>
            <p className="p-2 m-0 text-start">
              A React advice generator app that uses API integration to display
              random advice quotes. Challenge is from{" "}
              <a
                href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
                className="challenge-link"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Mentor
              </a>
              .
            </p>
            <div className="project-skills-icons pt-4">
              <ul className="d-flex p-0 justify-content-start">
                <p className="pt-2">Technologies: </p>
                <li className="skills-icon">
                  <i className="fa-brands fa-html5"></i>
                </li>
                <li className="skills-icon">
                  <i className="fa-brands fa-css3-alt"></i>
                </li>
                <li className="skills-icon">
                  <i className="fa-brands fa-square-js"></i>
                </li>
                <li className="skills-icon">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                </li>
                <li className="skills-icon">
                  <i className="fa-solid fa-gear"></i>
                </li>
                <li className="skills-icon">
                  <i className="fa-brands fa-react"></i>
                </li>
              </ul>
              <ul className="d-flex justify-content-start project-button px-0">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-advice-generator.netlify.app/"
                    className="button-link"
                    title="Advice Generator Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button ps-3">
                  <a
                    href="https://github.com/soybella/advice-generator"
                    className="button-link"
                    title="Advice Generator Github Repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </article>
  );
}
