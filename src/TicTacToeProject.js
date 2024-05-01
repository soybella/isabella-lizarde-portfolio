import React from "react";
import ticTacToeProject from "./images/tic-tac-toe.png";
import "./Projects.css";

export default function TicTacToeProject() {
  return (
    <article className="TicTacToeProject">
      <section className="container projects-container">
        <div className="row">
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={ticTacToeProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
          <article className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="p-2 mb-3 text-start">Tic Tac Toe</h3>
            <p className="p-2 m-0 text-start">
              A Tic Tac Toe game in which you play against a computer player
              that uses random moves. Challenge is from{" "}
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
              </ul>
              <ul className="d-flex justify-content-start project-button">
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
          </article>
          {/* <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={ticTacToeProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div> */}
          <article className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">Tic Tac Toe</h3>
            <p className="p-2 m-3 text-center">
              A Tic Tac Toe game in which you play against a computer player
              that uses random moves. Challenge is from{" "}
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
          </article>
        </div>
      </section>
    </article>
  );
}