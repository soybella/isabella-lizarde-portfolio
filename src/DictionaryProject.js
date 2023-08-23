import React from "react";
import dictionaryProject from "./images/dictionary-project.png";
// import "./App.css";

export default function DictionaryProject() {
  return (
    <div className="DictionaryProject">
      <h2 className="header text-center">Projects</h2>
      <div className="container projects-container">
        <div className="row">
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={dictionaryProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
          {/* <ResponsiveDictionaryProject /> */}
          <div className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">Dictionary App</h3>
            <p className="p-2 m-3 text-center">
              A simple React dictionary app with a search engine that uses API
              integration to look up the definition of a word along with a
              gallery of relative photos.
            </p>
            <div className="project-skills-icons pt-2">
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
                  <i className="fa-solid fa-gear"></i>
                </li>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-bootstrap"></i>
                </li>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-react"></i>
                </li>
              </ul>
              <ul className="d-flex justify-content-evenly project-button pt-3">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-dictionary-app.netlify.app/"
                    className="button-link"
                    title="Dictionary App Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/Dictionary-App"
                    className="button-link"
                    title="Dictionary App Github Repository"
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
            <h3 className="mb-3">Dictionary App</h3>
            <p className="p-2 m-0">
              A simple React dictionary app with a search engine that uses API
              integration to look up the definition of a word along with a
              gallery of relative photos.
            </p>
            <div className="project-skills-icons pt-2">
              <ul className="d-flex p-0 justify-content-center">
                <p className="p-2">Technologies used: </p>
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
                  <i className="fa-solid fa-gear"></i>
                </li>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-bootstrap"></i>
                </li>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-react"></i>
                </li>
              </ul>
              <ul className="d-flex justify-content-evenly project-button">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-dictionary-app.netlify.app/"
                    className="button-link"
                    title="Dictionary App Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/Dictionary-App"
                    className="button-link"
                    title="Dictionary App Github Repository"
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
