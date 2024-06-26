import React from "react";
import logo from "./images/logo-small.png";
import "./NavBar.css";

export default function NavBar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="NavBar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navbar-container p-0">
          <img src={logo} alt="Isabella's Logo" className="logo-small" />
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
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => scrollToSection("homepage")}
                  alt="Isabella's homepage"
                  title="Isabella's homepage"
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  aria-current="page"
                  onClick={() => scrollToSection("about")}
                  alt="Isabella's about page"
                  title="Isabella's about page"
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection("skills")}
                  alt="Isabella's skills page"
                  title="Isabella's skills page"
                >
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection("projects")}
                  alt="Isabella's projects page"
                  title="Isabella's projects page"
                >
                  Projects
                </button>
              </li>
              <li className="nav-item m-0">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection("contact")}
                  alt="Isabella's contact page"
                  title="Isabella's contact page"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
