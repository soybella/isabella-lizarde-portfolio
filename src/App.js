import React from "react";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="hero">
        <h1 className="p-4">Isabella Lizarde</h1>
        <h3>Front-end developer, based in California 🇺🇸</h3>
        <div className="navigation-links mb-5">
          <a
            href="/contact.html"
            className="contact-link"
            title="Contact Isabella"
          >
            Contact me
          </a>
          <a href="/about.html" className="about-link" title="About Isabella">
            About me
          </a>
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
