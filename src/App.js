import React, { useState } from "react";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ReactSwitch from "react-switch";
import "./App.css";

function App() {
  const [isChecked, setIsChecked] = useState(true);

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkTheme();
  }

  const toggleTheme = (event) => {
    console.log(event);
    if (event === true) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
    setIsChecked((current) => !current);
  };

  const sunIcon = <i className="fa-regular fa-sun sun"></i>;
  const moonIcon = <i className="fa-regular fa-moon moon"></i>;

  return (
    <div className="App" id="homepage">
      <header className="hero-container" id="top">
        <NavBar />
        <div className="hero">
          <hgroup className="hero-header">
            <h1>Hello, I'm Isabella.</h1>
            <h2 className="py-2">Front-end Developer </h2>
          </hgroup>
          <p className="downArrow">
            <i className="fa-solid fa-chevron-down fa-bounce"></i>
          </p>
          <div className="toggleSwitch">
            <ReactSwitch
              onChange={toggleTheme}
              value={isChecked}
              type="checkbox"
              inputMode="checkbox"
              checked={selectedTheme === "light"}
              checkedIcon={sunIcon}
              uncheckedIcon={moonIcon}
              onColor="#166678"
              offColor="#FFFFFF"
              offHandleColor="#166678"
              width={70}
            />
          </div>
        </div>
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
