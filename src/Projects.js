import React from "react";

export default function Projects() {
  return (
    <div className="Projects">
      <div class="container pt-5">
        <div class="row">
          <div class="col-sm-6 d-none d-md-block">
            <img
              src="/images/ramen-project.png"
              class="img-fluid portfolio-image"
              alt="Ramen Project Screenshot"
            />
          </div>
          <div class="col-sm-6 project-description">
            <h2 class="mb-3">Ramen App</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div class="mt-5">
              <a href="#" class="button-link" title="Ramen Project Website">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 project-description">
            <h2 class="mb-3">Weather App</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div class="mt-5">
              <a href="#" class="button-link" title="Weather App Website">
                Learn More
              </a>
            </div>
          </div>
          <div class="col-sm-6 d-none d-md-block">
            <img
              src="/images/weather-app-project.png"
              class="img-fluid portfolio-image"
              alt="Weather App Screenshot"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mt-5">
          <div class="col-sm-6 d-none d-md-block">
            <img
              src="/images/hobby-project.png"
              class="img-fluid portfolio-image"
              alt="Favorite Hobby Project Screenshot"
            />
          </div>
          <div class="col-sm-6 project-description">
            <h2 class="mb-3">Favorite Hobby App</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div class="mt-5">
              <a href="#" class="button-link" title="Favorite Hobby Website">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
