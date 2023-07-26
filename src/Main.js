import React from "react";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

export default function Main() {
  return (
    <div className="Main">
      <div class="container pt-5">
        <div class="row">
          <div class="col-sm-6 about-content">
            <h2 class="mb-3">Hi I am Isabella Lizarde</h2>
            <h4 class="mb-3">Front-end developer, based in California</h4>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div class="mt-5">
              <a href="#" class="button-link" title="View Isabella's projects">
                View My projects
              </a>
            </div>
          </div>
          <div class="col-md-6 d-md-block">
            <img
              src="/images/profile-image.jpg"
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
