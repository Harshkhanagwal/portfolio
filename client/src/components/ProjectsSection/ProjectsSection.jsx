import { useState } from "react";
import "./ProjectsSection.css";

const projectsData = [
  {
    id: 1,
    title: "Next Move Prep",
    subtitle: "AI-Powered Interview Preparation Platform",
    category: "AI / FULL STACK",
    description:
      "An AI-powered platform that analyzes resumes and job descriptions to create personalized interview preparation plans.",
    highlights: [
      "Resume & job description analysis",
      "ATS matching & skill-gap analysis",
      "AI-generated interview preparation",
      "Structured AI reports",
    ],
    technologies: ["MERN", "Redux Toolkit", "Gemini AI"],
    liveUrl: "https://next-move-prep-with-gen-ai.vercel.app",
  },

  {
    id: 2,
    title: "Koding Kaksha AI",
    subtitle: "AI-Powered Learning & Coding Platform",
    category: "AI / FULL STACK",
    description:
      "A full-stack learning platform combining course management, coding and AI-assisted learning.",
    highlights: [
      "Role-based learning dashboards",
      "Multi-language coding environment",
      "AI doubt resolution & code explanations",
      "Course and discussion management",
    ],
    technologies: ["MERN", "Redux Toolkit", "Gemini API"],
    liveUrl: "https://koding-kaksha-ai.vercel.app",
  },

  {
    id: 3,
    title: "Easy C",
    subtitle: "Custom C Library",
    category: "C / TEAM PROJECT",
    description:
      "A team project focused on building reusable C utilities and example-driven technical documentation.",
    highlights: [
      "Reusable data structure utilities",
      "Modular C library",
      "Example-driven documentation",
      "Team-based development",
    ],
    technologies: ["C", "Technical Documentation"],
    liveUrl: "https://easyc.netlify.app",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projectsData.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projectsData.length - 1 : current - 1
    );
  };

  return (
    <section id="projects" className="projects-section">

      <div className="container">

        {/* ----------------- HEADER -------------- */}

        <div className="projects-header">

          <span className="eyebrow">
            PROJECTS
          </span>

          <h2>
            Things I've
            <span className="gradient-text"> built.</span>
          </h2>

          <p>
            A selection of projects where I combine software
            engineering with practical AI applications.
          </p>

        </div>


        {/* ----------------- SLIDER -------------- */}

        <div className="projects-slider">

          <div className="projects-track">

            {projectsData.map((project, index) => {

              const offset = index - activeIndex;

              return (
                <article
                  key={project.id}
                  className={`project-card glass ${
                    index === activeIndex ? "active" : ""
                  }`}
                  style={{
                    "--offset": offset,
                  }}
                >

                  {/* ----------------- CARD HEADER -------------- */}

                  <div className="project-card-top">

                    <span className="project-category">
                      {project.category}
                    </span>

                    <span className="project-number">
                      0{project.id}
                    </span>

                  </div>


                  {/* ----------------- PROJECT TITLE -------------- */}

                  <div className="project-title-area">

                    <h3>
                      {project.title}
                    </h3>

                    <span className="project-subtitle">
                      {project.subtitle}
                    </span>

                  </div>


                  {/* ----------------- DESCRIPTION -------------- */}

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* ----------------- DETAILS -------------- */}

                  <div className="project-details">

                    <div className="project-highlights">

                      <span className="project-detail-label">
                        CAPABILITIES
                      </span>

                      <div className="project-highlight-list">

                        {project.highlights.map((highlight) => (

                          <div
                            className="project-highlight"
                            key={highlight}
                          >

                            <span className="project-highlight-dot"></span>

                            <span>
                              {highlight}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>


                    <div className="project-stack">

                      <span className="project-detail-label">
                        STACK
                      </span>

                      <div className="project-tags">

                        {project.technologies.map((technology) => (

                          <span key={technology}>
                            {technology}
                          </span>

                        ))}

                      </div>

                    </div>

                  </div>


                  {/* ----------------- CARD FOOTER -------------- */}

                  <div className="project-footer">

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>
                        {project.id === 3
                          ? "View Documentation"
                          : "View Live Project"}
                      </span>

                      <span className="project-arrow">
                        ↗
                      </span>

                    </a>

                  </div>

                </article>
              );
            })}

          </div>


          {/* ----------------- NAVIGATION -------------- */}

          <div className="projects-navigation">

            <button
              type="button"
              className="project-nav-button"
              onClick={previousProject}
              aria-label="Previous project"
            >
              ←
            </button>


            <div className="project-progress">

              <span className="project-progress-current">
                0{activeIndex + 1}
              </span>

              <span className="project-progress-line"></span>

              <span className="project-progress-total">
                0{projectsData.length}
              </span>

            </div>


            <button
              type="button"
              className="project-nav-button"
              onClick={nextProject}
              aria-label="Next project"
            >
              →
            </button>

          </div>


          {/* ----------------- DOTS -------------- */}

          <div className="project-dots">

            {projectsData.map((project, index) => (

              <button
                key={project.id}
                type="button"
                className={`project-dot ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show project ${index + 1}`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;