import React from 'react'
import './Contact.css'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id='contact' className="section main contact-section">
      <div className="container contact-container">
        <div className="contact-box">

          <div className="contact-left">
            <h3 className="h3 contact-title">
              Let's build something <span className="g-txt">meaningful</span>
            </h3>

            <p className="txt contact-subtitle">
              Open to collaborations, internships, and interesting conversations.
              If you have an idea, let's talk.
            </p>

            <div className="contact-links">
              <a href="mailto:yourmail@gmail.com" className="contact-link">
                <FiMail /> yourmail@gmail.com
              </a>

              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="contact-link">
                <FiGithub /> github.com/yourusername
              </a>

              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="contact-link">
                <FiLinkedin /> linkedin.com/in/yourusername
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <input type="tel" placeholder="Phone (optional)" />
              <textarea placeholder="Your message" rows="4"></textarea>

              <button type="submit" className="primary-button">
                Send Message <FiSend />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
