import { useState } from "react";
import "./ContactSection.css";

import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiInstagram,
  FiCamera,
} from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="container">

        {/* ----------------- HEADER -------------- */}

        <div className="contact-header">

          <span className="eyebrow">
            CONTACT — let's build something meaningful
          </span>

          <h2>
            HAVE AN IDEA?
            <br />
            <span className="gradient-text">
              LET'S TALK.
            </span>
          </h2>

        </div>


        {/* ----------------- CONTACT PANEL -------------- */}

        <div className="contact-panel glass">

          {/* ----------------- LEFT CONTENT -------------- */}

          <div className="contact-left">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h3 className="contact-title">
              Let's build something{" "}
              <span className="gradient-text">
                meaningful.
              </span>
            </h3>

            <p className="contact-subtitle">
              Open to collaborations, internships, and interesting
              conversations. If you have an idea, let's talk.
            </p>


            {/* ----------------- CONTACT LINKS -------------- */}

            <div className="contact-links">

              <a
                href="mailto:harshkhanagwall29@gmail.com"
                className="contact-link"
              >
                <FiMail />

                <span>
                  harshkhanagwall29@gmail.com
                </span>

              </a>


              <a
                href="https://github.com/Harshkhanagwal"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FiGithub />

                <span>
                  github.com/Harshkhanagwal
                </span>

              </a>


              <a
                href="https://www.linkedin.com/in/harshkhanagwal/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FiLinkedin />

                <span>
                  linkedin.com/in/harshkhanagwal
                </span>

              </a>

            </div>

          </div>


          {/* ----------------- CONTACT FORM -------------- */}

          <form className="contact-form">

            {/* ----------------- NAME -------------- */}

            <div className="form-field">

              <label htmlFor="name">
                NAME
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />

            </div>


            {/* ----------------- EMAIL -------------- */}

            <div className="form-field">

              <label htmlFor="email">
                EMAIL
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />

            </div>


            {/* ----------------- SUBJECT -------------- */}

            <div className="form-field">

              <label htmlFor="subject">
                SUBJECT
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
              />

            </div>


            {/* ----------------- MESSAGE -------------- */}

            <div className="form-field">

              <label htmlFor="message">
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me a little about it..."
                required
              />

            </div>


            {/* ----------------- SUBMIT -------------- */}

            <button
              type="submit"
              className="btn btn-primary contact-submit"
            >
              SEND MESSAGE

              <span>
                ↗
              </span>

            </button>

          </form>

        </div>


        {/* ----------------- FOOTER -------------- */}
{/* 
        <div className="contact-footer">

          <span>
            HARSH KHANAGWAL
          </span>

          <span>
            AI ENGINEER · DEVELOPER · BUILDER
          </span>

        </div> */}

      </div>

    </section>
  );
}


export default Contact;