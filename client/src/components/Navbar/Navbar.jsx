import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  /* =========================================================
     LOAD SAVED THEME
     ========================================================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setLightTheme(true);
      document.documentElement.classList.add("light-theme");
    }
  }, []);

  /* =========================================================
     THEME TOGGLE
     ========================================================= */

  const toggleTheme = () => {
    setLightTheme((current) => {
      const nextTheme = !current;

      document.documentElement.classList.toggle(
        "light-theme",
        nextTheme
      );

      localStorage.setItem(
        "theme",
        nextTheme ? "light" : "dark"
      );

      return nextTheme;
    });
  };

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =========================================================
     ESCAPE KEY
     ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     ACTIVE SECTION
     ========================================================= */

  useEffect(() => {
    const sections = [
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        /*
         * This makes the section near the upper-middle
         * portion of the viewport the active section.
         */
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     NAVIGATION CLICK
     ========================================================= */

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        {/* =================================================
            LOGO
            ================================================= */}

        <a
          href="#hero-section"
          className="navbar-logo"
          onClick={closeMenu}
        >
          &lt;HK /&gt;
        </a>


        {/* =================================================
            NAVIGATION
            ================================================= */}

        <div
          className={`navbar-links ${
            menuOpen ? "menu-active" : ""
          }`}
        >

          <a
            href="#about"
            className={
              activeSection === "about"
                ? "active"
                : ""
            }
            onClick={() => handleNavigation("about")}
          >
            About
          </a>

          <a
            href="#skills"
            className={
              activeSection === "skills"
                ? "active"
                : ""
            }
            onClick={() => handleNavigation("skills")}
          >
            Skills
          </a>

          <a
            href="#experience"
            className={
              activeSection === "experience"
                ? "active"
                : ""
            }
            onClick={() =>
              handleNavigation("experience")
            }
          >
            Experience
          </a>

          <a
            href="#projects"
            className={
              activeSection === "projects"
                ? "active"
                : ""
            }
            onClick={() =>
              handleNavigation("projects")
            }
          >
            Projects
          </a>

          <a
            href="#contact"
            className={
              activeSection === "contact"
                ? "active"
                : ""
            }
            onClick={() =>
              handleNavigation("contact")
            }
          >
            Contact
          </a>

        </div>


        {/* =================================================
            THEME
            ================================================= */}

        <button
          className="navbar-theme"
          type="button"
          onClick={toggleTheme}
          aria-label={
            lightTheme
              ? "Switch to dark theme"
              : "Switch to light theme"
          }
        >
          {lightTheme ? "☾" : "☼"}
        </button>


        {/* =================================================
            MOBILE MENU
            ================================================= */}

        <button
          className={`navbar-menu ${
            menuOpen ? "menu-open" : ""
          }`}
          type="button"
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </nav>

    </header>
  );
}

export default Navbar;