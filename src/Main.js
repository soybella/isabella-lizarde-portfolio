import React from "react";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import profilePhoto from "./images/temp-profile-photo.jpeg";

export default function Main() {
  return (
    <div className="Main">
      <div class="container about-content pt-5">
        <div class="row">
          <div class="col-sm">
            <h2 class="mb-3">About Me</h2>
            <h5 class="mb-3">Hello World!</h5>
            <p>My name is Isabella Lizarde</p>
            <div class="mt-5">
              <a href="#" class="button-link" title="View Isabella's projects">
                View My projects
              </a>
            </div>
          </div>
          <div class="col-md-6 d-md-block">
            <img
              src={profilePhoto}
              class="img-fluid portfolio-profile-image"
              alt="Isabella's Portfolio Profile Image"
            />
          </div>
        </div>
      </div>
      <Skills />
      <br />
      <Projects />
      <br />
      <Contact />
    </div>
  );
}
