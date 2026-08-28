import "./Skills2.css";

function Skill2() {
  return (
    <section id="skills" className="skill2-section">

      <div className="container">

        {/* ----------------- HEADER -------------- */}

        <div className="skill2-header">

          <span className="eyebrow">
            SKILLS
          </span>

          <h2>
            What I work
            <span className="gradient-text"> with.</span>
          </h2>

          <p>
            A practical stack for building modern web applications
            and intelligent AI-powered experiences.
          </p>

        </div>


        {/* ----------------- SKILL MAP -------------- */}

        <div className="skill2-map">


          {/* ----------------- CENTER NODE -------------- */}

          <div className="skill2-center glass">

            <span className="skill2-center-code">
              &lt;/&gt;
            </span>

            <span>
              MY SKILLS
            </span>

          </div>


          {/* ----------------- CONNECTION LINES -------------- */}

          <div className="skill2-line skill2-line-left"></div>

          <div className="skill2-line skill2-line-center"></div>

          <div className="skill2-line skill2-line-right"></div>


          {/* ----------------- DEVELOPMENT -------------- */}

          <div className="skill2-branch-card skill2-development glass">

            <div className="skill2-branch-header">

              <span className="skill2-number">
                01
              </span>

              <span className="skill2-label">
                DEVELOPMENT
              </span>

            </div>


            <div className="skill2-tags">

              <span>React</span>
              <span>Redux</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>REST APIs</span>
              <span>HTML</span>
              <span>CSS</span>

            </div>

          </div>


          {/* ----------------- GENERATIVE AI -------------- */}

          <div className="skill2-branch-card skill2-genai glass">

            <div className="skill2-branch-header">

              <span className="skill2-number">
                02
              </span>

              <span className="skill2-label">
                GENERATIVE AI
              </span>

            </div>


            <div className="skill2-ai-content">


              <div className="skill2-ai-feature">

                <span className="skill2-ai-dot"></span>

                <div>

                  <strong>
                    LLMs & Prompting
                  </strong>

                  <p>
                    Building LLM applications with effective prompting
                    and structured outputs.
                  </p>

                </div>

              </div>


              <div className="skill2-ai-feature">

                <span className="skill2-ai-dot"></span>

                <div>

                  <strong>
                    RAG & Retrieval
                  </strong>

                  <p>
                    Grounding AI responses using RAG, embeddings
                    and vector search.
                  </p>

                </div>

              </div>


              <div className="skill2-ai-feature">

                <span className="skill2-ai-dot"></span>

                <div>

                  <strong>
                    Agents & Tool Calling
                  </strong>

                  <p>
                    Connecting AI models with tools to perform
                    useful actions.
                  </p>

                </div>

              </div>


              <div className="skill2-ai-feature">

                <span className="skill2-ai-dot"></span>

                <div>

                  <strong>
                    Conversational AI
                  </strong>

                  <p>
                    Creating context-aware experiences with memory,
                    streaming and multi-turn interactions.
                  </p>

                </div>

              </div>


            </div>


            {/* ----------------- AI STACK -------------- */}

            <div className="skill2-tags skill2-ai-tags">

              <span>Groq</span>
              <span>Embeddings</span>
              <span>Vector Search</span>

            </div>

          </div>


          {/* ----------------- TOOLS -------------- */}

          <div className="skill2-branch-card skill2-tools glass">

            <div className="skill2-branch-header">

              <span className="skill2-number">
                03
              </span>

              <span className="skill2-label">
                TOOLS
              </span>

            </div>


            <div className="skill2-tags">

              <span>Git</span>
              <span>GitHub</span>
              <span>Vercel</span>
              <span>VS Code</span>
              <span>Figma</span>
              <span>Postman</span>
              <span>Linux</span>
              <span>AWS</span>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}

export default Skill2;