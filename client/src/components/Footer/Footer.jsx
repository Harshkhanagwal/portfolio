import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiInstagram,
  FiCamera,
} from "react-icons/fi";

import "./Footer.css";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        {/* ----------------- AI ASSISTANT CTA ----------------- */}

        <div className="footer-cta">

          <div className="personal-socials">

            <span className="personal-socials-label">
              FIND ME OUTSIDE
            </span>

            <div className="personal-socials-pills">

              <a
                href="https://www.instagram.com/harsh.khanagwal/"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <FiInstagram />

                <span>
                  @harsh.khanagwal
                </span>

                <FiArrowUpRight className="social-pill-arrow" />
              </a>


              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <FiCamera />

                <span>
                  Snapchat
                </span>

                <FiArrowUpRight className="social-pill-arrow" />
              </a>

            </div>

          </div>
        </div>


        {/* ----------------- FOOTER TOP ----------------- */}

        <div className="footer-top">

          <a
            href="#hero-section"
            className="footer-logo"
          >
            &lt;HK /&gt;
          </a>


          <button
            type="button"
            className="footer-back-top"
            onClick={handleBackToTop}
          >
            <span>
              BACK TO TOP
            </span>

            <FiArrowUpRight />
          </button>

        </div>


        {/* ----------------- FOOTER MAIN ----------------- */}

        <div className="footer-main">

          <div className="footer-identity">

            <span className="footer-name">
              HARSH KHANAGWAL
            </span>

            <span className="footer-role">
              AI ENGINEER · DEVELOPER · BUILDER
            </span>

          </div>


          {/* ----------------- SOCIAL LINKS ----------------- */}

          <div className="footer-links">

            <a
              href="mailto:harshkhanagwall29@gmail.com"
              className="footer-link"
            >
              <FiMail />
              <span>Email</span>
            </a>


            <a
              href="https://github.com/Harshkhanagwal"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>


            <a
              href="https://www.linkedin.com/in/harshkhanagwal/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>


        {/* ----------------- FOOTER BOTTOM ----------------- */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Harsh Khanagwal
          </span>

          <span>
            Built with React · AI · Curiosity
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;