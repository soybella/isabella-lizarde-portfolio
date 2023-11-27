import React from "react";
import todoListProject from "./images/todo-list-project.png";

export default function TodoListProject() {
  return (
    <div className="TodoListProject">
      <h2 className="header container text-center">Current Projects</h2>
      <div className="container projects-container">
        <div className="row">
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={todoListProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
          <div className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">Todo List</h3>
            <p className="p-2 m-3 text-center">
              A React to-do list that helps you organize your daily tasks and
              complete projects on time.
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
                    <i className="fa-brands fa-bootstrap"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-react"></i>
                  </li>
                </ul>
              </ul>
              <ul className="d-flex justify-content-center project-button responsive-project-button pt-3">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-todo-list.netlify.app/"
                    className="button-link"
                    title="Boba Date Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/todo-list-project"
                    className="button-link"
                    title="Todo List Github Repository"
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
            <h3 className="p-2 mb-3 text-start">Todo List</h3>
            <p className="p-2 m-0 text-start">
              A React to-do list that helps you organize your daily tasks and
              complete projects on time.
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
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-bootstrap"></i>
                </li>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-react"></i>
                </li>
              </ul>
              <ul className="d-flex justify-content-start project-button px-0">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-todo-list.netlify.app/"
                    className="button-link"
                    title="Todo List Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button ps-3">
                  <a
                    href="https://github.com/soybella/todo-list-project"
                    className="button-link"
                    title="Todo List Github Repository"
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
