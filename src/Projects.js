import React from "react";
import DictionaryProject from "./DictionaryProject";
import WeatherProject from "./WeatherProject";
import TravelProject from "./TravelProject";
import WorldClockProject from "./WorldClockProject";
import CurrentProjects from "./CurrentProjects";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <h2 className="header container text-center">Projects</h2>
      <DictionaryProject />
      <WeatherProject />
      <TravelProject />
      <WorldClockProject />
      <CurrentProjects />
    </div>
  );
}
