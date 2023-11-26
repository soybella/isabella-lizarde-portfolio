import React from "react";
import BobaDateProject from "./BobaDateProject";
import TodoListProject from "./TodoListProject";
import "./Projects.css";

export default function CurrentProjects() {
  return (
    <div className="CurrentProjects">
      <TodoListProject />
      <BobaDateProject />
    </div>
  );
}
