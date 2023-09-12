import React, { createContext, useState } from "react";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState();

  function lightTheme() {
    setTheme("light");
  }

  function darkTheme() {
    setTheme("dark");
  }
  // setTheme((current) => (current === "light" ? "dark" : "light"));
  // setTheme("light");
  // };
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      <div className="hero-container">
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
            {/* <ul>
                <li> */}
            <button onClick={lightTheme} className="light-mode">
              <i className="fa-solid fa-sun"></i>
            </button>
            {/* </li>
                <li> */}
            <button onClick={darkTheme} className="dark-mode">
              <i className="fa-solid fa-moon"></i>
            </button>
            {/* </li>
              </ul> */}
          </div>
        </div>
      </div>
      <Main />
      <Footer />
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;
