import React, { createContext, useState } from "react";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ReactSwitch from "react-switch";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const sunIcon = <i className="fa-regular fa-sun sun"></i>;
  const moonIcon = <i className="fa-regular fa-moon moon"></i>;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="hero-container" id="top">
          <NavBar />
          <div className="hero">
            <div className="hero-header">
              <h1>Hello, I'm Isabella.</h1>
              <h2 className="py-2">Front-end developer </h2>
            </div>
            <p className="downArrow">
              <i className="fa-solid fa-chevron-down fa-bounce"></i>
            </p>
            <div className="toggleSwitch">
              <ReactSwitch
                onChange={toggleTheme}
                checked={theme === "light"}
                checkedIcon={sunIcon}
                uncheckedIcon={moonIcon}
                onColor="#166678"
                offColor="#FFFFFF"
                offHandleColor="#166678"
                width={70}
              />
            </div>
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
