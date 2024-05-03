import React from "react";
import dictionaryProject from "./images/dictionary-project.png";
import "./Projects.css";

export default function DictionaryProject() {
  return (
    <article className="DictionaryProject">
      <section className="container projects-container">
        <div className="row">
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={dictionaryProject}
              className="img-fluid border-0"
              alt="Isabella Lizarde Dictionary Project"
            />
          </div>
          <article className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">Dictionary App</h3>
            <p className="p-2 m-3 text-center">
              A React dictionary app with a search engine that uses API
              integration to display the definition of a word with a gallery of
              photos.
            </p>
            <div className="project-skills-icons pt-2">
              <ul className="d-flex justify-content-center p-0">
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
              <ul className="d-flex justify-content-center project-button responsive-project-button pt-3">
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
          </article>
          <article className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="p-2 mb-3 text-start">Dictionary App</h3>
            <p className="p-2 m-0 text-start">
              A React dictionary app with a search engine that uses API
              integration to display the definition of a word with a gallery of
              photos.
            </p>
            <div className="project-skills-icons">
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
                  <i className="fa-solid fa-gear"></i>
                </li>
                <li className="skills-icon">
                  <i className="fa-brands fa-bootstrap"></i>
                </li>
                <li className="skills-icon">
                  <i className="fa-brands fa-react"></i>
                </li>
              </ul>
              <ul className="d-flex justify-content-start project-button ps-0">
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
                <li className="project-button ps-3">
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
          </article>
        </div>
      </section>
    </article>
  );
}
