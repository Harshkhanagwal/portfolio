import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="container">

        {/* ----------------- SECTION HEADER -------------- */}

        <div className="section-header">

          <span className="eyebrow">
            SKILLS
          </span>

          <h2>
            Tools for building
            <span className="gradient-text">
              {" "}intelligence.
            </span>
          </h2>

          <p>
            Technologies and concepts I use to build
            AI-powered applications and modern web experiences.
          </p>

        </div>


        {/* ----------------- SKILLS GRID -------------- */}

        <div className="skills-grid">

          {/* ----------------- GENERATIVE AI -------------- */}

          <div className="glass skill-card skill-featured">

            <div className="skill-card-top">

              <span className="skill-number">
                01
              </span>

              <span className="skill-category">
                GENAI
              </span>

            </div>

            <h3>
              Generative AI
            </h3>

            <p>
              Building applications around large language
              models and modern AI capabilities.
            </p>

            <div className="skill-list">

              <span>LLMs</span>
              <span>Prompt Engineering</span>
              <span>Structured Outputs</span>
              <span>Tool Calling</span>
              <span>Streaming</span>
              <span>Conversation Memory</span>

            </div>

          </div>


          {/* ----------------- RAG -------------- */}

          <div className="glass skill-card">

            <div className="skill-card-top">

              <span className="skill-number">
                02
              </span>

              <span className="skill-category">
                AI SYSTEMS
              </span>

            </div>

            <h3>
              RAG & Retrieval
            </h3>

            <p>
              Designing retrieval pipelines that ground
              LLM responses in relevant information.
            </p>

            <div className="skill-list">

              <span>RAG</span>
              <span>Embeddings</span>
              <span>Vector Search</span>
              <span>Cosine Similarity</span>
              <span>Top-K Retrieval</span>
              <span>Chunking</span>

            </div>

          </div>


          {/* ----------------- DEVELOPMENT -------------- */}

          <div className="glass skill-card">

            <div className="skill-card-top">

              <span className="skill-number">
                03
              </span>

              <span className="skill-category">
                DEVELOPMENT
              </span>

            </div>

            <h3>
              Web Development
            </h3>

            <p>
              Building responsive interfaces and applications
              that connect AI with real-world experiences.
            </p>

            <div className="skill-list">

              <span>React</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>REST APIs</span>

            </div>

          </div>


          {/* ----------------- TOOLS -------------- */}

          <div className="glass skill-card">

            <div className="skill-card-top">

              <span className="skill-number">
                04
              </span>

              <span className="skill-category">
                TOOLS
              </span>

            </div>

            <h3>
              Tools & Platforms
            </h3>

            <p>
              Tools and platforms I use to develop,
              deploy and manage applications.
            </p>

            <div className="skill-list">

              <span>Git</span>
              <span>GitHub</span>
              <span>Vercel</span>
              <span>Groq</span>
              <span>NumPy</span>
              <span>LangChain</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;