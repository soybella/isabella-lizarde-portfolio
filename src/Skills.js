import React, { useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import "./Skills.css";

export default function Skills() {
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
    <article className="Skills fade-in-section" ref={ref} id="skills">
      <h2 className="text-center container header">Skills</h2>
      <ul className="skills-container container p-3">
        <li className="skills-icon">
          <i className="fa-brands fa-html5"></i>
          <h4>HTML5</h4>
        </li>
        <li className="skills-icon">
          <i className="fa-brands fa-css3-alt"></i>
          <h4>CSS</h4>
        </li>
        <li className="skills-icon">
          <i className="fa-brands fa-square-js"></i>
          <h4>JavaScript</h4>
        </li>
        <li className="skills-icon">
          <i className="fa-solid fa-gear"></i>
          <h4>API</h4>
        </li>
        <li className="skills-icon">
          <i className="fa-brands fa-react"></i>
          <h4>React</h4>
        </li>
        <li className="skills-icon">
          <i className="fa-brands fa-github"></i>
          <h4>GitHub</h4>
        </li>
        <li className="skills-icon">
          <i className="fa-solid fa-terminal"></i>
          <h4>Terminal</h4>
        </li>
        <li className="skills-icon">
          <i className="fa-brands fa-bootstrap"></i>
          <h4>Bootstrap</h4>
        </li>
        <li className="skills-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
          <h4>SEO</h4>
        </li>
        <li className="skills-icon">
          <i class="fa-solid fa-mobile-screen-button"></i>
          <h4>Responsive Design</h4>
        </li>
      </ul>
    </article>
  );
}
