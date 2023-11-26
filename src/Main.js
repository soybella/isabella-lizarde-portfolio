import React from "react";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import profilePhoto from "./images/temp-profile-image.jpg";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main" id="about">
      <div className="about-container">
        <div className="row">
          <div className="col-lg-6 portfolio-about-image d-none d-lg-block">
            <img
              src={profilePhoto}
              className="img-fluid rounded"
              alt="Isabella Lizarde"
            />
          </div>
          <div className="col-lg-6 about-me-container container">
            <div className="about-header">
              <h2 className="header">About Me</h2>
            </div>
            <div className="about-bio">
              <p>
                Hello World! My name is Isabella Lizarde, and I'm a Front-end
                Web Developer based in California 🇺🇸 <br />
              </p>
              <p>
                I've always had a passion for creating beautiful works of art
                and bringing ideas to life. As a former art major, I believe
                that Front-end development is a perfect combination of art and
                logic, and I truly enjoy creating engaging, user friendly
                websites. <br />
              </p>
              <p>
                When I'm not coding, I like to spend my free time walking my
                dogs, catching up on some video games, or finding a new local
                coffee shop ☕️
                <br /> <br />
                Feel free to send me a message below if you have any questions!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
