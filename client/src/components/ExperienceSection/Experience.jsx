import "./Experience.css";

const experienceData = [
  {
    id: 1,
    role: "Programmer",
    company: "Tata Consultancy Services",
    type: "Full-time",
    duration: "May 2025 - Present",
    location: "On-site",
    description:
      "Working on software development and engineering solutions in a professional enterprise environment.",
    skills: [
      "Software Development",
      "Problem Solving",
      "Engineering"
    ]
  },

  {
    id: 2,
    role: "Web Designer Intern",
    company: "MakkPress Technologies",
    type: "Internship",
    duration: "Sep 2024 - Oct 2024",
    location: "India",
    description:
      "Worked on web interfaces and contributed to building responsive and user-focused web experiences.",
    skills: [
      "HTML5",
      "React.js",
      "Web Design",
      "Responsive Design"
    ]
  },

  {
    id: 3,
    role: "Web Development Intern",
    company: "Radionics Technology",
    type: "Internship",
    duration: "Jul 2023 - Aug 2023",
    location: "New Delhi, India",
    description:
      "Gained practical experience in web development while working on real-world web projects.",
    skills: [
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="container">

        {/* ----------------- HEADER -------------- */}

        <div className="experience-header">

          <span className="eyebrow">
            EXPERIENCE
          </span>

          <h2>
            Where I've
            <span className="gradient-text"> worked.</span>
          </h2>

          <p>
            My professional journey across software development,
            web development and design.
          </p>

        </div>


        {/* ----------------- EXPERIENCE LIST -------------- */}

        <div className="experience-list">

          {experienceData.map((experience, index) => (

            <article
              className="experience-item"
              key={experience.id}
            >

              {/* ----------------- TIMELINE -------------- */}

              <div className="experience-timeline">

                <span className="experience-dot"></span>

                {index !== experienceData.length - 1 && (
                  <span className="experience-line"></span>
                )}

              </div>


              {/* ----------------- EXPERIENCE CARD -------------- */}

              <div className="experience-card glass">

                <div className="experience-role-row">

                  <div>

                    <h3>
                      {experience.role}
                    </h3>

                    <div className="experience-company">

                      <span>
                        {experience.company}
                      </span>

                      <span className="experience-separator">
                        ·
                      </span>

                      <span>
                        {experience.type}
                      </span>

                    </div>

                  </div>


                  <span className="experience-number">
                    0{index + 1}
                  </span>

                </div>


                {/* ----------------- META -------------- */}

                <div className="experience-meta">

                  <span>
                    {experience.duration}
                  </span>

                  <span>
                    {experience.location}
                  </span>

                </div>


                {/* ----------------- DESCRIPTION -------------- */}

                <div className="experience-description">

                  <p>
                    {experience.description}
                  </p>

                </div>


                {/* ----------------- SKILLS -------------- */}

                <div className="experience-skills">

                  {experience.skills.map((skill) => (

                    <span key={skill}>
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;