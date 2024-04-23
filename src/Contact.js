import React from "react";
import "./Contact.css";

export default function Contact() {
  const resumeLink =
    "https://drive.google.com/file/d/1BusgZZ6Ab3pYJArAg2_LiIjW96QXPADD/view?usp=drive_link";

  return (
    <article className="Contact" id="contact">
      <section className="container contact-container container-bg px-5 py-3">
        <div className="row">
          <h2 className="contact-header text-center border-0 py-3">
            Contact me 💌{" "}
          </h2>
          <form id="contact-form">
            <div className="row">
              <div className="container col-sm input-details">
                <input type="text" placeholder="name"></input>
                <input type="text" placeholder="email"></input>
                <textarea className="pb-4" placeholder="message"></textarea>
                <a
                  href="mailto:isabellaj.lizarde@gmail.com"
                  className="button-link contact-button-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send Message
                </a>
              </div>
              <div className="contact-info container">
                <p>
                  If you have any questions about my work or want to grab a
                  coffee and chat about anything true crime or paranormal - go
                  ahead and send me a message on here or on any of my socials,
                  thanks for stopping by. <br /> <br /> Download my Resume{" "}
                  <a href={resumeLink} target="_blank" rel="noreferrer">
                    {" "}
                    here
                  </a>
                  !
                </p>
                <div class="social-media">
                  <ul class="icons pt-3">
                    <li>
                      <a
                        href="https://github.com/soybella"
                        title="Isabella's Github"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/isabellalizarde/"
                        title="Isabella's LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </article>
  );
}
