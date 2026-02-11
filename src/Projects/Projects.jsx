import React, { useState } from 'react'
import './Projects.css'
import { FaGithub } from "react-icons/fa6"
import { FiExternalLink } from "react-icons/fi"
import codingBuddy from '../assets/codingbuddy.png'
import textEvoke from '../assets/textEvoke.png'
import easyC from '../assets/easyC.png'

const Projects = () => {
  const [projects] = useState([
    {
    title: "Coding Buddy – AI-based IDE",
    description:
      "A web-based IDE that supports code execution in 50+ languages with an AI assistant that explains logic step by step, helping users learn and debug effectively.",
    image: codingBuddy,
    skills: ["React.js", "Vite", "AI Integration", "Piston API"],
    github: "",
    live: "https://coding-buddy-ai.netlify.app"
  },
  {
    title: "Text Evoke-AI",
    description:
      "An AI-powered web application for article generation and text summarization, built with reusable React components and API-driven content processing.",
    image: textEvoke,
    skills: ["React.js", "APIs", "AI"],
    github: "",
    live: "https://textevoke-ai.netlify.app"
  },
  {
    title: "Easy C - Custom C Library",
    description:
      "A team-built custom C library offering reusable functions for common data structures, accompanied by a clean documentation website for easy adoption.",
    image: easyC,
    skills: ["C", "Data Structures", "Documentation"],
    github: "",
    live: "https://easyc.netlify.app"
  }
  ])

  return (
    <section id='projects' className='section main project-section'>
      <div className="container projects-container">
        <h2 className="h3 section-heading">
          <span className='g-txt'>{`<`}</span>
          Projects
          <span className='g-txt'>{`/>`}</span>
        </h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card border-subtle">
              <div className="project-ss-container">
                <img src={project.image} className="project-ss" alt={project.title} />
              </div>

              <div className="project-card-content">
                <div className="h4 g-txt project-title">
                  {project.title}
                </div>

                <p className="txt">
                  {project.description}
                </p>

                <div className="capsules">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="skill-capsule border-subtle">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="icon" target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    className="live-demo-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live Demo <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
