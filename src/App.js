import React from "react";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="hero-container">
        <div className="hero" id="homepage">
          <div className="header">
            <h1 className="pb-2">Isabella Lizarde</h1>
            <h2 className="pb-2">Front-end developer </h2>
            {/* <h2 className="pb-2">based in California 🇺🇸</h2> */}
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
