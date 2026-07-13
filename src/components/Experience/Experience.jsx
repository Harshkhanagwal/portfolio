import React from 'react'
import './Experience.css'

const experienceData = [
  {
    role: 'Frontend Engineer',
    time: 'May 2025 — Present',
    company: 'Tata Consultancy Services',
    desc: 'Working on an internal AI-powered enterprise platform, focusing on scalable UI components and predictable frontend systems.',
    tags: ['React', 'JavaScript', 'AI UI']
  },
  {
    role: 'Software Engineering Intern',
    time: 'Internship',
    company: 'Makkpress Technologies',
    desc: 'Focused on backend fundamentals, API development in MERN stack also working on CMS based tools for eCommerce products',
    tags: ['Node.js', 'APIs']
  },
  {
    role: 'Developer Intern',
    time: 'Internship',
    company: 'Radionics Technologies',
    desc: 'Worked on the frontend part of .net based web application.',
    tags: ['JavaScript', 'Git', 'HTML', 'CSS', 'javascript']
  }
]

const Experience = () => {
  return (
    <section className="section main experience-section">
      <div className="container experience-container">
        <h3 className="h3 section-heading">
          <span className="g-txt">{`<`}</span>
          Experience
          <span className="g-txt">{`/>`}</span>
        </h3>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <div className="experience-head">
                  <span className="role">{exp.role}</span>
                  <span className="time">{exp.time}</span>
                </div>

                <div className="company">{exp.company}</div>

                <p className="txt experience-desc">{exp.desc}</p>

                <div className="experience-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="exp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
