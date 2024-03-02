import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer" id="#footer">
      <p className="container text-center mt-3">
        Coded with ♥ by{" "}
        <a
          href="https://github.com/soybella/isabella-lizarde-portfolio"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
          title="Isabella's GitHub"
        >
          Isabella Lizarde
        </a>{" "}
        2024
      </p>
      <a href="#top" className="container text-center to-top-link">
        {" "}
        Back to top
      </a>
    </div>
  );
}
