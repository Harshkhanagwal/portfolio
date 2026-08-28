import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">

      <div className="container">

        {/* Section Header */}
        <div className="section-header">

          <span className="eyebrow">
            ABOUT ME
          </span>

          <h2>
            Building with
            <span className="gradient-text"> intelligence.</span>
          </h2>

        </div>


        {/* About Content */}
        <div className="about-content">

          <div className="glass about-main">

            <p className="about-intro">
              I'm Harsh, an AI Engineer focused on building
              intelligent applications and practical AI-powered
              solutions.
            </p>

            <p>
              My interests lie in Generative AI, Large Language
              Models, Retrieval-Augmented Generation, and building
              modern applications that bring these technologies
              into real-world use cases.
            </p>

            <p>
              I enjoy understanding how AI systems work under the
              hood and turning those concepts into useful products.
            </p>

          </div>


          {/* Focus Areas */}
          <div className="about-focus">

            <div className="glass focus-card">

              <span className="focus-number">
                01
              </span>

              <h3>
                Generative AI
              </h3>

              <p>
                LLMs, prompting, structured outputs,
                tool calling and AI application development.
              </p>

            </div>


            <div className="glass focus-card">

              <span className="focus-number">
                02
              </span>

              <h3>
                RAG Systems
              </h3>

              <p>
                Retrieval, embeddings, vector similarity
                and grounded AI responses.
              </p>

            </div>


            <div className="glass focus-card">

              <span className="focus-number">
                03
              </span>

              <h3>
                AI Engineering
              </h3>

              <p>
                Connecting AI capabilities with modern
                software and web applications.
              </p>

            </div>


            <div className="glass focus-card">

              <span className="focus-number">
                04
              </span>

              <h3>
                Continuous Learning
              </h3>

              <p>
                Exploring new AI technologies and
                understanding their practical applications.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;