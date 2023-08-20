import React from "react";
import dictionaryProject from "./images/dictionary-project.png";
import weatherProject from "./images/weather-project.png";
import travelSiteProject from "./images/responsive-travel-site.png";
import responsiveIcon from "./images/responsive-icon.jpeg";
import worldClockProject from "./images/world-clock.png";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <h2 className="header text-center">Projects</h2>
      {/* project 1 */}
      <div className="container projects-container">
        <div className="row">
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={dictionaryProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
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
              {/* <a
                href="#homepage"
                className="button-link"
                title="Ramen Project Website"
              >
                Learn More
              </a> */}
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

      {/* project 2 */}
      <div className="container projects-container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="mb-3">Weather App</h3>
            <p className="p-2 m-0">
              A React weather app with a search engine that displays live
              weather for the current day, as well as a five day forecast using
              API integration.
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
                    href="https://isabellalizarde-weather-app.netlify.app/"
                    className="button-link"
                    title="Weather App Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/react-weather-app-project"
                    className="button-link"
                    title="Weather App Github Repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={weatherProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
          <div className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">Weather App</h3>
            <p className="p-2 m-3 text-center">
              A React weather app with a search engine that displays live
              weather for the current day, as well as a five day forecast using
              API integration.
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
                    href="https://isabellalizarde-weather-app.netlify.app/"
                    className="button-link"
                    title="Weather App Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/react-weather-app-project"
                    className="button-link"
                    title="Weather App Github Repository"
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

      {/* project 3 */}
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
              A travel site that uses vanilla HTML, HTML embeds, and advanced
              CSS techniques such as Flexbox to create a sophisticated
              responsive design.
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
            <h3 className="mb-3">Travel Site</h3>
            <p className="p-2 m-0">
              A travel site that uses vanilla HTML, HTML embeds, and advanced
              CSS techniques such as Flexbox to create a sophisticated
              responsive design.
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
                <li className="skills-icon">
                  <div className="projects-img-icon responsive-icon">
                    <img src={responsiveIcon} alt="responsive-icon" />
                  </div>
                </li>
              </ul>
              <ul className="d-flex justify-content-evenly project-button">
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
        </div>
      </div>

      {/* project 4 */}
      <div className="container projects-container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="mb-3">World Clock</h3>
            <p className="p-2 m-0">
              A web app that uses advanced elements of JavaScript to create
              display a clock with times from different places around the world.
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
              </ul>
              <ul className="d-flex justify-content-evenly project-button">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-world-clock.netlify.app/"
                    className="button-link"
                    title="World Clock Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/World-clock"
                    className="button-link"
                    title="World Clock Project Github Repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={worldClockProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
          <div className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">World Clock</h3>
            <p className="p-2 m-3 text-center">
              {" "}
              web app that uses advanced elements of JavaScript to create
              display a clock with times from different places around the world.
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
              </ul>
              <ul className="d-flex justify-content-evenly project-button pt-3">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-world-clock.netlify.app/"
                    className="button-link "
                    title="World Clock Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/World-clock"
                    className="button-link"
                    title="World Clock Github Repository"
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
