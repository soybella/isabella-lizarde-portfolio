import React from "react";
import DictionaryProject from "./DictionaryProject";
import WeatherProject from "./WeatherProject";
import AdviceGeneratorProject from "./AdviceGeneratorProject";
import LandingPageProject from "./LandingPageProject";
import CurrentProjects from "./CurrentProjects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="Projects" id="projects">
      <DictionaryProject />
      <WeatherProject />
      <AdviceGeneratorProject />
      <LandingPageProject />
      <CurrentProjects />
    </section>
  );
}
