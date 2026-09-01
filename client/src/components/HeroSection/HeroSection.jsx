import React, { useEffect, useState } from "react";

import heroImage from "../../assets/heroimage.png";
import heroImageLight from "../../assets/hero-light.png";

import "./HeroSection.css";

const HeroSection = () => {
  const [lightTheme, setLightTheme] = useState(
    document.documentElement.classList.contains("light-theme")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setLightTheme(
        document.documentElement.classList.contains("light-theme")
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const currentHeroImage = lightTheme
    ? heroImageLight
    : heroImage;

  return (
    <section
      id="hero-section"
      className="hero-section"
      style={{
        backgroundImage: `url(${currentHeroImage})`,
      }}
    >
      <span className="overlay-white">

      </span>
      <div className="hero-content container">

        <span className="hero-eyebrow">
          HELLO, I'M
        </span>

        <h1 className="hero-name">
          HARSH{" "}
          <span className="gradient-text">
            KHANAGWAL
          </span>
        </h1>

        <h2 className="hero-role">
          AI ENGINEER
          <br />
          <span>&amp; GENAI DEVELOPER</span>
        </h2>

        <p className="hero-description">
          Building intelligent systems that connect AI
          with real-world applications.
        </p>

        <div className="hero-status">
          <span className="status-dot"></span>
          <span>Open to opportunities</span>
        </div>

        <div className="hero-actions">

          <a
            href="#projects"
            className="btn btn-primary"
          >
            Explore My Work
            <span>↗</span>
          </a>

          <a
            href="#contact"
            className="btn btn-glass"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;