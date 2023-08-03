import React from "react";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="container work-inquiry container-bg mt-5">
        <div className="row">
          <h1>Contact me 💌 </h1>
          {/* <div className="col-md-6"> */}
          <form>
            <div className="row">
              <div className="container col-sm input-details">
                <input type="text" placeholder="name"></input>
                <input type="text" placeholder="email"></input>
                <textarea placeholder="message"></textarea>
                <a
                  href="#"
                  className="button-link work-inquiry-link"
                  title="Work Inquiry"
                >
                  Send Message
                </a>
              </div>
              <div className="contact-info container">
                <p>
                  If you have any questions about my work or want to grab a
                  coffee and chat about anything true crime or paranormal, I'm
                  your girl! <br /> <br /> Go ahead and send me a message on
                  here or on any of my social media accounts, thanks for
                  stopping by ♡
                </p>
                <div class="social-media">
                  {/* <a
                    href="mailto:isabellaj.lizarde@gmail.com"
                    class="email-link text-muted"
                    title="Email Isabella"
                  >
                    isabellaj.lizarde@gmail.com
                  </a> */}
                  <ul class="icons pt-3">
                    {/* <li>
                      <a
                        href="https://www.instagram.com/s0ybella_/"
                        title="Isabella's Instagram"
                        target="_blank"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.facebook.com/IsabellaJanellee"
                        title="Isabella's Facebook"
                        target="_blank"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/isabellalizarde/"
                        title="Isabella's LinkedIn"
                        target="_blank"
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
      </div>
    </div>
    // </div>
  );
}
