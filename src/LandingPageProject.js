import React, { useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import landingPageProject from "./images/landing-page-project.png";
import "./Projects.css";

export default function LandingPageProject() {
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin: "-220px",
  });

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (isIntersecting) {
        currentRef.classList.add("visible");
      } else {
        currentRef.classList.remove("visible");
      }
    }
  }, [isIntersecting, ref]);

  return (
    <article className="LandingPageProject fade-in-section" ref={ref}>
      <section className="container projects-container">
        <div className="row">
          <article className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="p-2 mb-3 text-end">Landing Page</h3>
            <p className="p-2 m-0 text-end">
              A company landing page made with vanilla HTML and CSS only to
              strengthen UI and responsive skills. Challenge is from{" "}
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
              <ul className="d-flex p-0 justify-content-end">
                <p className="pt-2">Technologies: </p>
                <li className="skills-icon">
                  <i className="fa-brands fa-html5"></i>
                </li>
                <li className="skills-icon">
                  <i className="fa-brands fa-css3-alt"></i>
                </li>
                <li className="skills-icon">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                </li>
              </ul>
              <ul className="d-flex justify-content-end project-button">
                <li className="project-button pe-3">
                  <a
                    href="https://isabellalizarde-company-landing-page.netlify.app"
                    className="button-link"
                    title="Landing Page Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/isabellalizarde-company-landing-page"
                    className="button-link"
                    title="Landing Page Project Github Repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <div className="col-md-12 col-lg-6 portfolio-project-image d-md-block">
            <img
              src={landingPageProject}
              className="img-fluid portfolio-project-image border-0"
              alt="Isabella Lizarde Landing Page Project"
            />
          </div>
          <article className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">Landing Page</h3>
            <p className="p-2 m-3 text-center">
              A company landing page made with vanilla HTML and CSS only to
              strengthen UI and responsive skills. Challenge is from{" "}
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
                    href="https://isabellalizarde-company-landing-page.netlify.app"
                    className="button-link "
                    title="Landing Page Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/isabellalizarde-company-landing-page"
                    className="button-link"
                    title="Landing Page Github Repository"
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
