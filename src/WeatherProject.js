import React from "react";
import weatherProject from "./images/weather-project.png";

export default function WeatherProject() {
  return (
    <div className="WeatherProject">
      <div className="container projects-container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="mb-3 text-end">Weather App</h3>
            <p className="p-2 m-0 text-end">
              A React weather app with a search engine that displays live
              weather for the current day, as well as a five day forecast using
              API integration.
            </p>
            <div className="project-skills-icons pt-4">
              <ul className="d-flex p-0 justify-content-end">
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
              <ul className="d-flex justify-content-end project-button pt-4">
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
    </div>
  );
}
