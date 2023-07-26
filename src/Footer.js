import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="footer">
        <div class="social-media pt-5">
          <a
            href="mailto:isabellaj.lizarde@gmail.com"
            class="email-link text-muted"
            title="Email Isabella"
          >
            isabellaj.lizarde@gmail.com
          </a>
          <ul class="icons pt-5">
            <li>
              <a
                href="https://www.instagram.com/s0ybella_/"
                title="Isabella's Instagram"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/IsabellaJanellee"
                title="Isabella's Facebook"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
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
        <p class="text-center mt-4">
          Coded with 🖤 by
          <a
            href="https://github.com/soybella/SheCodes-Portfolio-Project"
            target="_blank"
            class="footer-link"
            title="Isabella's GitHub"
          >
            Isabella Lizarde
          </a>
        </p>
      </div>
    </div>
  );
}
