import React, { useEffect, useState } from "react";
import "./AIchatbot.css";


const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock website scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating AI Button */}
      {!isOpen && (
        <button
          className="ai-floating-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
        >
          AI
        </button>
      )}

      {/* AI Chat Overlay */}
      {isOpen && (
        <div className="ai-overlay">

          {/* Chat Window */}
          <div className="ai-chat-window">

            {/* Header */}
            <div className="ai-chat-header">

              <div className="ai-chat-identity">
                <div className="ai-avatar">
                  AI
                </div>

                <div>
                  <h3>Harsh's AI Assistant</h3>
                  <span>AI representation of my work</span>
                </div>
              </div>

              {/* Mac-style window controls */}
              <div className="ai-window-controls">

                <button
                  className="window-control minimize"
                  aria-label="Minimize"
                />

                <button
                  className="window-control maximize"
                  aria-label="Maximize"
                />

                <button
                  className="window-control close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                />

              </div>
            </div>

            <div className="ai-chat-messages">

              {/* AI Message */}
              <div className="ai-message ai-message-left">
                <div className="ai-message-avatar">
                  AI
                </div>

                <div className="ai-message-wrapper">

                  <div className="ai-message-content">
                    <p>
                      Hi, I'm Harsh's AI Assistant.
                    </p>

                    <p>
                      I can tell you about Harsh's projects,
                      skills, experience, and background.
                    </p>
                  </div>

                  {/* Related Questions */}
                  <div className="ai-question-pills">
                    <button>
                      Tell me about his projects
                    </button>

                    <button>
                      What are his skills?
                    </button>

                    <button>
                      Tell me about his experience
                    </button>
                  </div>

                </div>
              </div>


              {/* User Message */}
              <div className="ai-message ai-message-right">

                <div className="ai-message-content">
                  <p>
                    What kind of AI projects has Harsh built?
                  </p>
                </div>

              </div>


              {/* AI Message */}
              <div className="ai-message ai-message-left">

                <div className="ai-message-avatar">
                  AI
                </div>

                <div className="ai-message-wrapper">

                  <div className="ai-message-content">
                    <p>
                      Harsh has worked on several AI-powered
                      applications using Generative AI.
                    </p>

                    <p>
                      One of his major projects is Next Move Prep,
                      an AI-powered interview preparation platform
                      that uses Gemini to analyze resumes and
                      job descriptions.
                    </p>
                  </div>

                  {/* Related Questions */}
                  <div className="ai-question-pills">

                    <button>
                      Tell me about Next Move Prep
                    </button>

                    <button>
                      What AI technologies does he use?
                    </button>

                    <button>
                      Show me his other AI projects
                    </button>

                  </div>

                </div>

              </div>


              {/* User Message */}
              <div className="ai-message ai-message-right">

                <div className="ai-message-content">
                  <p>
                    What technologies does he usually work with?
                  </p>
                </div>

              </div>


              {/* AI Message */}
              <div className="ai-message ai-message-left">

                <div className="ai-message-avatar">
                  AI
                </div>

                <div className="ai-message-wrapper">

                  <div className="ai-message-content">
                    <p>
                      His main stack includes React, Node.js,
                      Express, MongoDB, Redux Toolkit and
                      Generative AI technologies.
                    </p>
                  </div>

                  {/* Related Questions */}
                  <div className="ai-question-pills">

                    <button>
                      What is his strongest skill?
                    </button>

                    <button>
                      Tell me about his GenAI knowledge
                    </button>

                    <button>
                      Which project uses this stack?
                    </button>

                  </div>

                </div>

              </div>

            </div>
            {/* Input */}
            <div className="ai-chat-input">

              <input
                type="text"
                placeholder="Ask me something..."
              />

              <button
                className="ai-send-button"
                aria-label="Send message"
              >
                →
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;