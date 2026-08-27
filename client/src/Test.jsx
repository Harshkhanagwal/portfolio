

function Test() {
  return (
    <main>
      <div className="container">

        {/* Typography */}
        <section>
          <span className="eyebrow">TYPOGRAPHY</span>

          <h1>
            HARSH <span className="gradient-text">KHANAGWAL</span>
          </h1>

          <h2>Heading Two</h2>
          <h3>Heading Three</h3>
          <h4>Heading Four</h4>

          <p>
            This is a paragraph using JetBrains Mono.
            This represents the primary body typography.
          </p>

          <p className="text-secondary">
            Secondary text
          </p>

          <p className="text-muted">
            Muted text
          </p>

          <p className="text-accent">
            Accent text
          </p>

          <span className="tech-text">
            RAG / LLM / GENAI
          </span>
        </section>


        {/* Links */}
        <section>
          <span className="eyebrow">LINKS</span>

          <a href="/">About Me</a>
          <br />
          <a href="/">View Projects ↗</a>
          <br />
          <a href="/">Contact</a>
        </section>


        {/* Glass */}
        <section className="glass">

          <span className="eyebrow">
            PROJECT / 001
          </span>

          <h3>
            HR RAG Assistant
          </h3>

          <p>
            Retrieval augmented generation application
            built using embeddings, similarity search and Groq.
          </p>

        </section>


        {/* Buttons */}
        <section>

          <button className="btn btn-primary">
            Explore My Work
          </button>

          <button className="btn btn-glass">
            View Projects
          </button>

          <button className="btn btn-accent">
            Ask Harsh's AI
          </button>

        </section>


        {/* Form */}
        <section className="glass">

          <form className="form">

            <div className="form-group">
              <label className="form-label">
                Name
              </label>

              <input
                className="form-input"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Email
              </label>

              <input
                className="form-input"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Message
              </label>

              <textarea
                className="form-textarea"
                placeholder="Your message..."
              />
            </div>

            <label className="form-checkbox">
              <input type="checkbox" />
              <span>I agree to be contacted.</span>
            </label>

            <button className="form-submit" type="button">
              Send Message ↗
            </button>

          </form>

        </section>

      </div>
    </main>
  );
}

export default Test;