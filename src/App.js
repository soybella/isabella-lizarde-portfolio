import React from "react";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App" id="homepage">
      <NavBar />
      <div className="hero-container">
        <div className="hero">
          <div className="hero-header">
            <h1>Hello, I'm Isabella.</h1>
            <h2 className="py-2">Front-end developer </h2>
          </div>
          <p className="downArrow">
            <i className="fa-solid fa-chevron-down fa-bounce"></i>
          </p>
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
