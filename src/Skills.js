import React from "react";
import vscodeIcon from "./images/vscode-icon.png";
import responsiveIcon from "./images/responsive-icon.jpeg";

export default function Skills() {
  return (
    <div className="Skills">
      <div className="pt-3 skills-wrapper">
        {/* <div className="skills-container justify-content-center"> */}
        <h2 className="text-center">Skills</h2>
        <div className="skills-container justify-content-center">
          <div className="col-md-4 text-center">
            <div className="skills-icon">
              <i className="fa-brands fa-html5"></i>
              <h4>HTML5</h4>
            </div>
            <div className="skills-icon">
              <i className="fa-brands fa-css3-alt"></i>
              <h4>CSS</h4>
            </div>
            <div className="skills-icon">
              <i className="fa-brands fa-square-js"></i>
              <h4>JavaScript</h4>
            </div>
            <div className="skills-icon">
              <i className="fa-solid fa-gear"></i>
              <h4>API</h4>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="skills-icon">
              <i className="fa-brands fa-react"></i>
              <h4>React</h4>
            </div>
            <div className="skills-icon">
              <i className="fa-brands fa-github"></i>
              <h4>GitHub</h4>
            </div>
            <div className="skills-icon">
              <div className="img-icon vscode-icon">
                <img src={vscodeIcon} alt="vscode-icon" />
              </div>
              <h4>VSCode</h4>
            </div>
            <div className="skills-icon">
              <i className="fa-solid fa-terminal"></i>
              <h4>Terminal</h4>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="skills-icon">
              <i className="fa-brands fa-bootstrap"></i>
              <h4>Bootstrap</h4>
            </div>
            <div className="skills-icon">
              <div className="img-icon responsive-icon">
                <img src={responsiveIcon} alt="responsive-icon" />
              </div>
              <h4>Responsive Design</h4>
            </div>
            <div className="skills-icon">
              <i className="fa-brands fa-npm"></i>
              <h4>NPM</h4>
            </div>
            <div className="skills-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
              <h4>SEO</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
