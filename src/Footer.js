import React, { useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import "./Footer.css";

export default function Footer() {
  const [ref, isIntersecting] = useIntersectionObserver({
    rootMargin: "0px",
  });

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add("visible");
    } else {
      ref.current.classList.remove("visible");
    }
  }, [isIntersecting, ref]);

  return (
    <footer className="Footer fade-in-section" id="#footer" ref={ref}>
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
    </footer>
  );
}
