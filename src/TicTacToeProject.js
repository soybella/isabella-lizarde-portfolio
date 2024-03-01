import React from "react";
import ticTacToeProject from "./images/tic-tac-toe.png";
import "./Projects.css";

export default function TicTacToeProject() {
  return (
    <div className="TicTacToeProject">
      <div className="TicTacToeProject">
        <div className="container projects-container">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block project-description">
              <h3 className="p-2 mb-3 text-end">Tic Tac Toe Project</h3>
              <p className="p-2 m-0 text-end">
                A Tic Tac Toe game in which you play against the computer.
                Vanilla JavaScript, HTML, and CSS, are used to build this
                project to help deepen understanding of core foundations.
              </p>
              <div className="project-skills-icons pt-4">
                <ul className="d-flex p-0 justify-content-end">
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
                </ul>
                <ul className="d-flex justify-content-end project-button">
                  <li className="project-button pe-3">
                    <a
                      href="https://isabellalizarde-tic-tac-toe.netlify.app"
                      className="button-link"
                      title="Tic Tac Toe Project Website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Live
                    </a>
                  </li>
                  <li className="project-button">
                    <a
                      href="https://github.com/soybella/isabellalizarde-tic-tac-toe"
                      className="button-link"
                      title="Tic Tac Toe Project Github Repository"
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
                src={ticTacToeProject}
                className="img-fluid portfolio-project-image border-0"
                alt="#"
              />
            </div>
            <div className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
              <h3 className="mt-3">Tic Tac Toe Project </h3>
              <p className="p-2 m-3 text-center">
                A Tic Tac Toe game in which you play against the computer.
                Vanilla JavaScript, HTML, and CSS, are used to build this
                project to help deepen understanding of core foundations.
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
                <ul className="d-flex justify-content-center responsive-project-button project-button pt-3">
                  <li className="project-button">
                    <a
                      href="https://isabellalizarde-tic-tac-toe.netlify.app"
                      className="button-link "
                      title="Tic Tac Toe Project Website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Live
                    </a>
                  </li>
                  <li className="project-button">
                    <a
                      href="https://github.com/soybella/isabellalizarde-tic-tac-toe"
                      className="button-link"
                      title="Tic Tac Toe Project Github Repository"
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
    </div>
  );
}
