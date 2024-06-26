import React, { useState, useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ReactSwitch from "react-switch";
import "./App.css";

function App() {
  const sunIcon = <i className="fa-regular fa-sun sun"></i>;
  const moonIcon = <i className="fa-regular fa-moon moon"></i>;
  const [isChecked, setIsChecked] = useState(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    return selectedTheme !== "dark";
  });

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, []);

  const toggleTheme = (checked) => {
    if (checked) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
    setIsChecked(checked);
  };

  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin: "-220px",
  });

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      if (isIntersecting) {
        currentRef.classList.add("visible");
      } else {
        currentRef.classList.remove("visible");
      }
    }
  }, [isIntersecting, ref]);

  return (
    <div className="App" id="homepage">
      <header className="hero-container fade-in-section" id="top" ref={ref}>
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
              checked={isChecked}
              checkedIcon={sunIcon}
              uncheckedIcon={moonIcon}
              onColor="#daa520"
              onHandleColor="#0e2c39"
              offColor="#FFFFFF"
              offHandleColor="#daa520"
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
