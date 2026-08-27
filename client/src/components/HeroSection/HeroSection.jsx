import React from 'react'
import heroImage from "../../assets/heroimage.png";
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section id="hero-section" class="hero-section" style={{ backgroundImage: `url(${heroImage})`, maxHeight: '100vh', minHeight: '100vh', backgroundPosition: 'right', backgroundSize:'cover', backgroundRepeat: "no-repeat"}} >
        <div className="hero-content container">
               <span className="hero-eyebrow">
          HELLO, I'M
        </span>

        <h1 className="hero-name">
          HARSH <span className="gradient-text">KHANAGWAL</span>
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
  )
}

export default HeroSection