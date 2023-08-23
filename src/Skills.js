import React from "react";
import responsiveIcon from "./images/responsive-icon.jpeg";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="Skills" id="skills">
      <div className="container text-center">
        <h2 className="text-center header">Skills</h2>
        <ul className="skills-container p-3">
          <li className="skills-icon">
            <i className="fa-brands fa-html5"></i>
            <h4>HTML5</h4>
          </li>
          <li className="skills-icon">
            <i className="fa-brands fa-css3-alt"></i>
            <h4>CSS</h4>
          </li>
          <li className="skills-icon">
            <i className="fa-brands fa-square-js"></i>
            <h4>JavaScript</h4>
          </li>
          <li className="skills-icon">
            <i className="fa-solid fa-gear"></i>
            <h4>API</h4>
          </li>
          <li className="skills-icon">
            <i className="fa-brands fa-react"></i>
            <h4>React</h4>
          </li>
          <li className="skills-icon">
            <i className="fa-brands fa-github"></i>
            <h4>GitHub</h4>
          </li>
          <li className="skills-icon">
            <i className="fa-solid fa-terminal"></i>
            <h4>Terminal</h4>
          </li>
          <li className="skills-icon">
            <i className="fa-brands fa-bootstrap"></i>
            <h4>Bootstrap</h4>
          </li>
          <li className="skills-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h4>SEO</h4>
          </li>
          <li className="skills-icon">
            <div className="img-icon responsive-icon">
              <img src={responsiveIcon} alt="responsive-icon" />
            </div>
            <h4>Responsive Design</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}
