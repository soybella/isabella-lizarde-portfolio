import React from "react";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-6 d-none d-md-block">
            <img src="#" className="img-fluid portfolio-image" alt="#" />
          </div>
          <div className="col-sm-6 project-description">
            <h2 className="mb-3">World Clock</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="mt-5">
              <a
                href="#homepage"
                className="button-link"
                title="Ramen Project Website"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 project-description">
            <h2 className="mb-3">Weather App</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="mt-5">
              <a
                href="#homepage"
                className="button-link"
                title="Weather App Website"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-sm-6 d-none d-md-block">
            <img src="#" className="img-fluid portfolio-image" alt="#" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-6 d-none d-md-block">
            <img src="#" className="img-fluid portfolio-image" alt="#" />
          </div>
          <div className="col-sm-6 project-description">
            <h2 className="mb-3">Dictionary App</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="mt-5">
              <a
                href="#homepage"
                className="button-link"
                title="Favorite Hobby Website"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
