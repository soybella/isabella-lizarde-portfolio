import React from "react";
import TicTacToeProject from "./TicTacToeProject";
import "./Projects.css";

export default function CurrentProjects() {
  return (
    <div className="CurrentProjects">
      <h2 className="header container text-center">Current Projects</h2>
      <TicTacToeProject />
    </div>
  );
}
