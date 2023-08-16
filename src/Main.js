import React from "react";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import profilePhoto from "./images/temp-profile-image.JPG";

export default function Main() {
  return (
    <div className="Main" id="about">
      <div className="about-container container">
        <div className="row">
          <div className="col-lg-6 text-end border border-primary portfolio-about-image d-none d-lg-block">
            <img
              src={profilePhoto}
              className="img-fluid rounded portfolio-profile-image"
              alt="Isabella Lizarde"
            />
          </div>
          <div className="col-lg-6 about-me-container">
            <div className="about-header">
              <h2 className="mb-4 header">About Me</h2>
              <h5 className="mb-3">Hello World!</h5>
            </div>
            <div className="about-bio">
              <p>
                My name is Isabella Lizarde, and I'm a Front-end Web Developer
                based in California 🇺🇸 <br />
              </p>
              <p>
                I've always had a passion for creating beautiful works of art
                and bringing things to life visually. As a former art major, I
                believe that Front-end development is a perfect combination of
                art and logic, and I truly enjoy creating engaging, user
                friendly websites. <br />
              </p>
              <p>
                When I'm not coding, I like to spend my free time walking my
                dogs or catching up on the most recent video game! Feel free to
                send me a message below or on any of my socials!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row"> */}
      <Skills />
      {/* </div> */}
      {/* <br /> */}
      {/* <div className="row"> */}
      <Projects />
      {/* </div> */}
      {/* <br /> */}
      <Contact />
    </div>
  );
}
