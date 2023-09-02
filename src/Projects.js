import React from "react";
import DictionaryProject from "./DictionaryProject";
import WeatherProject from "./WeatherProject";
import TravelProject from "./TravelProject";
import WorldClockProject from "./WorldClockProject";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects" id="projects">
      <DictionaryProject />
      <WeatherProject />
      <TravelProject />
      <WorldClockProject />
    </div>
  );
}
