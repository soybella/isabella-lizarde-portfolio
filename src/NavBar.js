import React from "react";
import logo from "./images/logo-small.png";
import "./App.css";

export default function NavBar() {
  return (
    <div className="NavBar fixed-top bg-white">
      <nav className="navbar navbar-expand-lg">
        <div className="container navbar-length p-0 mx-5">
          <a
            className="navbar-brand"
            href="/index.html"
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
                  href="/about.html"
                  title="Isabella's about page"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/work.html"
                  title="Isabella's work page"
                >
                  Work
                </a>
              </li>
              <li className="nav-item m-0">
                <a
                  className="nav-link"
                  href="/contact.html"
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
