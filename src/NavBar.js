import React from "react";
import logo from "./images/logo-small.png";
import "./App.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid navbar-length p-0">
          <a
            className="navbar-brand"
            href="#homepage"
            title="Isabella's homepage"
          >
            <img src={logo} alt="Isabella's Logo" className="logo-small" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-list" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#homepage"
                  alt="Isabella's homepage"
                  title="Isabella's homepage"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#about"
                  alt="Isabella's about page"
                  title="Isabella's about page"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#skills"
                  alt="Isabella's skills page"
                  title="Isabella's skills page"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects"
                  alt="Isabella's projects page"
                  title="Isabella's projects page"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item m-0">
                <a
                  className="nav-link"
                  href="#contact"
                  alt="Isabella's contact page"
                  title="Isabella's contact page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
